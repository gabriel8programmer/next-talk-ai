import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/landing";

// NOTA OBRIGATÓRIA:
// Depoimentos e pessoas fictícias criados exclusivamente para fins de composição visual de portfólio.

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
            Opinião de Quem Opera
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Experiências reais de equipes que descomplicaram o WhatsApp
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Menos sobrecarga no time, clientes respondidos na hora e histórico sempre organizado.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role} • {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
