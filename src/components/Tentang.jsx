import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Tentang() {
  const imgRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section className="section tentang" id="tentang">
      <div className="section-container">
        <div className="section-header animate-on-scroll" ref={useScrollReveal()}>
          <span className="section-tag">Tentang Kami</span>
          <h2 className="section-title">SMK Negeri 2 Kuningan</h2>
          <p className="section-subtitle">
            Mengenal lebih dekat sekolah kami yang berkomitmen mencerdaskan generasi bangsa
          </p>
        </div>
        <div className="tentang-grid">
          <div className="tentang-image animate-on-scroll" ref={imgRef}>
            <div className="image-placeholder">
              <span>🏫</span>
              <p>Gambar Sekolah</p>
            </div>
          </div>
          <div className="tentang-content animate-on-scroll" ref={contentRef}>
            <h3>Sejarah Singkat</h3>
            <p>
              SMK Negeri 2 Kuningan merupakan salah satu sekolah menengah kejuruan negeri unggulan
              yang terletak di Kabupaten Kuningan, Jawa Barat. Berdiri dengan visi untuk menghasilkan
              lulusan yang kompeten dan siap terjun ke dunia kerja.
            </p>
            <p>
              Sekolah kami menyediakan 6 program keahlian yang selaras dengan kebutuhan industri dan
              perkembangan teknologi terkini. Dengan fasilitas modern dan tenaga pengajar berkualitas,
              kami berkomitmen memberikan pendidikan terbaik bagi para siswa.
            </p>
            <div className="tentang-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <div>
                  <strong>Berprestasi</strong>
                  <p>Raih berbagai penghargaan di tingkat kabupaten hingga nasional</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <div>
                  <strong>Siap Kerja</strong>
                  <p>Lulusan langsung terserap di dunia industri dan kerja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
