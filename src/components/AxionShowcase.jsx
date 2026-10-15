import { useRef, useState } from "react";
import { ArrowUpRight, Expand, X } from "lucide-react";
import axionLogo from "../assets/axion-logo.webp";
import dashboardPreview from "../assets/axion-dashboard-preview.webp";
import dashboardFull from "../assets/axion-dashboard-full.webp";
import { projects } from "../data/projects.js";

const axion = projects.find(project => project.id === "distribution");

export default function AxionShowcase({ onNavigate }) {
  const dialogRef = useRef(null);
  const [hasOpened, setHasOpened] = useState(false);

  function openScreenshot() {
    setHasOpened(true);
    dialogRef.current?.showModal();
  }

  return (
    <section aria-labelledby="axion-title" className="glass-panel overflow-hidden rounded-[2rem]">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <figure className="flex h-full flex-col justify-center border-b border-white/10 bg-[#101419] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="relative h-10 w-20 shrink-0 overflow-hidden">
              <img src={axionLogo} alt="Axion Gestão" width="1952" height="2208" loading="lazy" decoding="async" className="absolute left-0 top-[-62%] h-auto w-full" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">Dashboard consolidado</span>
          </div>
          <button type="button" onClick={openScreenshot} aria-haspopup="dialog" aria-label="Ampliar captura do dashboard do Axion ERP" className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-white text-left">
            <img src={dashboardPreview} alt="Dashboard do Axion ERP com visão geral, fluxo de caixa, compras e estoque" width="1200" height="751" loading="lazy" decoding="async" className="h-auto w-full" />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-slate-950/90 px-3 py-2 text-[11px] font-medium text-white transition-colors group-hover:bg-cyan-800"><Expand size={13} aria-hidden="true" />Ampliar imagem</span>
          </button>
          <figcaption className="mt-3 text-xs leading-5 text-slate-400">Uma visão da interface e das informações que fazem parte da operação.</figcaption>
        </figure>
        <div className="p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Projeto em destaque</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3">
            <h2 id="axion-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Axion ERP</h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold text-cyan-700 dark:text-cyan-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" aria-hidden="true" />Em desenvolvimento</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">Gestão integrada de estoque, compras, vendas e financeiro, com dados por estabelecimento e controle de acesso.</p>
          <div className="mt-5 border-l-2 border-cyan-500/60 pl-4">
            <p className="text-xs font-semibold text-slate-950 dark:text-white">Minha atuação</p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{axion.role}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="http://erpaxion.com.br/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">Conhecer o Axion <ArrowUpRight size={16} aria-hidden="true" /></a>
            {onNavigate ? <a href="/projetos" onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); onNavigate("projects"); }} className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300">Detalhes do projeto <ArrowUpRight size={15} aria-hidden="true" /></a> : <a href={axion.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 underline-offset-4 hover:underline dark:text-cyan-300">Abrir sistema <ArrowUpRight size={15} aria-hidden="true" /></a>}
          </div>
        </div>
      </div>
      <dialog ref={dialogRef} aria-labelledby="axion-preview-title" className="axion-image-dialog" onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3 text-white">
          <h3 id="axion-preview-title" className="text-sm font-medium">Dashboard do Axion ERP</h3>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Fechar imagem ampliada" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 hover:bg-white/10"><X size={18} /></button>
        </div>
        {hasOpened && <img src={dashboardFull} alt="Captura ampliada do dashboard do Axion ERP" width="1920" height="1201" decoding="async" className="mx-auto max-h-[80dvh] w-full object-contain" />}
      </dialog>
    </section>
  );
}
