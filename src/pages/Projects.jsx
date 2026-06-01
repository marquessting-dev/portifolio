import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";

const deliveryProject = {
  title: "Plataforma Delivery PappaiFood",
  description:
    "Experiência de pedidos moderna para restaurantes, com foco em velocidade, catálogo visual e jornada simples.",
  category: "Delivery",
  techs: ["React", "Tailwind", "API", "UI/UX"],
  icon: ShoppingBag,
  url: "https://app.papaifood.com.br/",
};

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
                Projeto
              </p>
              <h1 className="text-5xl font-semibold tracking-normal text-slate-950 sm:text-7xl dark:text-white">
                Delivery PappaiFood.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Uma plataforma de delivery com visual premium, fluxo simples,
                interface responsiva e foco em uma experiência rápida para o
                cliente final.
              </p>
            </motion.div>

            <motion.div layout className="mx-auto mt-12 grid max-w-2xl gap-5">
              <AnimatePresence mode="popLayout">
                <ProjectCard project={deliveryProject} />
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
