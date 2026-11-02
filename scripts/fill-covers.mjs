// Usage: npm run fill-covers
// For books with no cover (no ISBN in the Goodreads export), searches Open Library by
// title + author and records a cover (and an ISBN when available).
// Results are cached in src/data/cover-cache.json, which import-goodreads-csv.mjs reads,
// so re-importing a fresh CSV doesn't lose them. Books already in the cache are skipped
// (delete an entry to retry it).
import { readFile, writeFile } from 'node:fs/promises'

const BOOKS = new URL('../src/data/books.json', import.meta.url)
const CACHE = new URL('../src/data/cover-cache.json', import.meta.url)

const readJson = async (url, fallback) => {
  try { return JSON.parse(await readFile(url, 'utf8')) } catch { return fallback }
}

const normalize = (s) =>
  s.toLowerCase().replace(/[’‘]/g, "'").replace(/\([^)]*\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim()

const lookup = async (book) => {
  const title = book.title.replace(/\s*\([^)]*\)\s*$/, '').replace(/[’‘]/g, "'")
  const url = new URL('https://openlibrary.org/search.json')
  url.searchParams.set('title', title)
  url.searchParams.set('author', book.author.replace(/\s+/g, ' ').trim())
  url.searchParams.set('fields', 'title,author_name,cover_i,isbn')
  url.searchParams.set('limit', '10')
  const res = await fetch(url, { headers: { 'User-Agent': 'zoey-bookshelf (personal site)' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const { docs } = await res.json()

  // Only accept a result whose title matches, so we never attach the wrong book's cover.
  const want = normalize(title)
  const hit = docs.find((d) => d.cover_i && (normalize(d.title) === want || normalize(d.title).startsWith(want) || want.startsWith(normalize(d.title))))
  if (!hit) return null
  return {
    coverId: hit.cover_i,
    isbn: (hit.isbn || []).find((i) => i.length === 13) || (hit.isbn || [])[0] || null,
    matchedTitle: hit.title,
  }
}

const data = await readJson(BOOKS, { books: [] })
const cache = await readJson(CACHE, {})
let found = 0, missed = []

for (const book of data.books) {
  if (book.cover || cache[book.id]) continue
  try {
    const hit = await lookup(book)
    if (hit) { cache[book.id] = hit; found++; console.log(`✓ ${book.title} -> ${hit.matchedTitle}`) }
    else { missed.push(book.title); console.log(`✗ ${book.title}`) }
  } catch (e) {
    missed.push(book.title); console.log(`✗ ${book.title} (${e.message})`)
  }
  await new Promise((r) => setTimeout(r, 400)) // be polite to Open Library
}

for (const book of data.books) {
  const hit = cache[book.id]
  if (!book.cover && hit) book.cover = `https://covers.openlibrary.org/b/id/${hit.coverId}-L.jpg?default=false`
}

await writeFile(CACHE, JSON.stringify(cache, null, 2) + '\n')
await writeFile(BOOKS, JSON.stringify(data, null, 2) + '\n')
console.log(`\nFound ${found}. Still missing: ${missed.length}${missed.length ? ' — ' + missed.join('; ') : ''}`)
