import { motion } from 'motion/react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { Brain, Code, Sparkles, GraduationCap, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const pillars = [
    {
      icon: Brain,
      title: 'Human Behavioral Insights',
      desc: 'Deep understanding of cognitive triggers, attention spans, emotional drivers, and decision architecture that govern human action.'
    },
    {
      icon: Code,
      title: 'Modern Digital Engineering',
      desc: 'Crafting ultra-responsive web applications, SEO structures, and AI workflows that perform flawlessly on modern devices.'
    },
    {
      icon: HeartHandshake,
      title: 'Empathetic Growth Coaching',
      desc: 'Evidence-based mindset frameworks to conquer burnout, enhance daily focus, and build sustainable habits for ambitious minds.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c131c] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight relative inline-block">
            About Me
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            The intersection of behavioral psychology, modern web architecture, and digital growth.
          </p>
        </div>

        {/* Highlight Quote Box in Urdu & English */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-[#121925] via-[#172030] to-[#121925] p-6 sm:p-8 rounded-2xl border border-teal-500/30 mb-16 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                "Psychology ki samajh aur Modern Technology ka perfect imtezaaj"
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                "{PERSONAL_INFO.bioUrduEnglish}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Academic & Visionary Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              {PERSONAL_INFO.aboutDetailed[0]}
            </p>
            <p className="text-slate-400">
              {PERSONAL_INFO.aboutDetailed[1]}
            </p>
            <p>
              {PERSONAL_INFO.aboutDetailed[2]}
            </p>

            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-teal-300">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Bahauddin Zakariya University (BZU)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Ethics & Privacy Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Philosophy Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-[#121925] p-5 rounded-xl border border-white/5 hover:border-teal-500/40 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Numerical Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#121925] p-6 rounded-2xl border border-slate-800/80 text-center hover:border-teal-500/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-teal-400 to-amber-300 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
