import { useScrollReveal } from '../hooks/useScrollReveal'

const programs = [
  {
    icon: '📊',
    badge: 'AKL',
    title: 'Akuntansi dan Keuangan Lembaga',
    desc: 'Mempelajari pencatatan akuntansi, laporan keuangan, perpajakan, dan pengelolaan keuangan lembaga secara profesional.',
    skills: ['Pembukuan & Akuntansi', 'Perpajakan', 'Laporan Keuangan'],
  },
  {
    icon: '🏢',
    badge: 'MPLB',
    title: 'Manajemen Perkantoran dan Layanan Bisnis',
    desc: 'Mengelola administrasi perkantoran, hubungan masyarakat, dan layanan bisnis dengan efektif dan efisien.',
    skills: ['Administrasi Perkantoran', 'Hubungan Masyarakat', 'Manajemen Bisnis'],
  },
  {
    icon: '📈',
    badge: 'PM',
    title: 'Pemasaran',
    desc: 'Belajar strategi pemasaran digital, manajemen penjualan, dan pengembangan bisnis di era industri 4.0.',
    skills: ['Digital Marketing', 'Manajemen Penjualan', 'Pengembangan Bisnis'],
  },
  {
    icon: '💻',
    badge: 'PPLG',
    title: 'Pemrograman Perangkat Lunak dan Gim',
    desc: 'Menguasai pemrograman web, mobile, dan pengembangan gim interaktif dengan teknologi terkini.',
    skills: ['Web & Mobile Development', 'Pengembangan Gim', 'Database & Backend'],
  },
  {
    icon: '🌐',
    badge: 'TJKT',
    title: 'Teknik Jaringan Komputer dan Telekomunikasi',
    desc: 'Menginstalasi, mengonfigurasi, dan mengelola jaringan komputer serta sistem telekomunikasi modern.',
    skills: ['Konfigurasi Jaringan', 'Keamanan Siber', 'Telekomunikasi'],
  },
  {
    icon: '✈️',
    badge: 'ULW',
    title: 'Usaha Layanan Wisata',
    desc: 'Menyiapkan profesional muda di bidang pariwisata, perjalanan wisata, dan pengelolaan objek wisata.',
    skills: ['Tata Boga & Perhotelan', 'Wisata & Perjalanan', 'Pemandu Wisata'],
  },
]

function ProgramCard({ program }) {
  const ref = useScrollReveal()
  return (
    <div className="program-card animate-on-scroll" ref={ref}>
      <div className="program-icon">{program.icon}</div>
      <div className="program-badge">{program.badge}</div>
      <h3>{program.title}</h3>
      <p>{program.desc}</p>
      <ul className="program-skills">
        {program.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ProgramKeahlian() {
  const headerRef = useScrollReveal()

  return (
    <section className="section program" id="program">
      <div className="section-container">
        <div className="section-header animate-on-scroll" ref={headerRef}>
          <span className="section-tag">Program Keahlian</span>
          <h2 className="section-title">Jurusan & Kompetensi</h2>
          <p className="section-subtitle">
            6 program keahlian unggulan yang siap membekali siswa dengan skill dunia kerja
          </p>
        </div>
        <div className="program-grid">
          {programs.map((prog, i) => (
            <ProgramCard key={i} program={prog} />
          ))}
        </div>
      </div>
    </section>
  )
}
