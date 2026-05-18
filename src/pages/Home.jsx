import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ── Data ── */
const pillars = [
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Data Analytics',
    description:
      'Exploramos patrones ocultos en grandes volúmenes de datos utilizando técnicas estadísticas avanzadas y herramientas de Business Intelligence.',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'Inteligencia Artificial',
    description:
      'Desarrollamos e investigamos modelos de Machine Learning y Deep Learning aplicados a problemas reales del entorno regional y nacional.',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'IoT & Sistemas Embebidos',
    description:
      'Integramos sensores, microcontroladores y flujos de datos en tiempo real para construir soluciones inteligentes y conectadas.',
  },
  {
    icon: 'fa-solid fa-flask',
    title: 'Investigación Aplicada',
    description:
      'Producimos investigación científica con publicaciones y participación en congresos nacionales e internacionales.',
  },
]

const stats = [
  { value: '4+', label: 'Proyectos activos' },
  { value: '2', label: 'Premios nacionales' },
  { value: '10+', label: 'Investigadores' },
  { value: '1', label: 'Foro binacional ganado' },
]

function PillarCard({ item }) {
  const ref = useScrollAnimation()
  return (
    <div className="pillar-card fade-in" ref={ref}>
      <i className={`${item.icon} pillar-icon`}></i>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

function StatItem({ stat }) {
  const ref = useScrollAnimation()
  return (
    <div className="stat-item fade-in" ref={ref}>
      <span className="stat-value">{stat.value}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

export default function Home() {
  const heroRef = useScrollAnimation()
  const aboutTitleRef = useScrollAnimation()
  const aboutTextRef = useScrollAnimation()
  const whatTitleRef = useScrollAnimation()

  return (
    <>
      {/* ── Hero ── */}
      <section id="hero" className="hero">
        <div className="hero-bg-grid"></div>
        <div className="container">
          <div className="hero-content fade-in" ref={heroRef}>
            <span className="hero-pretitle">
              <i className="fa-solid fa-circle-nodes" style={{ marginRight: '8px' }}></i>
              Semillero de Investigación · UNJBG
            </span>
            <h1 className="hero-title">
              Transformando la <span>Complejidad</span><br />en Inteligencia.
            </h1>
            <p className="hero-subtitle">
              Somos un ecosistema académico de alto rendimiento especializado en
              Data Analytics, Ciencia de Datos e Inteligencia Artificial aplicada
              a problemas reales.
            </p>
            <div className="hero-ctas">
              <Link to="/proyectos" className="btn btn-primary">Ver Proyectos</Link>
              <Link to="/integrantes" className="btn btn-ghost">Conocer al Equipo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s) => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>

      {/* ── Quiénes somos ── */}
      <section className="about">
        <div className="container about-grid">
          <div className="about-visual fade-in" ref={aboutTitleRef}>
            <div className="about-badge">
              <i className="fa-solid fa-dna"></i>
            </div>
            <div className="about-accent-line"></div>
          </div>
          <div className="about-text fade-in" ref={aboutTextRef}>
            <span className="section-pre">Quiénes Somos</span>
            <h2 className="section-title-inline">Un semillero forjado en la investigación.</h2>
            <p>
              DATA-ESIS nació en las aulas de la <strong>Universidad Nacional Jorge Basadre Grohmann</strong> con
              una misión clara: democratizar el conocimiento en ciencia de datos y demostrar que
              desde el sur del Perú se puede hacer investigación de clase mundial.
            </p>
            <p>
              No somos el producto de un solo proyecto. Somos un <strong>equipo académico en constante
              evolución</strong>, explorando nuevas tecnologías, participando en foros nacionales e
              internacionales, y formando a la próxima generación de científicos de datos.
            </p>
            <Link to="/integrantes" className="btn btn-ghost" style={{ marginTop: '1.5rem' }}>
              Conocer al equipo <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Qué hacemos ── */}
      <section className="what-we-do">
        <div className="container">
          <div className="section-header fade-in" ref={whatTitleRef}>
            <span className="section-pre">Qué Hacemos</span>
            <h2 className="section-title-inline">Nuestras líneas de investigación.</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((p) => <PillarCard key={p.title} item={p} />)}
          </div>
          <div className="what-cta fade-in">
            <Link to="/proyectos" className="btn btn-primary">
              Ver todos los proyectos <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
