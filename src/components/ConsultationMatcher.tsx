import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AUDIT_QUESTIONS, SERVICES } from '../data/portfolioData';
import { Sparkles, CheckCircle2, RotateCcw, ArrowRight, Calendar, Brain, ShieldCheck } from 'lucide-react';

interface ConsultationMatcherProps {
  onSelectService: (serviceName: string) => void;
}

export default function ConsultationMatcher({ onSelectService }: ConsultationMatcherProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [scoreMap, setScoreMap] = useState<{ [key: string]: number }>({
    psychology: 0,
    web: 0,
    marketing: 0,
    ai: 0
  });

  const handleSelectOption = (optionIndex: number) => {
    const question = AUDIT_QUESTIONS[currentStep];
    const option = question.options[optionIndex];

    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = optionIndex;
    setSelectedAnswers(newAnswers);

    // Update scores
    const newScores = { ...scoreMap };
    Object.entries(option.points).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });
    setScoreMap(newScores);

    // Move to next step or show results
    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(AUDIT_QUESTIONS.length); // Results state
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setScoreMap({ psychology: 0, web: 0, marketing: 0, ai: 0 });
  };

  // Determine top recommended service
  const getRecommendation = () => {
    const scores = Object.values(scoreMap) as number[];
    const highestScore = Math.max(...scores);
    const dominantCategory = Object.keys(scoreMap).find(
      (k) => scoreMap[k] === highestScore
    ) || 'psychology';

    switch (dominantCategory) {
      case 'web':
        return SERVICES.find((s) => s.id === 'web-development') || SERVICES[1];
      case 'marketing':
        return SERVICES.find((s) => s.id === 'digital-marketing') || SERVICES[2];
      case 'ai':
        return SERVICES.find((s) => s.id === 'ai-creation') || SERVICES[4];
      case 'psychology':
      default:
        return SERVICES.find((s) => s.id === 'psychology-consulting') || SERVICES[0];
    }
  };

  const recommendedService = getRecommendation();

  return (
    <section id="matcher" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c131c] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Strategy Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Discover Your Ideal Growth & Consulting Path
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Answer 3 quick questions to receive a tailored roadmap integrating psychological focus or digital scaling.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#121925] border border-teal-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {currentStep < AUDIT_QUESTIONS.length ? (
              <motion.div
                key={`question-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress Indicators */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                    Question {currentStep + 1} of {AUDIT_QUESTIONS.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {AUDIT_QUESTIONS.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentStep
                            ? 'w-8 bg-amber-400'
                            : i < currentStep
                            ? 'w-4 bg-teal-400'
                            : 'w-4 bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question Details */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {AUDIT_QUESTIONS[currentStep].question}
                </h3>
                <p className="text-sm text-slate-400 mb-8">
                  {AUDIT_QUESTIONS[currentStep].subtitle}
                </p>

                {/* Options List */}
                <div className="grid grid-cols-1 gap-3.5">
                  {AUDIT_QUESTIONS[currentStep].options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      className="text-left p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-teal-400 hover:bg-slate-850 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="pr-4">
                        <div className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                          {opt.label}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {opt.description}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-teal-400 group-hover:text-slate-950 group-hover:border-teal-400 shrink-0 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Results View */
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-400 mx-auto flex items-center justify-center text-3xl mb-4 shadow-lg shadow-teal-500/20">
                  <Brain className="w-8 h-8 text-teal-300" />
                </div>

                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Your Custom Recommendation
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
                  {recommendedService.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
                  {recommendedService.tagline}
                </p>

                {/* Key Deliverables Card */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-left max-w-2xl mx-auto mb-8">
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    Recommended Next Action Steps with Melina:
                  </h4>
                  <div className="space-y-2">
                    {recommendedService.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => onSelectService(recommendedService.title)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Strategy Consultation</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
