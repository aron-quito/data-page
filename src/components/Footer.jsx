export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-logo">ORION</span>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} ORION &mdash; Deep Tech &amp; Seguridad Geriátrica Inteligente<br />
          Desarrollado por estudiantes pertenecientes a la Escuela de Ingeniería en Informática y Sistemas (ESIS)<br />
          Universidad Nacional Jorge Basadre Grohmann (UNJBG) — Tacna, Perú.
        </p>
        <div className="footer-links">
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </footer>
  )
}
