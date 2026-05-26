import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'kineda-fall-detection',
    icon: 'fa-solid fa-tower-broadcast',
    status: 'Desarrollo Activo',
    statusColor: 'cyan',
    year: '2024 - Presente',
    title: 'KineDa: Dispositivo Inteligente de Detección de Caídas',
    description:
      'Sistema wearable de seguridad geriátrica que procesa señales de acelerometría y giroscopio en tiempo real mediante algoritmos en el dispositivo (Edge Computing). Alerta de manera 100% autónoma a los familiares en caso de una caída, sin requerir la intervención del usuario.',
    tech: ['IoT', 'ESP32', 'MPU6050', 'Edge Computing', 'Deep Learning', 'BiLSTM & CNN-1D'],
  }
]

const statusColors = {
  cyan: { bg: 'rgba(100,255,218,0.1)', text: '#64ffda' },
  yellow: { bg: 'rgba(255,214,0,0.1)', text: '#ffd600' },
  purple: { bg: 'rgba(180,100,255,0.1)', text: '#b464ff' },
  slate: { bg: 'rgba(136,146,176,0.1)', text: '#8892b0' },
}

function ProjectCard({ project }) {
  const ref = useScrollAnimation()
  const colors = statusColors[project.statusColor]
  return (
    <article className="proj-page-card fade-in" ref={ref} id={`project-${project.id}`}>
      <div className="proj-card-top">
        <i className={`${project.icon} proj-page-icon`}></i>
        <div className="proj-card-meta">
          <span
            className="proj-status"
            style={{ background: colors.bg, color: colors.text }}
          >
            {project.status}
          </span>
          <span className="proj-year">{project.year}</span>
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-tech">
        {project.tech.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  )
}

export default function Proyectos() {
  const titleRef = useScrollAnimation()

  return (
    <div className="page-wrapper">
      {/* Page header */}
      <div className="page-hero">
        <div className="container">
          <span className="section-pre fade-in" ref={titleRef}>Proyecto Principal</span>
          <h1 className="page-hero-title">Nuestro Desarrollo</h1>
          <p className="page-hero-sub">
            Diseñamos soluciones robustas de software y hardware. Conoce KineDa, nuestro 
            proyecto insignia para salvaguardar la independencia de los adultos mayores.
          </p>
        </div>
      </div>

      {/* Project grid */}
      <section className="page-content">
        <div className="container">
          <div className="proj-page-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
