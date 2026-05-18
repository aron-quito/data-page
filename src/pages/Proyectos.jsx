import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'iot-falls',
    icon: 'fa-solid fa-tower-broadcast',
    status: 'Completado',
    statusColor: 'cyan',
    year: '2024',
    title: 'Detección de Caídas mediante IoT',
    description:
      'Sistema inteligente de monitoreo basado en sensores inerciales (MPU-6050) y análisis de series temporales en tiempo real. El modelo clasifica eventos de caída con alta precisión para respuesta de emergencia inmediata.',
    tech: ['IoT', 'Python', 'Signal Processing', 'Predictive Modeling', 'Edge Computing'],
  },
  {
    id: 'predictive-demand',
    icon: 'fa-solid fa-chart-line',
    status: 'En progreso',
    statusColor: 'yellow',
    year: '2025',
    title: 'Análisis Predictivo de Demanda',
    description:
      'Modelado estocástico y aprendizaje profundo para la optimización de recursos en cadenas de suministro locales. Reducción de la incertidumbre operativa a través de pronósticos de series temporales con LSTM.',
    tech: ['Deep Learning', 'LSTM', 'TensorFlow', 'Data Science', 'Time Series'],
  },
  {
    id: 'ai-clinical',
    icon: 'fa-solid fa-brain',
    status: 'En progreso',
    statusColor: 'yellow',
    year: '2025',
    title: 'IA en Diagnóstico Clínico',
    description:
      'Investigación sobre el uso de redes neuronales convolucionales (CNN) para el pre-diagnóstico asistido por computadora a partir de imágenes médicas de radiografías.',
    tech: ['Computer Vision', 'CNN', 'PyTorch', 'Healthcare AI', 'OpenCV'],
  },
  {
    id: 'nlp-academic',
    icon: 'fa-solid fa-comment-dots',
    status: 'Investigación',
    statusColor: 'purple',
    year: '2025',
    title: 'NLP para Texto Académico',
    description:
      'Exploración de modelos de lenguaje natural para el análisis semántico y clasificación automática de producción científica universitaria en español.',
    tech: ['NLP', 'Transformers', 'BERT', 'Python', 'Hugging Face'],
  },
  {
    id: 'air-quality',
    icon: 'fa-solid fa-wind',
    status: 'Investigación',
    statusColor: 'purple',
    year: '2025',
    title: 'Monitoreo de Calidad del Aire',
    description:
      'Red de sensores distribuidos y dashboard en tiempo real para el monitoreo de partículas contaminantes en zonas urbanas de Tacna, con alertas automáticas.',
    tech: ['IoT', 'MQTT', 'Node-RED', 'Data Visualization', 'Time Series'],
  },
  {
    id: 'agro-vision',
    icon: 'fa-solid fa-seedling',
    status: 'Planificado',
    statusColor: 'slate',
    year: '2026',
    title: 'AgroVision: IA para Agricultura',
    description:
      'Sistema de visión computacional para la detección temprana de plagas y enfermedades en cultivos agrícolas de la región mediante análisis de imágenes satelitales y drones.',
    tech: ['Computer Vision', 'Satellite Imagery', 'Deep Learning', 'GIS', 'Python'],
  },
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
          <span className="section-pre fade-in" ref={titleRef}>Portafolio de Investigación</span>
          <h1 className="page-hero-title">Nuestros Proyectos</h1>
          <p className="page-hero-sub">
            Aplicamos ciencia de datos e inteligencia artificial a problemas concretos.
            Cada proyecto es una exploración rigurosa con impacto medible.
          </p>
        </div>
      </div>

      {/* Project grid */}
      <section className="page-content">
        <div className="container">
          <div className="proj-page-grid">
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
