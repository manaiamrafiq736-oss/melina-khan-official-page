import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c131c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight relative inline-block">
            Client & Academic Testimonials
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Trusted by university scholars, startup founders, e-commerce directors, and coaching clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#121925] border border-white/5 hover:border-teal-500/40 rounded-2xl p-7 sm:p-8 shadow-xl relative flex flex-col justify-between"
            >
              <div>
                {/* Rating & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-300 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                    {test.serviceCategory}
                  </span>
                </div>

                {/* Quote text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-slate-700/40 absolute -top-3 -left-2 -z-0" />
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic relative z-10">
                    "{test.content}"
                  </p>
                </div>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-400/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {test.name}
                    </h4>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" title="Verified Client" />
                  </div>
                  <p className="text-xs text-slate-400">
                    {test.role} {test.company ? `• ${test.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
