import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { BookingFormState } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Copy,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export default function ContactSection({ prefilledService }: ContactSectionProps) {
  const [formData, setFormData] = useState<BookingFormState>({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || SERVICES[0].title,
    consultationType: 'Online (Google Meet/Zoom)',
    preferredDate: '',
    preferredTime: 'Evening (5:00 PM - 8:00 PM PKT)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopySummary = () => {
    const summary = `*Consultation Request for Melina Khan*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nType: ${formData.consultationType}\nPreferred Date: ${formData.preferredDate || 'Flexible'}\nTime: ${formData.preferredTime}\nMessage: ${formData.notes || 'None'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Melina Khan,\n\nI would like to schedule a consultation / discuss a project:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📱 Phone: ${formData.phone}\n💼 Service: ${formData.service}\n🌐 Mode: ${formData.consultationType}\n📅 Preferred Date: ${formData.preferredDate || 'Flexible'}\n⏰ Time: ${formData.preferredTime}\n📝 Notes: ${formData.notes || 'N/A'}`
    );
    return `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c131c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight relative inline-block">
            Let's Connect & Collaborate
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a private 1-on-1 consultation or discuss your web development, SEO, or marketing project.
          </p>
        </div>

        {/* Contact Container */}
        <div className="bg-[#121925] border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-3">
                  Start Your Journey
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                  Whether you are seeking psychological clarity, academic focus coaching, or high-performance digital engineering for your business, I am here to assist.
                </p>

                {/* Direct info items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Direct Email</h4>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm text-slate-400 hover:text-teal-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">WhatsApp Direct</h4>
                      <a
                        href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-emerald-400 hover:underline flex items-center gap-1.5"
                      >
                        <span>{PERSONAL_INFO.whatsapp}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Location</h4>
                      <p className="text-sm text-slate-400">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Response Time</h4>
                      <p className="text-sm text-slate-400">
                        Typically within 4 to 12 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Scholar Tag */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/20 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                  <p className="text-xs text-slate-300 leading-snug">
                    <strong className="text-teal-300">Confidentiality Guarantee:</strong> All discussions, psychological consultations, and client project briefs are strictly confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-900/90 border border-teal-500/40 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 mx-auto flex items-center justify-center text-3xl mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Request Received Successfully!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-amber-400">{formData.name}</strong>. Melina Khan will review your consultation details for <strong>{formData.service}</strong> and reach out shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Instant Copy to WhatsApp</span>
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-slate-400 hover:text-teal-300 underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Ahmed"
                        className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Interested Service / Area *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Consultation Mode */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Format
                      </label>
                      <select
                        value={formData.consultationType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consultationType: e.target.value as BookingFormState['consultationType']
                          })
                        }
                        className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors"
                      >
                        <option value="Online (Google Meet/Zoom)">Online (Google Meet/Zoom)</option>
                        <option value="In-Person (Multan)">In-Person (Multan)</option>
                        <option value="Digital Project Discussion">Digital Project Discussion</option>
                      </select>
                    </div>

                    {/* Preferred Time Window */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Timing Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM PKT)">Morning (10:00 AM - 1:00 PM PKT)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM PKT)">Afternoon (2:00 PM - 5:00 PM PKT)</option>
                        <option value="Evening (5:00 PM - 8:00 PM PKT)">Evening (5:00 PM - 8:00 PM PKT)</option>
                        <option value="Night (8:00 PM - 11:00 PM PKT)">Night (8:00 PM - 11:00 PM PKT)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Project Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell Me About Your Goals or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share a few details about your challenges, website ideas, marketing requirements, or psychological consultation goals..."
                      className="w-full px-4 py-3 bg-[#0c131c] border border-slate-800 focus:border-teal-400 rounded-xl text-white text-sm outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    id="contact-submit-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm & Send Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 No spam. Your information is 100% confidential and never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
