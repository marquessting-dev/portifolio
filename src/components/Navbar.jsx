import { Moon, Sparkles, Sun } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

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
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#05070c]/70"
    >
      <nav className="container-premium flex h-20 items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="group flex items-center gap-3"
          aria-label="Ir para o início"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white shadow-glow transition-transform duration-300 group-hover:scale-105 dark:bg-white/10">
            <img
              src={logo}
              alt="Logo Adair Marques"
              className="h-full w-full object-cover object-center"
            />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold leading-5">Adair Marques</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              Front-end & IA
            </span>
          </span>
        </button>

        <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
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
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
          aria-label="Alternar tema"
          title="Alternar tema"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </nav>
    </motion.header>
  );
}
