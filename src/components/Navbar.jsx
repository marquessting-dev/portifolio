import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import axionLogo from "../assets/axion-logo.webp";

const navItems = [
  { id: "home", label: "Início" },
  { id: "projects", label: "Projetos" },
];

export default function Navbar({ activePage, onNavigate, darkMode, onToggleTheme }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#05070c]/85"
    >
      <nav aria-label="Navegação principal" className="container-premium flex h-20 items-center justify-between gap-1 sm:gap-2">
        <a href="/" onClick={(event) => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); onNavigate("home"); }} aria-label="Axion Gestão — início do portfólio" className="relative h-[38px] w-[76px] shrink-0 overflow-hidden rounded-md sm:h-16 sm:w-32">
          <img src={axionLogo} alt="Axion Gestão" width="1952" height="2208" decoding="async" className="absolute left-0 top-[-62%] h-auto w-full brightness-0 dark:brightness-100" />
        </a>

        <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm backdrop-blur-xl sm:gap-2 dark:border-white/10 dark:bg-white/[0.06]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id === "projects" ? "/projetos" : "/"}
              aria-current={activePage === item.id ? "page" : undefined}
              onClick={(event) => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); onNavigate(item.id); }}
              className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 sm:px-4 ${
                activePage === item.id
                  ? "text-white dark:text-slate-950"
                  : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {activePage === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-slate-950 dark:bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
          aria-label={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
          title="Alternar tema"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </nav>
    </motion.header>
  );
}
