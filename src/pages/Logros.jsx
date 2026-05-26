import { useScrollAnimation } from '../hooks/useScrollAnimation'

const achievements = [
  {
    id: 'binacional',
    emoji: '🏆',
    number: '1er Puesto',
    event: 'Foro Binacional de Investigación',
    location: 'Perú – Tacna',
    year: '2025',
    description:
      'Primer lugar internacional en el foro binacional por el desarrollo y viabilidad social de KineDa, reconociendo la innovación técnica del hardware IoT y su impacto en la seguridad geriátrica.',
    highlight: true,
  },
  {
    id: 'huancayo',
    emoji: '🥈',
    number: '2do Lugar',
    event: 'Congreso Nacional de Computación',
    location: 'Huancayo, Perú',
    year: '2025',
    description:
      'Segundo puesto a nivel nacional en la categoría de investigación aplicada, validando la rigurosidad científica de nuestros modelos híbridos CNN-1D + BiLSTM frente a otros centros de investigación del país.',
    highlight: true,
  },
]

function AchievementCard({ item }) {
  const ref = useScrollAnimation()
  return (
    <div className={`achievement-full-card fade-in ${item.highlight ? 'highlighted' : ''}`} ref={ref}>
      <div className="ach-left">
        <span className="ach-emoji">{item.emoji}</span>
        <span className="ach-number">{item.number}</span>
      </div>
      <div className="ach-right">
        <div className="ach-meta">
          <span className="ach-event">{item.event}</span>
          <span className="ach-location"><i className="fa-solid fa-location-dot"></i> {item.location}</span>
          <span className="ach-year">{item.year}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default function Logros() {
  const titleRef = useScrollAnimation()

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-pre fade-in" ref={titleRef}>Validación y Trayectoria</span>
          <h1 className="page-hero-title">Hitos de ORION</h1>
          <p className="page-hero-sub">
            Nuestra tecnología cuenta con validación científica y reconocimientos a nivel nacional 
            e internacional, respaldando el compromiso y rigor de nuestro equipo.
          </p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">

          {/* Awards */}
          <div className="logros-block">
            <h2 className="team-section-label">
              <span><i className="fa-solid fa-award" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Reconocimientos y Premios</span>
            </h2>
            <div className="achievements-full-list">
              {achievements.map((a) => <AchievementCard key={a.id} item={a} />)}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
