import { useScrollAnimation } from '../hooks/useScrollAnimation'

const members = [
  {
    id: 'aron',
    icon: 'fa-solid fa-user-gear',
    name: 'Aron Cachicatari',
    role: 'Coordinador',
    description: 'Lidera la coordinación general y el desarrollo de los modelos de Deep Learning aplicados al análisis de señales de movimiento.',
    email: 'acachicatariq@unjbg.edu.pe',
    phone: '933765612',
    interests: ['Deep Learning', 'Inteligencia Artificial', 'Coordinación'],
  },
  {
    id: 'erik',
    icon: 'fa-solid fa-microchip',
    name: 'Erik Bothguer',
    role: 'Especialista en Hardware',
    description: 'Responsable del diseño, integración y optimización del hardware del dispositivo KineDa y el procesamiento de señales inerciales.',
    email: 'esbottgeri@unjbg.edu.pe',
    phone: '930698006',
    interests: ['Hardware IoT', 'Sistemas Embebidos', 'Edge Computing'],
  },
  {
    id: 'jhon',
    icon: 'fa-solid fa-stethoscope',
    name: 'Jhon Mamani',
    role: 'DevOps & Ingeniería Biomédica',
    description: 'Encargado del despliegue en la nube, automatización de procesos y el modelado biomédico para la protección geriátrica.',
    email: 'jmamanianc@unjbg.edu.pe',
    phone: '926260545',
    interests: ['DevOps', 'Ingeniería Biomédica', 'Cloud Deployment'],
  },
]

function MemberCard({ member }) {
  const ref = useScrollAnimation()
  return (
    <div className="member-full-card fade-in" ref={ref} id={`member-${member.id}`}>
      <div className="member-full-image">
        <i className={member.icon}></i>
      </div>
      <div className="member-full-info">
        <h3>{member.name}</h3>
        <span className="member-role">{member.role}</span>
        <p>{member.description}</p>
        
        {/* Contact info details */}
        <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '4px' }}>
            <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}></i>
            <a href={`mailto:${member.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              {member.email}
            </a>
          </div>
          {member.phone && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <i className="fa-solid fa-phone" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}></i>
              <a href={`tel:${member.phone}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                {member.phone}
              </a>
            </div>
          )}
        </div>

        <ul className="project-tech" style={{ justifyContent: 'center', margin: '1rem 0 0' }}>
          {member.interests.map((i) => <li key={i}>{i}</li>)}
        </ul>
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
          <span className="section-pre fade-in" ref={titleRef}>Equipo Fundador</span>
          <h1 className="page-hero-title">Quiénes Somos</h1>
          <p className="page-hero-sub">
            Somos estudiantes de la Escuela de Ingeniería en Informática y Sistemas (ESIS) de la Universidad Nacional Jorge Basadre Grohmann (UNJBG) en Tacna, Perú, fuertemente comprometidos con el desarrollo de tecnología. Nuestro objetivo principal es impactar directamente en la sociedad a través de nuestras soluciones informáticas. Creemos firmemente en la construcción de un Perú tecnológico e inteligente, y trabajamos cada día velando por la visión futurista de nuestro país, donde la innovación y el talento nacional sean el motor del progreso.
          </p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">

          {/* Members */}
          <div className="team-section-block" style={{ marginBottom: 0 }}>
            <h2 className="team-section-label">
              <span><i className="fa-solid fa-users" style={{ color: 'var(--accent-cyan)', marginRight: '8px' }}></i>Equipo de ORION</span>
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
