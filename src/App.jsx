import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Tentang from './components/Tentang'
import VisiMisi from './components/VisiMisi'
import ProgramKeahlian from './components/ProgramKeahlian'
import Galeri from './components/Galeri'
import Kontak from './components/Kontak'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Stats />
      <Tentang />
      <VisiMisi />
      <ProgramKeahlian />
      <Galeri />
      <Kontak />
      <Footer />
    </>
  )
}
