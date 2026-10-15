import AboutSection from "../components/AboutSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SocialCard from "../components/SocialCard.jsx";
import AxionShowcase from "../components/AxionShowcase.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { BriefcaseBusiness, CodeXml } from "lucide-react";

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "APIs REST", "Git & GitHub"];
const socials = [
  { icon: CodeXml, name: "GitHub", handle: "@marquessting-dev", href: "https://github.com/marquessting-dev" },
  { icon: BriefcaseBusiness, name: "LinkedIn", handle: "Adair Marques", href: "https://www.linkedin.com/in/marquessting/" },
];

export default function Home({ onNavigate }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <section id="work" className="py-16 sm:py-24">
        <div className="container-premium">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Projetos selecionados</p>
            <h2 className="section-title">Tecnologia aplicada a negócios.</h2>
            <p className="section-copy mt-5">Conheça o Axion ERP e minha participação no desenvolvimento da interface.</p>
          </div>
          <AxionShowcase onNavigate={onNavigate} />
        </div>
      </section>
      <AboutSection />
      <section className="py-16 sm:py-20" aria-labelledby="skills-title">
        <div className="container-premium grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Competências</p>
            <h2 id="skills-title" className="section-title">Minha base técnica.</h2>
            <p className="section-copy mt-5">Interfaces responsivas com React, integração de dados com APIs REST e versionamento com Git.</p>
          </div>
          <ul className="flex flex-wrap gap-3" aria-label="Tecnologias">
            {skills.map(skill => <li key={skill} className="glass-panel rounded-2xl px-5 py-4 font-medium">{skill}</li>)}
          </ul>
        </div>
      </section>
      <ContactSection />
      <section id="social" className="pb-20 sm:pb-28" aria-labelledby="social-title">
        <div className="container-premium">
          <h2 id="social-title" className="mb-7 text-2xl font-semibold">Código e trajetória</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {socials.map((social, index) => <SocialCard key={social.name} {...social} index={index} />)}
          </div>
        </div>
      </section>
    </>
  );
}
