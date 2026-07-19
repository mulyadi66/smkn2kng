import { useCountUp } from '../hooks/useCountUp'

function StatItem({ target, label }) {
  const { count, ref } = useCountUp(target)
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count.toLocaleString('id-ID')}+</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  const stats = [
    { target: 1200, label: 'Siswa Aktif' },
    { target: 85, label: 'Tenaga Pendidik' },
    { target: 6, label: 'Program Keahlian' },
    { target: 50, label: 'Prestasi Tahun Ini' },
  ]

  return (
    <section className="stats" id="statistik">
      <div className="stats-container">
        {stats.map((stat, i) => (
          <StatItem key={i} target={stat.target} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
