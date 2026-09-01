import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_TAGS, PERSONAL_INFO } from '../data/portfolioData';
import { Check, ArrowRight, Sparkles, MessageCircle, MapPin, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenMatcher: () => void;
}

export default function Hero({ onOpenBooking, onOpenMatcher }: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/80 via-[#0c131c] to-[#0c131c]"
    >
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-teal-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        {/* Profile Picture with Gradient Ring & Verified Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-7 group profile-pic-container"
        >
          {/* Glowing Animated Outer Ring */}
          <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-teal-400 via-emerald-400 to-amber-300 shadow-[0_10px_35px_rgba(45,212,191,0.35)] relative">
            <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-[#0c131c] bg-slate-900 relative">
              <img
                src={imgError ? PERSONAL_INFO.fallbackImage : PERSONAL_INFO.profileImage}
                alt="Melina Khan"
                onError={() => {
                  if (!imgError) {
                    setImgError(true);
                  }
                }}
                className="profile-pic w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Verified Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 400 }}
              className="verified-badge absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center border-4 border-[#0c131c] shadow-lg shadow-emerald-500/40"
              title="Verified Professional Consultant"
            >
              <i className="fas fa-check text-white text-sm"></i>
            </motion.div>
          </div>

          {/* Academic Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-[#121925]/95 border border-teal-500/30 text-[11px] font-semibold text-teal-300 flex items-center gap-1.5 shadow-md"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>BZU Multan Researcher</span>
          </motion.div>
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Melina Khan
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 tracking-wide mb-4">
            Professional Digital & Psychological Consultant
          </h2>
        </motion.div>

        {/* Dynamic Skill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 my-5 max-w-3xl"
        >
          {SKILL_TAGS.map((tag) => {
            const isSelected = selectedTag === tag.name;
            return (
              <button
                key={tag.name}
                onClick={() => setSelectedTag(isSelected ? null : tag.name)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/30 scale-105 font-bold'
                    : 'bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400/60'
                }`}
                title={tag.description}
              >
                <i className={`fas ${tag.icon} text-amber-400 text-xs`}></i>
                <span>{tag.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Skill Explainer Popup/Drawer */}
        {selectedTag && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 px-4 py-2 rounded-xl bg-slate-800/80 border border-teal-500/40 text-xs sm:text-sm text-slate-300 max-w-lg shadow-lg"
          >
            <span className="font-semibold text-amber-400">{selectedTag}:</span>{' '}
            {SKILL_TAGS.find((t) => t.name === selectedTag)?.description}
          </motion.div>
        )}

        {/* Narrative Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8"
        >
          Bridging the gap between mental well-being and digital success. I craft unique strategies for
          your growth, combining psychology, design, and technology.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            onClick={() => handleScrollToSection('contact')}
            id="hero-collab-btn"
            className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(45,212,191,0.35)] hover:shadow-[0_15px_40px_rgba(45,212,191,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Let's Collaborate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenMatcher}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-slate-800/90 text-teal-300 font-semibold text-sm sm:text-base border border-teal-500/30 hover:border-teal-400 hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-md cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Find My Strategy</span>
          </button>

          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Melina,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20consult%20with%20you.`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3.5 sm:py-4 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 hover:border-emerald-400 transition-all flex items-center gap-2 text-sm font-medium"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </motion.div>

        {/* Location & Quick Trust Subtext */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Multan, Pakistan • Worldwide Remote</span>
          </span>
          <span className="inline-block w-1 h-1 rounded-full bg-slate-600"></span>
          <span className="text-amber-400 font-medium">100% Confidential & Data-Driven</span>
        </div>
      </div>
    </section>
  );
}
