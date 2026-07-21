export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo-sekolah.jpg" alt="Logo SMKN 2 Kuningan" className="footer-logo-img" />
              <span>SMKN 2 Kuningan</span>
            </div>
            <p>
              Sekolah Menengah Kejuruan Negeri unggulan di Kabupaten Kuningan yang berkomitmen
              mencetak lulusan berkualitas.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigasi</h4>
            <ul>
              {['beranda', 'tentang', 'visi-misi', 'program', 'galeri', 'kontak'].map(id => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                    {id === 'beranda' && 'Beranda'}
                    {id === 'tentang' && 'Tentang Sekolah'}
                    {id === 'visi-misi' && 'Visi & Misi'}
                    {id === 'program' && 'Program Keahlian'}
                    {id === 'galeri' && 'Galeri'}
                    {id === 'kontak' && 'Kontak'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Program Keahlian</h4>
            <ul>
              {['AKL', 'MPLB', 'Pemasaran', 'PPLG', 'TJKT', 'ULW'].map(jurusan => (
                <li key={jurusan}>
                  <a href="#program" onClick={(e) => { e.preventDefault(); scrollTo('program') }}>
                    {jurusan}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Kontak</h4>
            <p>📍 Jl. Tentara Pelajar No. 1, Kuningan, Jawa Barat</p>
            <p>📞 (0232) 123456</p>
            <p>✉️ info@smkn2kuningan.sch.id</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SMK Negeri 2 Kuningan. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
