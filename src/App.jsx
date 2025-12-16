import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import DynamicHeader from './components/DynamicHeader';
import Hero from './components/Hero';
import SecuritySection from './components/SecuritySection';
import MicrosoftIntro from './components/MicrosoftIntro';
import TeamsManual from './components/TeamsManual';
import OutlookSetup from './components/OutlookSetup';
import ToolsAndSupport from './components/ToolsAndSupport';
import DownloadsSection from './components/DownloadsSection';
import JourneyOverview from './components/JourneyOverview';
import BusinessContext from './components/BusinessContext';
import RoleExpectations from './components/RoleExpectations';
import CareerGrowth from './components/CareerGrowth';
import Footer from './components/Footer';
import './App.css';

const MOCK_EMPLOYEE = {
  name: 'Ana Silva',
  role: 'Product Designer',
  email: 'ana.silva@davosconsulting.com.br',
  admissionDate: '15/12/2025',
  salary: 'R$ 8.500,00',
};

function Section({ children, id, showBackBtn = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToJourney = () => {
    const element = document.getElementById('journey-overview');
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id={id} style={{
      transform: isInView ? "none" : "translateY(20px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      scrollMarginTop: "100px" // Ajuda no scroll smooth
    }}>
      {children}

      {showBackBtn && (
        <div className="back-to-journey-container">
          <button onClick={scrollToJourney} className="back-to-journey-btn">
            <ArrowUp size={16} />
            Voltar para o Mapa
          </button>
        </div>
      )}
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      <motion.div
        className="progress-bar-top"
        style={{ scaleX }}
      />

      {/* New Dynamic Header (Fixed Top) */}
      <DynamicHeader />

      {/* Main Content */}
      <main>
        {/* Hero Section (First Fold) */}
        <Hero employeeName="Ana Silva" />

        {/* Other Sections */}
        <div className="container main-content">
          <Section id="journey-overview">
            <JourneyOverview />
          </Section>

          <Section id="business-context-section" showBackBtn={true}>
            <BusinessContext />
          </Section>

          <Section id="role-expectations-section" showBackBtn={true}>
            <RoleExpectations />
          </Section>

          <Section id="career-growth-section" showBackBtn={true}>
            <CareerGrowth />
          </Section>

          <Section id="security-section" showBackBtn={true}>
            <SecuritySection />
          </Section>

          <Section id="microsoft-section" showBackBtn={true}>
            <MicrosoftIntro />
          </Section>

          <Section id="outlook-setup-section" showBackBtn={true}>
            <OutlookSetup />
          </Section>

          <Section id="teams-manual-section" showBackBtn={true}>
            <TeamsManual />
          </Section>

          <Section id="downloads-section" showBackBtn={true}>
            <DownloadsSection />
          </Section>

          <Section id="tools-section" showBackBtn={true}>
            <ToolsAndSupport />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
