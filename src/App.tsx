import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ConsultationMatcher from './components/ConsultationMatcher';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenMatcher = () => {
    const matcherSection = document.getElementById('matcher');
    if (matcherSection) {
      matcherSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c131c] text-[#e2e8f0] relative selection:bg-teal-400 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMatcher={handleOpenMatcher}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenMatcher={handleOpenMatcher}
        />

        {/* About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Services Showcase */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* Interactive Consultation Strategy Matcher Quiz */}
        <ConsultationMatcher
          onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* Case Studies & Metrics */}
        <CaseStudiesSection
          onOpenBooking={(studyTitle) => handleOpenBooking(studyTitle)}
        />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Consultation Scheduling */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
