import { useScrollReveal } from '../hooks/useScrollReveal'

export default function VisiMisi() {
  const visiRef = useScrollReveal()
  const misiRef = useScrollReveal()
  const headerRef = useScrollReveal()

  return (
    <section className="section visi-misi" id="visi-misi">
      <div className="section-container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-tag">Visi & Misi</span>
          <h2 className="section-title">Arah dan Tujuan Pendidikan</h2>
          <p className="section-subtitle">
            Landasan kuat dalam membentuk karakter dan kompetensi siswa
          </p>
        </div>
        <div className="visi-misi-grid">
          <div className="visi-card animate-on-scroll" ref={visiRef}>
            <div className="card-icon">🎯</div>
            <h3>Visi</h3>
            <p>
              Menjadi sekolah menengah kejuruan unggulan yang menghasilkan lulusan berkarakter,
              kompeten, dan berdaya saing global di era digital.
            </p>
          </div>
          <div className="misi-card animate-on-scroll" ref={misiRef}>
            <div className="card-icon">🚀</div>
            <h3>Misi</h3>
            <ul className="misi-list">
              <li>Menyelenggarakan pendidikan berkualitas berbasis kompetensi dan karakter</li>
              <li>Mengembangkan potensi siswa melalui kegiatan akademik dan non-akademik</li>
              <li>Memperkuat kerja sama dengan dunia industri dan dunia usaha</li>
              <li>Menerapkan pembelajaran berbasis teknologi dan inovasi</li>
              <li>Membentuk lingkungan belajar yang inklusif dan menyenangkan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
