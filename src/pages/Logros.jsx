import { useScrollAnimation } from '../hooks/useScrollAnimation'

const achievements = [
  {
    id: 'binacional',
    emoji: '🏆',
    number: '1er Puesto',
    event: 'Foro Binacional',
    location: 'Perú – Bolivia',
    year: '2024',
    description:
      'Primer lugar en el foro de investigación binacional, reconociendo la excelencia técnica y el impacto regional de nuestra propuesta en análisis de datos aplicado.',
    highlight: true,
  },
  {
    id: 'huancayo',
    emoji: '🥈',
    number: '2do Lugar',
    event: 'Congreso Nacional',
    location: 'Huancayo, Perú',
    year: '2024',
    description:
      'Segundo lugar a nivel nacional entre los mejores grupos de investigación en ciencia de datos del país, destacando la calidad metodológica del trabajo presentado.',
    highlight: true,
  },
]

const news = [
  {
    id: 'news-1',
    category: 'Participación',
    date: 'Noviembre 2024',
    title: 'DATA-ESIS en el Foro Binacional Perú-Bolivia',
    excerpt:
      'Nuestro equipo representó a la UNJBG con una investigación sobre sistemas IoT para la detección de caídas, obteniendo el primer lugar y reconocimiento internacional.',
    icon: 'fa-solid fa-trophy',
  },
  {
    id: 'news-2',
    category: 'Congreso',
    date: 'Octubre 2024',
    title: 'Segundo lugar en Congreso Nacional de Computación – Huancayo',
    excerpt:
      'El equipo compitió entre grupos de investigación de las principales universidades del Perú, logrando un segundo lugar por la calidad y rigor de su investigación en data science.',
    icon: 'fa-solid fa-medal',
  },
  {
    id: 'news-3',
    category: 'Investigación',
    date: 'Enero 2025',
    title: 'Inicio de investigación en IA para diagnóstico clínico',
    excerpt:
      'DATA-ESIS inicia una nueva línea de investigación enfocada en redes convolucionales para la asistencia al diagnóstico médico a partir de imágenes radiológicas.',
    icon: 'fa-solid fa-brain',
  },
  {
    id: 'news-4',
    category: 'Formación',
    date: 'Marzo 2025',
    title: 'Taller interno de NLP y Transformers',
    excerpt:
      'El semillero realizó un taller de formación interna sobre modelos de lenguaje natural (BERT, GPT) orientado a la investigación en texto académico en español.',
    icon: 'fa-solid fa-book-open',
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

function NewsCard({ item }) {
  const ref = useScrollAnimation()
  return (
    <article className="news-card fade-in" ref={ref} id={item.id}>
      <div className="news-card-header">
        <i className={`${item.icon} news-icon`}></i>
        <span className="news-category">{item.category}</span>
        <span className="news-date">{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.excerpt}</p>
    </article>
  )
}

export default function Logros() {
  const titleRef = useScrollAnimation()
  const newsTitleRef = useScrollAnimation()

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-pre fade-in" ref={titleRef}>Reconocimientos & Noticias</span>
          <h1 className="page-hero-title">Logros del Semillero</h1>
          <p className="page-hero-sub">
            Resultados concretos que validan el rigor científico y el alto rendimiento del
            equipo DATA-ESIS en el ámbito académico nacional e internacional.
          </p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">

          {/* Awards */}
          <div className="logros-block">
            <h2 className="team-section-label">
              <span><i className="fa-solid fa-award" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Premios y Reconocimientos</span>
            </h2>
            <div className="achievements-full-list">
              {achievements.map((a) => <AchievementCard key={a.id} item={a} />)}
            </div>
          </div>

          {/* News */}
          <div className="logros-block">
            <h2 className="team-section-label fade-in" ref={newsTitleRef}>
              <span><i className="fa-solid fa-newspaper" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Noticias del Semillero</span>
            </h2>
            <div className="news-grid">
              {news.map((n) => <NewsCard key={n.id} item={n} />)}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
