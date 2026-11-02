// Usage: npm run import-books -- path/to/goodreads_library_export.csv
// Converts a Goodreads library export into src/data/books.json.
// Keeps the "read" and "currently-reading" shelves; ignores the rest.
import { readFile, writeFile } from 'node:fs/promises'

// Covers found by scripts/fill-covers.mjs for books that have no ISBN in the export.
const coverCache = JSON.parse(await readFile(new URL('../src/data/cover-cache.json', import.meta.url), 'utf8').catch(() => '{}'))

const file = process.argv[2]
if (!file) {
  console.error('Usage: npm run import-books -- path/to/goodreads_library_export.csv')
  process.exit(1)
}

// Minimal RFC 4180 parser (quoted fields, escaped quotes, newlines inside quotes).
function parseCsv(text) {
  const rows = []
  let row = [], field = '', quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++ }
      else if (c === '"') quoted = false
      else field += c
    } else if (c === '"') quoted = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(field); field = ''
      if (row.some((f) => f !== '')) rows.push(row)
      row = []
    } else field += c
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row) }
  return rows
}

const [header, ...rows] = parseCsv((await readFile(file, 'utf8')).replace(/^﻿/, ''))
const OPTIONAL = new Set(['Average Rating', 'Number of Pages']) // Goodreads has dropped columns before
const col = (name) => {
  const i = header.indexOf(name)
  if (i === -1 && OPTIONAL.has(name)) return -1
  if (i === -1) throw new Error(`Column "${name}" not found. Is this a Goodreads export?`)
  return i
}
const C = Object.fromEntries(
  ['Book Id', 'Title', 'Author', 'ISBN', 'ISBN13', 'My Rating', 'Average Rating', 'Number of Pages', 'Date Read', 'Date Added', 'Exclusive Shelf']
    .map((n) => [n, col(n)]),
)

// Goodreads writes ISBNs as ="0123456789"
const isbn = (s) => s.replace(/[="]/g, '').trim()
const date = (s) => (s ? s.replace(/\//g, '-') : null) // 2024/03/15 -> 2024-03-15
const clean = (s) => s.replace(/\s*\([^)]*#\d+[^)]*\)\s*$/, '').trim() // drop "(Series, #1)"

const books = rows
  .filter((r) => ['read', 'currently-reading'].includes(r[C['Exclusive Shelf']]))
  .map((r) => {
    const id = r[C['Book Id']]
    const code = isbn(r[C['ISBN13']]) || isbn(r[C['ISBN']])
    return {
      id,
      title: clean(r[C['Title']]),
      author: r[C['Author']],
      cover: code
        ? `https://covers.openlibrary.org/b/isbn/${code}-L.jpg?default=false`
        : coverCache[id] ? `https://covers.openlibrary.org/b/id/${coverCache[id].coverId}-L.jpg?default=false` : '',
      link: `https://www.goodreads.com/book/show/${id}`,
      rating: Number(r[C['My Rating']]) || 0, // 0 = not rated
      averageRating: Number(r[C['Average Rating']] ?? '') || null,
      pages: Number(r[C['Number of Pages']] ?? '') || null,
      dateRead: date(r[C['Date Read']]),
      dateAdded: date(r[C['Date Added']]),
      status: r[C['Exclusive Shelf']] === 'read' ? 'read' : 'reading',
    }
  })

await writeFile(
  new URL('../src/data/books.json', import.meta.url),
  JSON.stringify({ updatedAt: new Date().toISOString(), books }, null, 2) + '\n',
)
console.log(`Imported ${books.filter((b) => b.status === 'reading').length} reading, ${books.filter((b) => b.status === 'read').length} read`)
