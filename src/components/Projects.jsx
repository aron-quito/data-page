import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 'iot-falls',
    icon: 'fa-solid fa-tower-broadcast',
    title: 'Detección de Caídas mediante IoT',
    description:
      'Sistema inteligente de monitoreo basado en sensores inerciales y análisis de series temporales en tiempo real, orientado a la prevención y respuesta inmediata ante incidentes.',
    tech: ['IoT', 'Signal Processing', 'Predictive Modeling', 'Python'],
  },
  {
    id: 'predictive-demand',
    icon: 'fa-solid fa-chart-line',
    title: 'Análisis Predictivo de Demanda',
    description:
      'Modelado estocástico y aprendizaje profundo para la optimización de recursos en cadenas de suministro locales, reduciendo la incertidumbre operativa.',
    tech: ['Deep Learning', 'Optimization', 'TensorFlow', 'Data Science'],
  },
  {
    id: 'ai-clinical',
    icon: 'fa-solid fa-brain',
    title: 'IA en Diagnóstico Clínico',
    description:
      'Investigación sobre el uso de redes neuronales convolucionales para el pre-diagnóstico asistido por computadora a partir de imágenes médicas.',
    tech: ['Computer Vision', 'CNN', 'Healthcare AI', 'PyTorch'],
  },
]

function ProjectCard({ project }) {
  const ref = useScrollAnimation()
  return (
    <article className="project-card fade-in" ref={ref} id={`project-${project.id}`}>
      <i className={`${project.icon} project-icon`}></i>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-tech">
        {project.tech.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const titleRef = useScrollAnimation()
  const introRef = useScrollAnimation()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title fade-in" ref={titleRef}>Proyectos de Investigación</h2>
        <div className="projects-intro fade-in" ref={introRef}>
          <p>
            Abordamos problemas complejos mediante la aplicación de algoritmos avanzados y
            análisis estadístico riguroso. Nuestra metodología combina el rigor académico con
            tecnologías de vanguardia para convertir datos en bruto en conocimiento accionable
            con impacto real en la región.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
