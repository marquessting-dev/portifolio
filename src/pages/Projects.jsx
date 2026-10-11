import ProjectCard from "../components/ProjectCard.jsx";
import AxionShowcase from "../components/AxionShowcase.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <div className="pt-32 sm:pt-40">
      <section className="pb-12">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Projetos</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">Soluções para problemas reais.</h1>
            <p className="section-copy mt-6">Uma seleção de projetos de interfaces, pedidos e gestão. Explore os objetivos, as tecnologias e o escopo de cada solução.</p>
          </div>
          <AxionShowcase />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
