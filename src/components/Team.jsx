import { useScrollAnimation } from '../hooks/useScrollAnimation'

const advisor = {
  id: 'taya',
  icon: 'fa-solid fa-user-tie',
  name: 'Ing. Taya',
  role: 'Docente Asesor',
  description: 'Visión estratégica y dirección científica de las líneas de investigación del semillero.',
  interests: ['Machine Learning', 'Data Science', 'Investigación Aplicada'],
  links: [
    { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fa-solid fa-envelope', href: '#', label: 'Email' },
  ],
}

const members = [
  {
    id: 'coordinador',
    icon: 'fa-solid fa-user-gear',
    name: 'Coordinador General',
    role: 'Gestión Estratégica',
    description: 'Liderazgo operativo y articulación de proyectos multidisciplinarios.',
    interests: ['Data Strategy', 'AI Ethics', 'Project Management'],
    links: [
      { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    ],
  },
  {
    id: 'dany',
    icon: 'fa-solid fa-code',
    name: 'Dany',
    role: 'Investigador Senior',
    description: 'Especialista en modelos predictivos y arquitecturas de aprendizaje profundo.',
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
    description: 'Enfoque en pipelines de datos y visualización avanzada para decisiones estratégicas.',
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
    description: 'Especialista en sistemas embebidos, sensores y procesamiento de señales en tiempo real.',
    interests: ['IoT', 'Edge Computing', 'Real-time Analytics'],
    links: [
      { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: '#', label: 'LinkedIn' },
    ],
  },
]

function MemberCard({ member, featured = false }) {
  const ref = useScrollAnimation()
  return (
    <div
      className={`member-card fade-in ${featured ? 'featured' : ''}`}
      ref={ref}
      id={`member-${member.id}`}
    >
      <div className="member-image">
        <i className={member.icon}></i>
      </div>
      <div className="member-info">
        <h4>{member.name}</h4>
        <span className="member-role">{member.role}</span>
        <p>{member.description}</p>
        <ul className="project-tech" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
          {member.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
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

export default function Team() {
  const titleRef = useScrollAnimation()

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title fade-in" ref={titleRef}>Equipo Investigador</h2>

        <div className="team-hierarchy">
          {/* Advisor */}
          <div>
            <p className="team-group-label"><span>Dirección Académica</span></p>
            <div className="team-group-center">
              <MemberCard member={advisor} featured />
            </div>
          </div>

          {/* Core team */}
          <div>
            <p className="team-group-label"><span>Equipo de Investigación</span></p>
            <div className="team-grid">
              {members.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
