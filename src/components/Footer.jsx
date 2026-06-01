import { BriefcaseBusiness, CodeXml, Sparkles } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-slate-200/70 bg-white/55 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="container-premium flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 text-left"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-white/10">
            <img
              src={logo}
              alt="Logo Adair Marques"
              className="h-full w-full object-cover object-center"
            />
          </span>
          <span>
            <span className="block font-semibold">Adair Marques</span>
            <span className="block text-sm text-slate-500 dark:text-slate-400">
              Todos Direitos Reservados ©
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
            href="https://www.linkedin.com/"
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
