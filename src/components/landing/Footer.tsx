import Link from "next/link";
import { MessageSquare, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">
                  NexTalk
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-indigo-900/80 text-indigo-300 border border-indigo-700/60">
                  AI
                </span>
              </div>
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Atendimento inteligente sem transformar seu WhatsApp em caos. Plataforma B2B para centralizar mensagens, automatizar rotinas e escalar sua equipe comercial e de suporte.
            </p>

            <div className="mt-6 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 max-w-sm">
              <p className="font-semibold text-slate-300 mb-0.5">Aviso de Projeto:</p>
              NexTalk AI — Projeto fictício desenvolvido para fins de portfólio. Não possui afiliação comercial real.
            </div>
          </div>

          {/* Col 1: Produto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Produto
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#produto" className="hover:text-white transition-colors">
                  Atendimento
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-white transition-colors">
                  Agentes de IA
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Automações
                </a>
              </li>
              <li>
                <a href="#integracoes" className="hover:text-white transition-colors">
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Empresa */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <span className="text-slate-600 cursor-not-allowed">
                  Blog (Em breve)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Recursos & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Recursos & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#integracoes" className="hover:text-white transition-colors">
                  Documentação API
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <span className="text-slate-500 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                  Sistemas Operacionais
                </span>
              </li>
              <li className="pt-2 border-t border-slate-900 text-[11px] text-slate-500">
                <span>Privacidade & Termos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NexTalk AI. Todos os direitos reservados para fins de demonstração.</p>

          <a
            href="#top"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
