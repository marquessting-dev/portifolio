import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-premium">
        <div className="glass-panel flex flex-col gap-8 rounded-[2rem] p-7 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Contato</p>
            <h2 className="section-title">Vamos conversar?</h2>
            <p className="section-copy mt-5">Para falar sobre uma oportunidade, um projeto ou trocar ideias sobre tecnologia, entre em contato pelo LinkedIn.</p>
          </div>
          <a href="https://www.linkedin.com/in/marquessting/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">Conversar no LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
