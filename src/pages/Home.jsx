import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  CodeXml,
  Cpu,
  Headphones,
  Layers3,
  MonitorCog,
  Network,
  PlugZap,
} from "lucide-react";
import AboutSection from "../components/AboutSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SocialCard from "../components/SocialCard.jsx";

const skills = [
  {
    icon: Headphones,
    title: "Suporte Técnico",
    text: "Diagnóstico, atendimento, documentação e solução com foco em estabilidade.",
  },
  {
    icon: Network,
    title: "Redes",
    text: "Configuração, conectividade, infraestrutura e visão prática de ambientes reais.",
  },
  {
    icon: Code2,
    title: "React Front-end",
    text: "Interfaces responsivas, componentes reutilizáveis e experiências modernas.",
  },
  {
    icon: Cpu,
    title: "Hardware",
    text: "Manutenção, upgrades, montagem e análise técnica de equipamentos.",
  },
  {
    icon: PlugZap,
    title: "APIs",
    text: "Integrações, consumo de dados e criação de fluxos digitais conectados.",
  },
  {
    icon: Layers3,
    title: "UI/UX",
    text: "Layouts limpos, hierarquia visual, usabilidade e acabamento premium.",
  },
];

const socials = [
  {
    icon: CodeXml,
    name: "GitHub",
    handle: "@marquessting-dev",
    href: "https://github.com/marquessting-dev",
  },
  {
    icon: BriefcaseBusiness,
    name: "LinkedIn",
    handle: "Adair Marques",
    href: "https://www.linkedin.com/in/marquessting/",
  },
  // {
  //   icon: Clapperboard,
  //   name: "TikTok",
  //   handle: "@adairmarques",
  //   href: "https://www.tiktok.com/",
  // },
];

export default function Home({ onNavigate }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <HeroSection onNavigate={onNavigate} />
        <AboutSection />

        <section className="py-24 sm:py-32">
          <div className="container-premium">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                  Skills
                </p>
                <h2 className="section-title">Capacidades para construir e resolver.</h2>
                <p className="section-copy mt-6">
                  Um conjunto técnico que mistura suporte, infraestrutura,
                  programação e sensibilidade visual para entregar produtos mais
                  completos.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.article
                    key={skill.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="glass-panel rounded-[2rem] p-6"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 p-3 text-white dark:bg-white dark:text-slate-950">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-7 text-xl font-semibold">{skill.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {skill.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="container-premium">
            <div className="glass-panel overflow-hidden rounded-[2.25rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                    Destaque
                  </p>
                  <h2 className="section-title">Delivery com acabamento de produto real.</h2>
                  <p className="section-copy mt-6">
                    Destaque para a Plataforma Delivery PappaiFood, uma solução
                    digital com interface moderna, fluxo objetivo e visual
                    preparado para apresentação profissional.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate("projects")}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-white dark:text-slate-950"
                  >
                    Ver projeto
                    <MonitorCog size={18} />
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                    Projeto em destaque
                  </span>
                  <h3 className="mt-8 text-3xl font-semibold">Plataforma Delivery PappaiFood</h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    Cardápio digital, experiência de pedidos e estrutura visual
                    pensada para restaurantes que precisam vender com clareza.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="social" className="py-24 sm:py-32">
          <div className="container-premium">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                Redes sociais
              </p>
              <h2 className="section-title">Conecte-se com meus trabalhos e bastidores.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {socials.map((social, index) => (
                <SocialCard key={social.name} {...social} index={index} />
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
