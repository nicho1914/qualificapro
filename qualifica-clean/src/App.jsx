import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Belief from './components/Belief'
import Courses from './components/Courses'
import Partners from './components/Partners'
import Platform from './components/Platform'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'

function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-ink">
      <Hero />
      <Intro />
      <Experience />
      <Belief />
      <Courses />
      <Partners />
      <Platform />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacidade" element={<PrivacyPolicy />} />
      <Route path="/termos" element={<Terms />} />
      <Route path="/cookies" element={<CookiePolicy />} />
    </Routes>
  )
}
