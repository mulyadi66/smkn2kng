import { useScrollReveal } from '../hooks/useScrollReveal'

const contacts = [
  { icon: '📍', title: 'Alamat', text: 'Jl. Tentara Pelajar No. 1, Kuningan, Jawa Barat 45511' },
  { icon: '📞', title: 'Telepon', text: '(0232) 123456' },
  { icon: '✉️', title: 'Email', text: 'info@smkn2kuningan.sch.id' },
  { icon: '🕐', title: 'Jam Operasional', text: 'Senin - Jumat: 07.00 - 16.00 WIB' },
]

function KontakItem({ item }) {
  const ref = useScrollReveal()
  return (
    <div className="kontak-item animate-on-scroll" ref={ref}>
      <div className="kontak-icon">{item.icon}</div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </div>
  )
}

export default function Kontak() {
  const headerRef = useScrollReveal()
  const mapRef = useScrollReveal()

  return (
    <section className="section kontak" id="kontak">
      <div className="section-container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-tag">Kontak</span>
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">
            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
          </p>
        </div>
        <div className="kontak-grid">
          <div className="kontak-info">
            {contacts.map((item, i) => (
              <KontakItem key={i} item={item} />
            ))}
          </div>
          <div className="kontak-map animate-on-scroll" ref={mapRef}>
            <iframe
              src="https://www.google.com/maps?q=SMKN+2+Kuningan+Jl.+Tentara+Pelajar+No.+1+Kuningan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-lg)', minHeight: 350 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi SMKN 2 Kuningan"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
