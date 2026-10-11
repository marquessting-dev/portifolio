import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  const Icon = project.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -8 }}
      className="group glass-panel flex h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:border-cyan-300/60 hover:shadow-glow dark:hover:border-cyan-300/30"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:scale-105 dark:bg-white dark:text-slate-950">
          <Icon size={24} />
        </span>
        <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
          {project.category}
        </span>
      </div>

      <h3 className="mt-7 text-2xl font-semibold tracking-normal">{project.title}</h3>
      {project.status && !project.unavailable && <p className="mt-3 text-xs font-semibold text-cyan-700 dark:text-cyan-300">{project.status}</p>}
      <p className="mt-3 flex-1 whitespace-pre-line leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      {project.role && (
        <div className="mt-5 rounded-2xl border border-cyan-600/20 bg-cyan-500/5 p-4">
          <p className="text-sm font-semibold text-slate-950 dark:text-white">Minha atuação</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.role}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-950/5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <details className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
        <summary className="cursor-pointer text-sm font-semibold text-cyan-700 dark:text-cyan-300">Sobre este projeto</summary>
        <dl className="mt-4 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <div><dt className="font-semibold text-slate-950 dark:text-white">Objetivo</dt><dd className="mt-1">{project.objective}</dd></div>
          <div><dt className="font-semibold text-slate-950 dark:text-white">Escopo</dt><dd className="mt-1">{project.scope}</dd></div>
        </dl>
      </details>

      {project.unavailable ? (
        <div className="mt-7 rounded-2xl border border-amber-300/50 bg-amber-100/60 px-5 py-3 text-center dark:bg-amber-400/10">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">Temporariamente indisponível</p>
          <p className="mt-1 text-xs text-amber-800 dark:text-amber-200">{project.status}</p>
        </div>
      ) : <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
        aria-label={`Abrir ${project.title} em uma nova aba`}
      >
        Acessar projeto
        <ExternalLink size={16} />
      </a>}
    </motion.article>
  );
}
