import { useLayoutEffect, useRef, useState } from "react"
import "./App.css"
import featureTitleStyles from "./FeatureTitle.module.css"
import aboutImage from "./assets/profile.jpg"

const siteBase = import.meta.env.BASE_URL
const channelPath = `${siteBase}channel-4am/`
const profilePath = `${siteBase}profile/`

const albums = [
  { number: "01", title: "逃離夜晚", englishTitle: "Endless Night", years: "2020–2023年" },
  { number: "02", title: "過期食品", englishTitle: "Overdue", years: "2023-2024年" },
  { number: "03", title: "椎上切跡", englishTitle: "The Third Sacrifice", years: "2024年" },
  { number: "04", title: "午前四時電台", englishTitle: "Channel 4:00am", years: "2024–2026年", href: channelPath },
]

const lyrics = [
  { id: "lyric-01", title: "临前日" },
  { id: "lyric-02", title: "两种药物冬眠" },
]

function App() {
  const route = window.location.pathname.replace(/\/$/, "")
  if (route === `${siteBase.replace(/\/$/, "")}/channel-4am`) {
    return <ChannelAlbumPage />
  }
  if (route === `${siteBase.replace(/\/$/, "")}/profile`) {
    return <ProfilePage />
  }

  return (
    <main>
      <svg className="visual-filters" aria-hidden="true" focusable="false">
        <filter id="roughen-threshold" x="-5%" y="-10%" width="110%" height="120%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.35" numOctaves="2" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.15" xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feComponentTransfer in="rough">
            <feFuncA type="linear" slope="2" intercept="-0.35" />
          </feComponentTransfer>
        </filter>
      </svg>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#top" className="logo">Saccharin</a>
        <div className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#music">Music</a>
          <a href="#lyrics">Lyric Albums</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="subtitle">LATEST WORK / 最新作品</p>
        <h1 className={`${featureTitleStyles.heading} ${featureTitleStyles.heroHeading}`}>閉鎖 <span>/</span> <span className={featureTitleStyles.english}>The Cross</span></h1>
        <div className="featured-video">
          <iframe
            src="https://player.bilibili.com/player.html?bvid=BV1eRNf6MEt1&page=1&high_quality=1&danmaku=0&autoplay=0"
            title="Saccharin 最新作品 — Bilibili 视频播放器"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <a href="#profile" className="explore-button">Explore ↓</a>
      </section>

      <section id="profile" className="content profile-summary-section">
        <h2>Profile</h2>
        <ProfileContent summary />
      </section>

      <section id="music" className="content music-section">
        <h2>Music</h2>
        <div className="track-list">
          <a className="track-card featured-track" href="https://www.bilibili.com/video/BV1eRNf6MEt1/" target="_blank" rel="noreferrer">
            <div className="track-info">
              <h3>閉鎖 <span className="album-slash">/</span> <span className="album-english">The Cross</span></h3>
              <p>2026年7月18日</p>
            </div>
            <span className="album-mark" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section id="lyrics" className="content lyrics-list-section">
        <h2>Lyric Albums</h2>
        <div className="track-list">
          {albums.map((album) => {
            const Card = album.href ? "a" : "article"
            return (
              <Card className="track-card album-card" key={album.number} href={album.href}>
                <span className="track-number">{album.number}</span>
                <div className="track-info">
                  <h3>{album.title}<span className="album-slash"> / </span><span className="album-english">{album.englishTitle}</span></h3>
                  <p>{album.years}</p>
                </div>
                <span className="album-mark" aria-hidden="true">↗</span>
              </Card>
            )
          })}
        </div>
      </section>

      <footer className="site-footer">
        <SocialLinks />
        <p>© Saccharin</p>
      </footer>
    </main>
  )
}

function ProfilePage() {
  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a href={siteBase} className="logo">Saccharin</a>
        <div className="nav-links">
          <a href={`${siteBase}#profile`}>Profile</a>
          <a href={`${siteBase}#music`}>Music</a>
          <a href={`${siteBase}#lyrics`}>Lyric Albums</a>
        </div>
      </nav>

      <section className="profile-page content">
        <p className="profile-page-kicker">PROFILE</p>
        <h1>Profile</h1>
        <ProfileContent />
      </section>

      <footer className="site-footer">
        <SocialLinks />
        <p>© Saccharin</p>
      </footer>
    </main>
  )
}


