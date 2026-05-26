import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ── Data ── */
const pillars = [
  {
    icon: 'fa-solid fa-microchip',
    title: 'Edge Computing',
    description:
      'Procesamiento local inmediato con hardware embebido (ESP32 + MPU6050). Toma de decisiones directamente en el dispositivo para garantizar una velocidad crítica y menor consumo.',
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'IA Híbrida Inteligente',
    description:
      'Modelos avanzados CNN-1D y BiLSTM entrenados para clasificar el patrón biométrico exacto de una caída, eliminando falsos positivos comunes como sentarse rápido.',
  },
  {
    icon: 'fa-solid fa-bell-slash',
    title: 'Automatización Total',
    description:
      'A diferencia de los botones de pánico tradicionales, KineDa detecta la caída de manera 100% autónoma y alerta al familiar inmediatamente sin necesidad de intervención.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Economía Plateada',
    description:
      'Diseñamos tecnología profunda (Deep Tech) desde las regiones del Perú para democratizar la seguridad geriátrica y proteger la independencia en la tercera edad.',
  },
]

const stats = [
  { value: '13.9%', label: 'Población adulta mayor en Perú' },
  { value: '100%', label: 'Monitoreo autónomo sin botones' },
  { value: '< 2s', label: 'Tiempo de alerta al familiar' },
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
  const problemVisualRef = useScrollAnimation()
  const problemTextRef = useScrollAnimation()
  const solutionVisualRef = useScrollAnimation()
  const solutionTextRef = useScrollAnimation()
  const techHeaderRef = useScrollAnimation()
  const aboutTextRef = useScrollAnimation()
  const contactRef = useScrollAnimation()

  return (
    <>
      {/* ── 1. Hero Section (Inicio) ── */}
      <section id="hero" className="hero">
        <div className="hero-bg-grid"></div>
        <div className="container">
          <div className="hero-content fade-in" ref={heroRef}>
            <span className="hero-pretitle">
              <i className="fa-solid fa-user-shield" style={{ marginRight: '8px' }}></i>
              ORION · Deep Tech & Salud Geriátrica
            </span>
            <h1 className="hero-title">
              Protegiendo a quienes nos cuidaron, de forma <span>inteligente</span>.
            </h1>
            <p className="hero-subtitle">
              KineDa es el primer wearable IoT inteligente con IA híbrida que detecta caídas 
              en tiempo real y alerta instantáneamente a la familia. Sin presionar botones. 
              Sin depender de terceros.
            </p>
            <div className="hero-ctas">
              <a href="#solucion" className="btn btn-primary">Conoce KineDa</a>
              <a href="#tecnologia" className="btn btn-ghost">Ver Tecnología</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="container stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {stats.map((s) => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>

      {/* ── 2. El Problema ── */}
      <section id="problema" className="about" style={{ background: 'var(--bg-deep)' }}>
        <div className="container about-grid">
          <div className="about-visual fade-in" ref={problemVisualRef}>
            <div className="about-badge" style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#ef4444' }}>
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="about-accent-line" style={{ background: 'linear-gradient(to bottom, #ef4444, transparent)' }}></div>
          </div>
          <div className="about-text fade-in" ref={problemTextRef}>
            <span className="section-pre" style={{ color: '#ef4444' }}>El Problema</span>
            <h2 className="section-title-inline">El peligro silencioso de la soledad en la tercera edad.</h2>
            <p>
              El <strong>13.9% de la población peruana</strong> son adultos mayores. Con las familias fuera del hogar debido a largas jornadas laborales, muchos de ellos pasan el día completamente solos.
            </p>
            <p>
              Las caídas representan la <strong>causa principal de pérdida de independencia, hospitalizaciones de gravedad y emergencias fatales</strong> en la tercera edad. Un retraso en el auxilio médico puede convertir un golpe tratable en una secuela permanente o fatal.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. La Solución (KineDa) ── */}
      <section id="solucion" className="about" style={{ background: 'var(--bg-navy)', borderTop: '1px solid rgba(100,255,218,0.05)', borderBottom: '1px solid rgba(100,255,218,0.05)' }}>
        <div className="container about-grid">
          <div className="about-text fade-in" ref={solutionTextRef}>
            <span className="section-pre">La Solución (KineDa)</span>
            <h2 className="section-title-inline">Auxilio automatizado cuando cada segundo cuenta.</h2>
            <p>
              <strong>KineDa</strong> es un dispositivo <em>wearable</em> (vestible) IoT inteligente que detecta caídas de manera totalmente autónoma, enviando alertas inmediatas al celular de los familiares.
            </p>
            <p>
              A diferencia de los botones de pánico tradicionales —que son <strong>inútiles si el adulto mayor queda inconsciente, desorientado o incapacitado</strong>— KineDa toma la decisión por sí mismo, procesando en tiempo real el movimiento para garantizar la seguridad de su ser querido.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href="#contacto" className="btn btn-primary">Registrarse a la Lista de Espera</a>
            </div>
          </div>
          <div className="about-visual fade-in" ref={solutionVisualRef}>
            <div className="about-badge" style={{ color: 'var(--accent-cyan)' }}>
              <i className="fa-solid fa-tower-broadcast"></i>
            </div>
            <div className="about-accent-line"></div>
          </div>
        </div>
      </section>

      {/* ── 4. Características Tecnológicas ── */}
      <section id="tecnologia" className="what-we-do" style={{ background: 'var(--bg-deep)' }}>
        <div className="container">
          <div className="section-header fade-in" ref={techHeaderRef}>
            <span className="section-pre">Características Tecnológicas</span>
            <h2 className="section-title-inline">Tecnología Profunda (Deep Tech) para salvar vidas.</h2>
          </div>
          <div className="pillars-grid">
            {pillars.map((p) => <PillarCard key={p.title} item={p} />)}
          </div>
        </div>
      </section>

      {/* ── 5. Acerca de ORION (Nosotros) ── */}
      <section id="nosotros" className="about" style={{ background: 'var(--bg-navy)' }}>
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-badge" style={{ borderColor: 'rgba(100, 255, 218, 0.3)', color: 'var(--accent-cyan)' }}>
              <i className="fa-solid fa-users-gear"></i>
            </div>
            <div className="about-accent-line"></div>
          </div>
          <div className="about-text fade-in" ref={aboutTextRef}>
            <span className="section-pre">Nosotros</span>
            <h2 className="section-title-inline">Innovación in-house desde el sur del Perú.</h2>
            <p>
              ORION está conformado por un equipo de excelencia (décimo superior) de la Escuela de <strong>Ingeniería en Informática y Sistemas (ESIS)</strong> de la <strong>Universidad Nacional Jorge Basadre Grohmann (UNJBG)</strong> en Tacna, Perú.
            </p>
            <p>
              Nuestra misión es descentralizar el desarrollo de tecnología profunda (Deep Tech) y demostrar que desde las regiones de nuestro país podemos exportar soluciones de seguridad geriátrica y revolucionar la <strong>Economía Plateada</strong> a nivel global.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/integrantes" className="btn btn-primary">Conocer al Equipo</Link>
              <Link to="/logros" className="btn btn-ghost">Ver Trayectoria & Logros</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Contacto ── */}
      <section id="contacto" className="about" style={{ background: 'var(--bg-deep)', borderTop: '1px solid rgba(100,255,218,0.05)' }}>
        <div className="container">
          <div className="fade-in" ref={contactRef} style={{ textAlign: 'center' }}>
            <span className="section-pre">Contacto</span>
            <h2 className="section-title-inline">¿Quieres ser parte de ORION?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto' }}>
              Si eres inversionista, representas a una institución, o quieres proteger a un adulto mayor con KineDa, escríbenos directamente.
            </p>
            <a
              href="mailto:acachicatariq@unjbg.edu.pe"
              className="btn btn-primary"
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', gap: '10px' }}
            >
              <i className="fa-solid fa-envelope"></i>
              acachicatariq@unjbg.edu.pe
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
