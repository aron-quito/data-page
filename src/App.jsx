import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Integrantes from './pages/Integrantes'
import Logros from './pages/Logros'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/logros" element={<Logros />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
