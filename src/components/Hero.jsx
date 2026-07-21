import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const contentRef = useScrollReveal()
  const imageRef = useScrollReveal()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="beranda">
      <div className="hero-bg">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content animate-on-scroll" ref={contentRef}>
          <div className="hero-badge">🎓 Sekolah Menengah Kejuruan Negeri</div>
          <h1 className="hero-title">
            SMK Negeri <span className="highlight">2 Kuningan</span>
          </h1>
          <p className="hero-tagline">
            Mencetak Generasi Terampil, Berprestasi, dan Siap Bersaing di Era Digital
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('tentang')}>Kenali Kami</button>
            <button className="btn btn-outline" onClick={() => scrollTo('program')}>Program Keahlian</button>
          </div>
        </div>
        <div className="hero-image animate-on-scroll" ref={imageRef}>
          <div className="hero-logo-wrapper">
            <img src="/logo-sekolah.jpg" alt="Logo SMKN 2 Kuningan" className="hero-logo-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
