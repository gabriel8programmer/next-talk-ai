export function TrustBar() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-500 mb-8">
          Feito para empresas que utilizam conversas como parte da operação
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
          {/* Atlas */}
          <div className="flex items-center justify-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="h-6 w-6 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polygon points="12 2 2 22 22 22" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
              Atlas
            </span>
          </div>

          {/* Lumina */}
          <div className="flex items-center justify-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="h-6 w-6 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
              Lumina
            </span>
          </div>

          {/* NovaHaus */}
          <div className="flex items-center justify-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="h-6 w-6 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
              NovaHaus
            </span>
          </div>

          {/* Vita */}
          <div className="flex items-center justify-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity">
            <svg
              className="h-6 w-6 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
              Vita
            </span>
          </div>

          {/* Orbit */}
          <div className="flex items-center justify-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity col-span-2 sm:col-span-1">
            <svg
              className="h-6 w-6 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <ellipse cx="12" cy="12" rx="9" ry="5" transform="rotate(-30 12 12)" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-800">
              Orbit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
