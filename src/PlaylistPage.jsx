import { useEffect, useRef, useState } from 'react'
import './PlaylistPage.css'

// The playlist ID is the part after "list=" in a YouTube / YouTube Music playlist link, e.g.
//   https://music.youtube.com/playlist?list=PLxxxxxxxxxxxx  ->  PLxxxxxxxxxxxx
// The playlist must be set to Public or Unlisted in YouTube Music, or the embed will be empty.
const PLAYLIST_ID = 'PLbCKEUrtBx4M'

// Loads the YouTube IFrame API once and resolves with window.YT.
let apiPromise
const loadYouTubeApi = () => {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  apiPromise ||= new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => { prev?.(); resolve(window.YT) }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
  })
  return apiPromise
}

export default function PlaylistPage() {
  const hostRef = useRef(null)
  const playerRef = useRef(null)
  const shuffledRef = useRef(false)
  const [muted, setMuted] = useState(true)

  // Turn shuffle on once, the first time the visitor unmutes. The current song keeps playing;
  // YouTube applies the shuffled order to the tracks that come after it.
  const onUnmuted = (player) => {
    setMuted(false)
    if (shuffledRef.current) return
    shuffledRef.current = true
    player.setShuffle(true)
    player.setLoop(true) // shuffling can reset looping, so set it again
  }

  const unmute = () => {
    const player = playerRef.current
    if (!player) return
    player.unMute()
    player.setVolume(100)
    onUnmuted(player)
  }

  useEffect(() => {
    if (!PLAYLIST_ID) return
    let player
    let poll
    let cancelled = false
    // A fresh element per run, since player.destroy() removes the one it was given.
    const el = document.createElement('div')
    hostRef.current.appendChild(el)

    loadYouTubeApi().then((YT) => {
      if (cancelled) return
      player = playerRef.current = new YT.Player(el, {
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          listType: 'playlist',
          list: PLAYLIST_ID,
          autoplay: 1,
          loop: 1, // for playlists: restart from the first song after the last
          mute: 1, // browsers only allow autoplay when muted
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            e.target.setLoop(true) // keeps the next button enabled on the last song
            // Also catch unmuting through YouTube's own controls (the player has no event for it).
            poll = setInterval(() => {
              if (!e.target.isMuted()) {
                clearInterval(poll)
                onUnmuted(e.target)
              }
            }, 300)
          },
          // Fallback: if the playlist still stops after the last song, start it over.
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              const ids = e.target.getPlaylist() || []
              if (e.target.getPlaylistIndex() >= ids.length - 1) e.target.playVideoAt(0)
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      clearInterval(poll)
      player?.destroy?.()
      playerRef.current = null
      el.remove()
    }
  }, [])

  return (
    <div className="playlistPage">
      <header className="playlistHeader">
        <h1>On Repeat</h1>
        <p>Songs as of late.</p>
        {PLAYLIST_ID && (
          <a
            className="playlistLink"
            href={`https://music.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in YouTube Music
          </a>
        )}
      </header>

      {PLAYLIST_ID ? (
        <>
          {muted && (
            <button className="unmuteButton" onClick={unmute}>Unmute &amp; shuffle</button>
          )}
          <div className="playerFrame">
            <div className="playerHost" ref={hostRef} />
          </div>
          <p className="playerHint">Playing muted, since browsers block autoplay with sound. Unmute and the playlist shuffles from the next song.</p>
        </>
      ) : (
        <p className="playlistEmpty">Playlist coming soon.</p>
      )}
    </div>
  )
}
