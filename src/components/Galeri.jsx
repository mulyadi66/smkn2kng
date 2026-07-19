import { useScrollReveal } from '../hooks/useScrollReveal'

const galleries = [
  { icon: '🏫', label: 'Gedung Sekolah' },
  { icon: '💻', label: 'Laboratorium Komputer' },
  { icon: '📚', label: 'Perpustakaan' },
  { icon: '🏅', label: 'Upacara & Prestasi' },
  { icon: '⚽', label: 'Olahraga & Ekstrakurikuler' },
  { icon: '🎓', label: 'Wisuda & Pelepasan' },
]

function GaleriItem({ item }) {
  const ref = useScrollReveal()
  return (
    <div className="galeri-item animate-on-scroll" ref={ref}>
      <div className="galeri-placeholder">
        <span>{item.icon}</span>
        <p>{item.label}</p>
      </div>
    </div>
  )
}

export default function Galeri() {
  const headerRef = useScrollReveal()

  return (
    <section className="section galeri" id="galeri">
      <div className="section-container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-tag">Galeri</span>
          <h2 className="section-title">Kegiatan & Fasilitas</h2>
          <p className="section-subtitle">Dokumentasi kegiatan sekolah dan fasilitas pendukung</p>
        </div>
        <div className="galeri-grid">
          {galleries.map((item, i) => (
            <GaleriItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
