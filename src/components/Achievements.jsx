import { useScrollAnimation } from '../hooks/useScrollAnimation'

const achievements = [
  {
    id: 'binacional',
    emoji: '🏆',
    number: '1er Puesto',
    title: 'Foro Binacional',
    description:
      'Primer lugar en el foro de investigación binacional, reconociendo la excelencia técnica y el impacto de nuestra propuesta en el ámbito regional.',
  },
  {
    id: 'huancayo',
    emoji: '🥈',
    number: '2do Lugar',
    title: 'Congreso Nacional — Huancayo',
    description:
      'Segundo lugar a nivel nacional, distinguiendo a DATA-ESIS entre los mejores grupos de investigación en ciencia de datos del país.',
  },
  {
    id: 'rendimiento',
    emoji: '📊',
    number: 'Alto',
    title: 'Rendimiento Académico',
    description:
      'Semillero posicionado entre los grupos de investigación más activos y productivos de la UNJBG.',
  },
]

function AchievementItem({ item }) {
  const ref = useScrollAnimation()
  return (
    <div className="achievement-item fade-in" ref={ref} id={`achievement-${item.id}`}>
      <span className="achievement-emoji">{item.emoji}</span>
      <span className="achievement-number">{item.number}</span>
      <h3 className="achievement-title">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default function Achievements() {
  const titleRef = useScrollAnimation()

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title fade-in" ref={titleRef}>Logros Académicos</h2>
        <div className="achievements-grid">
          {achievements.map((item) => (
            <AchievementItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
