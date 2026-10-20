"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/landing";

interface HeaderProps {
  onOpenDemo: (plan?: string) => void;
}

export function Header({ onOpenDemo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg p-1"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-slate-900">
                NexTalk
              </span>
              <span className="flex items-center text-xs font-semibold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/60 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenDemo()}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Entrar
            </button>
            <button
              onClick={() => onOpenDemo()}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98]"
            >
              <span>Começar agora</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenDemo()}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
            >
              Começar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Entrar
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                <span>Começar agora</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
