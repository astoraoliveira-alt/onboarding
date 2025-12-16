import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import DynamicHeader from './components/DynamicHeader';
import Hero from './components/Hero';
import SecuritySection from './components/SecuritySection';
import MicrosoftIntro from './components/MicrosoftIntro';
import TeamsManual from './components/TeamsManual';
import OutlookSetup from './components/OutlookSetup';
import ToolsAndSupport from './components/ToolsAndSupport';
import DownloadsSection from './components/DownloadsSection';
import InspirationalQuotes from './components/InspirationalQuotes';
import Footer from './components/Footer';
import './App.css';

const MOCK_EMPLOYEE = {
  name: 'Ana Silva',
  role: 'Product Designer',
  email: 'ana.silva@davosconsulting.com.br',
  admissionDate: '15/12/2025',
  salary: 'R$ 8.500,00',
};

function Section({ children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id={id} style={{
      transform: isInView ? "none" : "translateY(20px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
      {children}
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
          <Section>
            <InspirationalQuotes />
          </Section>

          <Section>
            <SecuritySection />
          </Section>

          <Section>
            <MicrosoftIntro />
          </Section>

          <Section>
            <TeamsManual />
          </Section>

          <Section>
            <OutlookSetup />
          </Section>

          <Section>
            <DownloadsSection />
          </Section>

          <Section>
            <ToolsAndSupport />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
