import { ArrowUp, Heart, Mail, MessageCircle, Globe, Shield, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d14] border-t border-white/5 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-400 to-amber-300 flex items-center justify-center font-black text-[#0c131c]">
                MK
              </div>
              <span className="text-xl font-extrabold text-white tracking-wider">
                <span className="text-teal-400">MELINA</span>{' '}
                <span className="text-amber-400">KHAN</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional Digital & Psychological Consultant. Synthesizing human behavioral insights with web engineering, search architecture, and modern artificial intelligence.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-emerald-500/20 hover:text-emerald-400 border border-slate-700 hover:border-emerald-400/50 flex items-center justify-center transition-all text-slate-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-teal-500/20 hover:text-teal-400 border border-slate-700 hover:border-teal-400/50 flex items-center justify-center transition-all text-slate-300"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-blue-500/20 hover:text-blue-400 border border-slate-700 hover:border-blue-400/50 flex items-center justify-center transition-all text-slate-300"
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-sky-500/20 hover:text-sky-400 border border-slate-700 hover:border-sky-400/50 flex items-center justify-center transition-all text-slate-300"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          {/* Col 3: Core Domains */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase text-xs">
              Specializations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Cognitive & Mindset Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  High-Performance Web Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Consumer Behavioral Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Search Intent & SEO Mastery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  AI Systems & Prompt Workflows
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase text-xs">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  About Melina Khan
                </a>
              </li>
              <li>
                <a href="#matcher" className="hover:text-teal-300 transition-colors">
                  Interactive Strategy Quiz
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-300 transition-colors">
                  Case Studies & Metrics
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-300 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors">
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Academic & Location Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase text-xs">
              Credentials
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center gap-1.5 text-teal-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>BZU Multan Scholar</span>
              </p>
              <p>Psychology & Behavioral Science Research</p>
              <p className="text-slate-500 pt-1">
                Multan, Punjab, Pakistan<br />Available for global remote client engagements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Melina Khan</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
