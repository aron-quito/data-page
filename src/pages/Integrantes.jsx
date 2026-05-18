import { useScrollAnimation } from '../hooks/useScrollAnimation'

const advisor = {
  id: 'taya',
  icon: 'fa-solid fa-user-tie',
  name: 'Ing. Taya',
  role: 'Docente Asesor',
  description:
    'Docente investigador de la UNJBG. Dirige la visión científica y la dirección estratégica de las líneas de investigación del semillero DATA-ESIS.',
  interests: ['Machine Learning', 'Data Science', 'Investigación Académica'],
  links: [
    { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fa-solid fa-envelope', href: '#', label: 'Email' },
  ],
}

const coordinator = {
  id: 'coordinador',
  icon: 'fa-solid fa-user-gear',
  name: 'Coordinador General',
  role: 'Coordinador del Semillero',
  description:
    'Responsable del liderazgo operativo, articulación de proyectos y representación del semillero en eventos académicos.',
  interests: ['Data Strategy', 'AI Ethics', 'Project Management'],
  links: [
    { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
  ],
}

const members = [
  {
    id: 'dany',
    icon: 'fa-solid fa-code',
    name: 'Dany',
    role: 'Investigador Senior',
    description: 'Especialista en modelos predictivos, arquitecturas de aprendizaje profundo y procesamiento de lenguaje natural.',
    interests: ['Machine Learning', 'NLP', 'Deep Learning'],
    links: [
      { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    ],
  },
  {
    id: 'jhosep',
    icon: 'fa-solid fa-database',
    name: 'Jhosep',
    role: 'Analista de Datos',
    description: 'Enfocado en pipelines de datos, dashboards analíticos y optimización de consultas para grandes volúmenes.',
    interests: ['Big Data', 'Data Visualization', 'SQL Optimization'],
    links: [
      { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    ],
  },
  {
    id: 'jhon',
    icon: 'fa-solid fa-microchip',
    name: 'Jhon Sebastian',
    role: 'Desarrollador IoT',
    description: 'Especialista en sistemas embebidos, integración de sensores y análisis de señales en tiempo real.',
    interests: ['IoT', 'Edge Computing', 'Real-time Analytics'],
    links: [
      { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    ],
  },
  {
    id: 'member4',
    icon: 'fa-solid fa-chart-pie',
    name: 'Investigador',
    role: 'Data Scientist',
    description: 'Orientado al análisis estadístico, modelado predictivo y comunicación de hallazgos a través de visualizaciones.',
    interests: ['Statistics', 'Python', 'Power BI'],
    links: [
      { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    ],
  },
]

function MemberCard({ member, size = 'normal' }) {
  const ref = useScrollAnimation()
  return (
    <div className={`member-full-card fade-in ${size}`} ref={ref} id={`member-${member.id}`}>
      <div className="member-full-image">
        <i className={member.icon}></i>
      </div>
      <div className="member-full-info">
        <h3>{member.name}</h3>
        <span className="member-role">{member.role}</span>
        <p>{member.description}</p>
        <ul className="project-tech" style={{ justifyContent: 'center', margin: '0.8rem 0' }}>
          {member.interests.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <div className="member-links">
          {member.links.map(({ icon, href, label }) => (
            <a key={label} href={href} title={label} aria-label={label}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Integrantes() {
  const titleRef = useScrollAnimation()

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="section-pre fade-in" ref={titleRef}>Conoce al Equipo</span>
          <h1 className="page-hero-title">Nuestros Integrantes</h1>
          <p className="page-hero-sub">
            Un equipo multidisciplinario de estudiantes e investigadores comprometidos
            con la excelencia académica y el impacto real de la ciencia de datos.
          </p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">

          {/* Advisor */}
          <div className="team-section-block">
            <h2 className="team-section-label">
              <span><i className="fa-solid fa-star" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Dirección Académica</span>
            </h2>
            <div className="team-single-center">
              <MemberCard member={advisor} size="large" />
            </div>
          </div>

          {/* Coordinator */}
          <div className="team-section-block">
            <h2 className="team-section-label">
              <span><i className="fa-solid fa-diagram-project" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Coordinación</span>
            </h2>
            <div className="team-single-center">
              <MemberCard member={coordinator} size="large" />
            </div>
          </div>

          {/* Members */}
          <div className="team-section-block">
            <h2 className="team-section-label">
              <span><i className="fa-solid fa-users" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Equipo Investigador</span>
            </h2>
            <div className="team-full-grid">
              {members.map((m) => <MemberCard key={m.id} member={m} />)}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
