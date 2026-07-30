import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Warehouse } from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Plataforma Delivery PappaiFood",
    description:
      "Experiência de pedidos moderna para restaurantes, com foco em velocidade, catálogo visual e jornada simples.",
    category: "Delivery",
    techs: ["React", "Tailwind", "API", "UI/UX"],
    icon: ShoppingBag,
    url: "https://app.papaifood.com.br/",
  },
  {
    title: "Gerenciamento de Centro de Distribuição",
    description:
      "Sistema para gerenciamento de centros de distribuição e controle de estoque.",
    category: "Gestão Empresarial",
    techs: ["React.js", "PostgreSQL"],
    icon: Warehouse,
    url: "https://distribuicao.papaifood.com.br",
  },
];

export default function Projects() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="pt-32 sm:pt-40"
      >
        <section className="pb-24">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                Projetos
              </p>
              <h1 className="text-5xl font-semibold tracking-normal text-slate-950 sm:text-7xl dark:text-white">
                Soluções digitais em produção.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Projetos desenvolvidos para simplificar operações, conectar
                serviços e criar experiências digitais rápidas e funcionais.
              </p>
            </motion.div>

            <motion.div
              layout
              className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2"
            >
              <AnimatePresence mode="popLayout">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
