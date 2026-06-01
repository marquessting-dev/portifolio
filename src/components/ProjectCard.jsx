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
      <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

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

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
      >
        Visualizar
        <ExternalLink size={16} />
      </a>
    </motion.article>
  );
}
