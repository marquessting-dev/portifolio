import axionLogo from "../assets/axion-logo.webp";
import { ArrowUpRight } from "lucide-react";

export default function AxionShowcase({ onNavigate }) {
  return (
    <section aria-labelledby="axion-title" className="glass-panel overflow-hidden rounded-[2rem]">
      <div className="grid lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden bg-[#101419] px-6 py-10 sm:px-12">
          <div className="relative aspect-[2/1] overflow-hidden">
            <img src={axionLogo} alt="Axion Gestão" width="1952" height="2208" loading="lazy" decoding="async" className="absolute left-0 top-[-62%] h-auto w-full" />
          </div>
        </div>
        <div className="p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Projeto em destaque</p>
          <h2 id="axion-title" className="mt-4 text-3xl font-semibold sm:text-4xl">Axion ERP</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-300">Sistema de gestão empresarial que estamos desenvolvendo para integrar produtos, estoque, compras, vendas e PDV, notas fiscais, clientes e financeiro.</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">Dados por estabelecimento e perfis de acesso para definir o que cada usuário pode consultar ou operar.</p>
          <span className="mt-5 inline-flex rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">Em desenvolvimento</span>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href="http://erpaxion.com.br/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">Acessar Axion ERP <ArrowUpRight size={18} aria-hidden="true" /></a>
            {onNavigate && <a href="/projetos" onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); onNavigate("projects"); }} className="text-sm font-semibold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300">Todos os projetos</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
