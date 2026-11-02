import { useEffect, useMemo, useState } from 'react'
import { supabase } from './supabaseClient'
import data from './data/books.json'
import './BookshelfPage.css'

// Ratings can be fractional (e.g. 3.5, 4.25), so fill the stars by percentage.
const Stars = ({ value }) =>
  value ? (
    <span className="stars" role="img" aria-label={`${value} out of 5 stars`}>
      <span className="starsGlyphs">
        <span className="starsEmpty">★★★★★</span>
        <span className="starsFilled" style={{ width: `${(value / 5) * 100}%` }}>★★★★★</span>
      </span>
      <span className="starsValue">{value}</span>
    </span>
  ) : (
    <span className="unrated">unrated</span>
  )

function BookNote({ book, note, canEdit, onSave }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(note)
  const [saving, setSaving] = useState(false)

  const save = async () => {
    setSaving(true)
    const ok = await onSave(book.id, draft)
    setSaving(false)
    if (ok) setEditing(false)
  }

  if (editing) {
    return (
      <div className="noteEditor">
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={4} autoFocus />
        <div className="noteActions">
          <button onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
          <button className="ghost" onClick={() => { setDraft(note); setEditing(false) }}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className="note">
      {note ? <p>{note}</p> : canEdit && <p className="placeholder">No note yet.</p>}
      {canEdit && (
        <button className="ghost small" onClick={() => { setDraft(note); setEditing(true) }}>
          {note ? 'Edit note' : 'Add note'}
        </button>
      )}
    </div>
  )
}

function BookCard({ book, notes, canEdit, onSave }) {
  return (
    <article className="bookCard">
      <a href={book.link} target="_blank" rel="noreferrer" className="coverLink">
        {book.cover ? <img src={book.cover} alt={`Cover of ${book.title}`} loading="lazy" onError={(e) => { e.currentTarget.style.visibility = 'hidden' }} /> : <div className="noCover" />}
      </a>
      <div className="bookBody">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        {book.status === 'read' && <Stars value={book.rating} />}
        <BookNote key={notes[book.id] ?? ''} book={book} note={notes[book.id] ?? ''} canEdit={canEdit} onSave={onSave} />
      </div>
    </article>
  )
}

function LoginForm({ onDone }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else onDone()
  }

  return (
    <form className="loginForm" onSubmit={submit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Log in</button>
      <button type="button" className="ghost" onClick={onDone}>Cancel</button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default function BookshelfPage() {
  const [notes, setNotes] = useState({})
  const [session, setSession] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!supabase) return
    supabase.from('book_notes').select('goodreads_id, note').then(({ data: rows, error }) => {
      if (error) return setError('Could not load notes.')
      setNotes(Object.fromEntries(rows.map((r) => [r.goodreads_id, r.note])))
    })
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  const saveNote = async (id, note) => {
    const { error } = await supabase
      .from('book_notes')
      .upsert({ goodreads_id: id, note, updated_at: new Date().toISOString() })
    if (error) {
      setError(`Save failed: ${error.message}`)
      return false
    }
    setError('')
    setNotes((n) => ({ ...n, [id]: note }))
    return true
  }

  const { reading, readBooks } = useMemo(() => {
    // Highest rating first; unrated books (rating 0) fall to the bottom.
    // Ties go newest-read first, and a missing read date counts as oldest.
    const newestFirst = (a, b) => (b.dateRead || '').localeCompare(a.dateRead || '')
    return {
      reading: data.books.filter((b) => b.status === 'reading'),
      readBooks: data.books
        .filter((b) => b.status === 'read')
        .sort((a, b) => b.rating - a.rating || newestFirst(a, b)),
    }
  }, [])

  const canEdit = Boolean(session)

  return (
    <div className="bookshelfPage">
      <header className="bookshelfHeader">
        <h1>Bookshelf</h1>
        <p>
          Slowly aggregating the books I have read, generally excluding those read
          in school. Books rated mostly by enjoyment (including nostalgia), not necessarily literary merit.
        </p>
        <div className="authBar">
          <a className="button ghost small" href="https://www.goodreads.com/user/show/197894190-zoey" target="_blank" rel="noreferrer">
            Goodreads
          </a>
          {supabase && (
            canEdit ? (
              <>
                <span>Editing as {session.user.email}</span>
                <button className="ghost small" onClick={() => supabase.auth.signOut()}>Log out</button>
              </>
            ) : showLogin ? (
              <LoginForm onDone={() => setShowLogin(false)} />
            ) : (
              <button className="ghost small" onClick={() => setShowLogin(true)}>Edit</button>
            )
          )}
        </div>
        {error && <p className="error">{error}</p>}
      </header>

      {data.books.length === 0 && <p className="empty">No books synced yet.</p>}

      {reading.length > 0 && (
        <section>
          <h2>Currently reading</h2>
          <div className="readingList">
            {reading.map((b) => <BookCard key={b.id} book={b} notes={notes} canEdit={canEdit} onSave={saveNote} />)}
          </div>
        </section>
      )}

      {readBooks.length > 0 && (
        <section>
          <h2>Read <span className="count">{readBooks.length} books</span></h2>
          <div className="readList">
            {readBooks.map((b) => <BookCard key={b.id} book={b} notes={notes} canEdit={canEdit} onSave={saveNote} />)}
          </div>
        </section>
      )}

      {data.updatedAt && <footer className="updated">Last updated {new Date(data.updatedAt).toLocaleDateString()}</footer>}
    </div>
  )
}
