export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-logo">DATA-ESIS</span>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} DATA-ESIS &mdash; Semillero de Investigación en Data Analytics &amp; IA<br />
          Universidad Nacional Jorge Basadre Grohmann — UNJBG
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
