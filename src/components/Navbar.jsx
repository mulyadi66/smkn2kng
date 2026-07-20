import { useState, useEffect } from 'react'

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('beranda')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 120
      sections.forEach(section => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute('id')
        if (scrollY >= top && scrollY < top + height) {
          setActiveLink(id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: 'beranda', label: 'Beranda' },
    { href: 'tentang', label: 'Tentang' },
    { href: 'visi-misi', label: 'Visi & Misi' },
    { href: 'program', label: 'Program Keahlian' },
    { href: 'galeri', label: 'Galeri' },
    { href: 'kontak', label: 'Kontak' },
  ]

  const handleClick = (href) => {
    setMenuOpen(false)
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#beranda" className="nav-logo" onClick={() => handleClick('beranda')}>
          <img src="/smkn2kng/logo-sekolah.jpg" alt="Logo SMKN 2 Kuningan" className="nav-logo-img" />
          <span>SMKN 2 Kuningan</span>
        </a>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <span className="icon-sun">☀️</span>
            <span className="icon-moon">🌙</span>
          </button>
          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
