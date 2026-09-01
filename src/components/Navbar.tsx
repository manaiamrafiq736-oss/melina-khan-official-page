import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, MessageCircle, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenMatcher: () => void;
}

export default function Navbar({ onOpenBooking, onOpenMatcher }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'matcher', 'projects', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Strategy Quiz', href: '#matcher', id: 'matcher' },
    { name: 'Case Studies', href: '#projects', id: 'projects' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c131c]/95 backdrop-blur-md py-3 shadow-lg shadow-black/40 border-b border-white/5'
          : 'bg-[#0c131c]/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
          id="brand-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-amber-300 flex items-center justify-center font-black text-[#0c131c] shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            MK
          </div>
          <span className="text-2xl font-extrabold tracking-wider text-white uppercase">
            <span className="text-teal-400">MELINA</span>{' '}
            <span className="text-amber-400">KHAN</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-amber-400 font-semibold'
                        : 'text-slate-300 hover:text-teal-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenMatcher}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400 transition-all cursor-pointer"
            title="Take interactive consultation quiz"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Strategy Matcher</span>
          </button>

          <button
            onClick={() => onOpenBooking()}
            id="nav-book-btn"
            className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-full bg-teal-400 text-slate-950"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-teal-300 focus:outline-none border border-slate-700"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0e1622] border-b border-slate-800 px-6 py-5 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-slate-300 hover:text-teal-300 font-medium py-1.5 border-b border-slate-800/60"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMatcher();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-teal-500/10 text-teal-300 border border-teal-500/30"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                Find My Ideal Strategy
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 shadow-md shadow-teal-500/30"
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation
              </button>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Quick Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
