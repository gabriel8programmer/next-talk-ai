import { MessageSquareWarning, Repeat, Split, CheckCircle2 } from "lucide-react";
import { PROBLEMS_SOLUTIONS } from "@/data/landing";

const ICONS = [
  MessageSquareWarning,
  Repeat,
  Split,
];

export function Problems() {
  return (
    <section id="produto" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
            <span>O Desafio da Escala</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Seu atendimento cresceu. Sua operação precisa acompanhar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Quando o volume de mensagens no WhatsApp aumenta, tentar gerenciar com celulares soltos e respostas improvisadas gera atrasos, sobrecarga e perda de oportunidades comerciais.
          </p>
        </div>

        {/* 3 Problems & Solutions Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS_SOLUTIONS.map((item, index) => {
            const Icon = ICONS[index] || MessageSquareWarning;
            return (
              <div
                key={item.problemTitle}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all hover:bg-slate-50"
              >
                <div>
                  {/* Problem Flag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-rose-700 bg-rose-50/90 px-2 py-0.5 rounded-full border border-rose-200/60 uppercase tracking-wide">
                      Gargalo comum
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.problemTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.problemDescription}
                  </p>
                </div>

                {/* NexTalk Solution Arrow Box */}
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                      ✓
                    </span>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                      Como a NexTalk resolve:
                    </h4>
                  </div>
                  <h5 className="font-semibold text-sm text-slate-900">
                    {item.solutionTitle}
                  </h5>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {item.solutionDescription}
                  </p>

                  <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/70">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{item.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
