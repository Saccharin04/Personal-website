import "./App.css"

const siteBase = import.meta.env.BASE_URL
const channelPath = `${siteBase}channel-4am/`

const researchAreas = [
  { title: "Neuroscience", description: "Exploring the nervous system, neural circuits and brain function." },
  { title: "Microbiomes", description: "Studying microbial communities and their relationships with human health." },
  { title: "Immunology", description: "Understanding immune systems and their responses to the world around us." },
]

const albums = [
  { number: "01", title: "逃离夜晚", englishTitle: "Endless Night", years: "2020–2023年" },
  { number: "02", title: "过期食品", englishTitle: "Overdue", years: "2024年" },
  { number: "03", title: "椎上切迹", englishTitle: "The Third Sacrifice", years: "2024年" },
  { number: "04", title: "午前四时电台", englishTitle: "Channel 4:00am", years: "2024–2026年", href: channelPath },
]

const lyricSlots = Array.from({ length: 20 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: index === 0 ? "临前日" : "",
}))

function App() {
  if (window.location.pathname.replace(/\/$/, "") === `${siteBase.replace(/\/$/, "")}/channel-4am`) {
    return <ChannelAlbumPage />
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
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#music">Music</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="subtitle">WELCOME TO MY WEBSITE</p>
        <h1>Saccharin</h1>
        <p className="description">Medicine · Composing · Lyrics · Philosophy</p>
        <a href="#about" className="explore-button">Explore ↓</a>
      </section>

      <section id="about" className="content about-section">
        <p className="section-number">01 / ABOUT</p>
        <h2>About</h2>
        <p className="section-intro about-intro">
          Saccharin<span lang="zh-CN">是一个跨越医学、生命科学、音乐与哲学等领域的个人研究与创作项目。</span><br className="about-line-break" />
          <span lang="zh-CN">其学术兴趣主要涉及医学、神经科学、神经技术、生物医学与计算技术，</span><br className="about-line-break" />
          <span lang="zh-CN">关注神经系统的结构与功能，以及实验科学、计算方法与神经技术在理解生物系统和认知过程中的应用。</span><br className="about-line-break" />
          <span lang="zh-CN">在科研与学习之外，</span>Saccharin<span lang="zh-CN"> 亦从事音乐创作、歌词写作与文字创作，</span><br className="about-line-break" />
          <span lang="zh-CN">相关作品涉及音乐、哲学、记忆、情感、个体经验及意义等主题。</span><br className="about-line-break" />
          <span lang="zh-CN">该项目并不试图将这些领域归纳为单一的职业身份，</span><br className="about-line-break" />
          <span lang="zh-CN">而是作为一个持续整理研究、创作、知识与思想的个人空间。</span>
        </p>
      </section>

      <section id="research" className="content">
        <p className="section-number">02 / RESEARCH</p>
        <h2>Research</h2>
        <p className="section-intro">Interested in neuroscience, microbiomes and immunology research.</p>
        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <article className="research-card" key={area.title}>
              <span className="card-index">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="music" className="content music-section">
        <p className="section-number">03 / MUSIC</p>
        <h2>Music</h2>
        <p className="section-intro">Creating music and exploring sound, emotion and ideas.</p>
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
          )})}
        </div>
      </section>

      <footer className="site-footer">
        <div className="social-links" aria-label="Social media">
          <a href="https://x.com/Saccharin04_" target="_blank" rel="noreferrer" aria-label="X — Saccharin04_">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@Saccharin04" target="_blank" rel="noreferrer" aria-label="YouTube — Saccharin04">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/saccharin04/" target="_blank" rel="noreferrer" aria-label="Instagram — Saccharin04">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.8" r="1.2" />
            </svg>
          </a>
        </div>
        <p>© Saccharin</p>
      </footer>
    </main>
  )
}

function ChannelAlbumPage() {
  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a href={`${siteBase}#top`} className="logo">Saccharin</a>
        <div className="nav-links">
          <a href={`${siteBase}#about`}>About</a>
          <a href={`${siteBase}#research`}>Research</a>
          <a href={`${siteBase}#music`}>Music</a>
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
        <h2>20 songs</h2>
        <div className="lyric-buttons" aria-label="Lyrics list">
          {lyricSlots.map((lyric, index) => (
            <button
              className={`lyric-button${index === 0 ? " is-selected" : ""}`}
              type="button"
              key={lyric.number}
              disabled={index !== 0}
              aria-label={lyric.title || `未命名歌词 ${lyric.number}`}
              onClick={() => document.getElementById("lyric-01")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>{lyric.number}</span>
              {lyric.title && <strong>{lyric.title}</strong>}
            </button>
          ))}
        </div>
        <article className="lyric-panel" id="lyric-01">
          <p className="section-number">01 / LYRICS</p>
          <h3>临前日</h3>
          <p>歌词文本待补充。</p>
        </article>
      </section>

      <footer className="site-footer">
        <div className="social-links" aria-label="Social media">
          <a href="https://x.com/Saccharin04_" target="_blank" rel="noreferrer" aria-label="X — Saccharin04_">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>
          </a>
          <a href="https://www.youtube.com/@Saccharin04" target="_blank" rel="noreferrer" aria-label="YouTube — Saccharin04">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
          </a>
          <a href="https://www.instagram.com/saccharin04/" target="_blank" rel="noreferrer" aria-label="Instagram — Saccharin04">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.8" r="1.2" />
            </svg>
          </a>
        </div>
        <p>© Saccharin</p>
      </footer>
    </main>
  )
}

export default App
