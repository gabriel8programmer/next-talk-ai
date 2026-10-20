import {
  Link2,
  Sliders,
  Workflow,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/landing";

const STEP_ICONS = [Link2, Sliders, Workflow, LineChart];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
            Passo a Passo Simplificado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Como funciona na prática
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sem processos de implantação demorados ou projetos de meses. Sua operação começa a rodar em 4 passos lógicos.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Continuous connection line (Desktop only) */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx] || Link2;
              return (
                <div
                  key={step.step}
                  className="flex flex-col bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-indigo-300 transition-all hover:shadow-md"
                >
                  {/* Step Marker Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-sm shadow-indigo-600/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-400 font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
