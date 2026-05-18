import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const ref = useScrollAnimation()

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in" ref={ref}>
          <span className="hero-pretitle">Semillero de Investigación UNJBG</span>
          <h1 className="hero-title">
            Transformando la Complejidad <span>en Inteligencia.</span>
          </h1>
          <p className="hero-subtitle">
            DATA-ESIS es un ecosistema académico dedicado a la exploración rigurosa y el
            desarrollo de soluciones avanzadas en Data Analytics e Inteligencia Artificial.
          </p>
          <a href="#projects" className="btn">Explorar Investigaciones</a>
        </div>
      </div>
    </section>
  )
}