function ProfileContent({ summary = false }) {
  const textRef = useRef(null)
  const [textHeight, setTextHeight] = useState(0)

  useLayoutEffect(() => {
    const text = textRef.current
    if (!text) return undefined

    const updateHeight = () => setTextHeight(Math.ceil(text.getBoundingClientRect().height))
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(text)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`profile-content-layout${summary ? " is-summary" : ""}`}>
      <img
        className="profile-content-image"
        src={aboutImage}
        alt="Saccharin 的头像"
        style={textHeight ? { height: `${textHeight}px` } : undefined}
      />
      <div className="profile-content-copy" ref={textRef}>
        <p>
          <span className="profile-latin">Saccharin</span>，自<span className="profile-latin">2023</span>年开始活动至今。活动范围主要包括作曲、作词，以及其他领域。作为医学生，目前就读于复旦大学上海医学院；本职之内从事神经与免疫方向的科研。对哲学、历史和音乐有相当程度的爱好，因而对此进行阐述与创作。
        </p>
        {summary && (
          <div className="profile-actions">
            <SocialLinks compact />
            <a className="profile-read-more" href={profilePath}>Read more</a>
          </div>
        )}
      </div>
    </div>
  )
}

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? " social-links-compact" : ""}`} aria-label="Social media">
      <a href="https://x.com/Saccharin04_" target="_blank" rel="noreferrer" aria-label="X — Saccharin04_">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>
      </a>
      <a href="https://www.youtube.com/@Saccharin04" target="_blank" rel="noreferrer" aria-label="YouTube — Saccharin04">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
      </a>
      <a href="https://www.instagram.com/saccharin04/" target="_blank" rel="noreferrer" aria-label="Instagram — Saccharin04">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.8" r="1.2" /></svg>
      </a>
      <a href="https://space.bilibili.com/36468456?spm_id_from=333.1007.0.0" target="_blank" rel="noreferrer" aria-label="Bilibili — Saccharin">
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="m8 4 2 2m6-2-2 2M5 8h14v11H5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12v3m6-3v3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </a>
    </div>
  )
}

function ChannelAlbumPage() {
  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a href={`${siteBase}#top`} className="logo">Saccharin</a>
        <div className="nav-links">
          <a href={`${siteBase}#profile`}>Profile</a>
          <a href={`${siteBase}#music`}>Music</a>
          <a href={`${siteBase}#lyrics`}>Lyric Albums</a>
        </div>
      </nav>

      <section className="album-hero">
        <p className="section-number">04 / ALBUM</p>
        <h1>午前四时电台</h1>
        <p className="album-page-title">Channel 4:00am</p>
        <p className="section-intro">2024–2026年</p>
        <a className="back-link" href={`${siteBase}#music`}>← Back to Music</a>
      </section>

      <section className="content lyrics-section">
        <p className="section-number">LYRICS / 歌词</p>
        <h2>Lyrics</h2>
        <div className="lyric-buttons" aria-label="Lyrics list">
          {lyrics.map((lyric, index) => (
            <button
              className={`lyric-button${index === 0 ? " is-selected" : ""}`}
              type="button"
              key={lyric.id}
              onClick={() => document.getElementById(lyric.id)?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{lyric.title}</strong>
            </button>
          ))}
          <button className="lyric-button is-coming-soon" type="button" disabled>
            <strong>待续…</strong>
          </button>
        </div>
        <article className="lyric-panel" id="lyric-01">
          <p className="section-number">01 / LYRICS</p>
          <h3>临前日</h3>
          <p>歌词文本待补充。</p>
        </article>
        <article className="lyric-panel" id="lyric-02">
          <p className="section-number">02 / LYRICS</p>
          <h3>两种药物冬眠</h3>
          <p>歌词文本待补充。</p>
        </article>
      </section>

      <footer className="site-footer">
        <SocialLinks />
        <p>© Saccharin</p>
      </footer>
    </main>
  )
}

export default App
