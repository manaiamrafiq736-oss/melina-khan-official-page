import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { CheckCircle2, ArrowRight, X, Clock, Sparkles, Calendar } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Psychology', 'Development', 'Marketing', 'AI & SEO'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c131c] relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight relative inline-block">
            Professional Services
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Holistic consulting combining scientific psychological methodology with state-of-the-art digital growth strategies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 shadow-md shadow-teal-500/30 font-bold scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#121925] p-7 sm:p-8 rounded-2xl border border-white/5 hover:border-teal-400/60 shadow-lg hover:shadow-[0_20px_35px_rgba(0,0,0,0.4)] transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Badge if available */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Service Icon */}
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                  <i className={`fas ${service.icon}`}></i>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-amber-400/90 mb-3">
                  {service.tagline}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Key Deliverables:
                  </span>
                  {service.deliverables.slice(0, 2).map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800/80 mt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-teal-400/10 hover:bg-teal-400 text-teal-300 hover:text-slate-950 border border-teal-500/30 transition-all cursor-pointer"
                >
                  Book This
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121925] border border-teal-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center text-2xl shrink-0">
                  <i className={`fas ${selectedService.icon}`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-400/10 text-teal-300 text-xs font-semibold">
                      {selectedService.category}
                    </span>
                    {selectedService.duration && (
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {selectedService.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm text-amber-400 font-medium">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Deliverables Grid */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  What You Receive (Deliverables):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Direct Benefits & Impact:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-400 hover:text-white rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for {selectedService.title}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
