import { BriefcaseBusiness, CodeXml, Sparkles } from "lucide-react";
import logo from "../assets/axion-logo.webp";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-white/55 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="container-premium flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex flex-col items-start gap-3 text-left sm:flex-row sm:items-center sm:gap-5"
        >
          <span className="relative block h-14 w-28 shrink-0 overflow-hidden">
            <img
              src={logo}
              alt="Axion Gestão"
              width="1952"
              height="2208"
              loading="lazy"
              decoding="async"
              className="absolute left-0 top-[-62%] h-auto w-full brightness-0 dark:brightness-100"
            />
          </span>
          <span>
            <span className="block font-semibold">Adair Marques</span>
            <span className="block text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Todos os direitos reservados.
            </span>
          </span>
        </button>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/marquessting-dev"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white"
            aria-label="GitHub"
          >
            <CodeXml size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/marquessting/"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/70 text-cyan-500 dark:border-white/10 dark:bg-white/[0.06]">
            <Sparkles size={18} />
          </span>
        </div>
      </div>
    </footer>
  );
}
