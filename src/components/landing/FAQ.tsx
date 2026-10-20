"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/landing";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-600" />
            <span>Tire Suas Dúvidas</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Respostas diretas sobre como a plataforma funciona na prática.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-semibold text-slate-900 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
