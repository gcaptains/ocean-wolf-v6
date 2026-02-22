import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TacticalNav from './components/TacticalNav'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Protocol from './pages/Protocol'
import Mission from './pages/Mission'
import Participate from './pages/Participate'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <main className="bg-obsidian min-h-screen relative flex flex-col">
      <CustomCursor />
      <ScrollToTop />
      <TacticalNav />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/protocol" element={<Protocol />} />
          <Route path="/mission/trump-class" element={<Mission />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </main>
  )
}

export default App
