import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolioData';
import { TrendingUp, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function CaseStudiesSection({ onOpenBooking }: CaseStudiesSectionProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c131c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight relative inline-block">
            Featured Case Studies & Impact
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Measurable results across human psychology, web engineering, organic visibility, and automated AI systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#121925] border border-white/5 hover:border-teal-500/50 rounded-2xl p-7 sm:p-8 shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
                    {study.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {study.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {study.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                {/* Impact Highlight Box */}
                <div className="bg-slate-900/90 border border-teal-500/20 rounded-xl p-3.5 mb-6 flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium text-emerald-300">
                    <strong className="text-white">Outcome:</strong> {study.impact}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {study.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-[#0c131c] p-3 rounded-xl border border-slate-800 text-center"
                    >
                      <div className="text-lg font-black text-amber-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-800/80 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenBooking(study.title)}
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>Similar Goal?</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
