import { motion } from "framer-motion";
import { Cpu, Network, ShieldCheck } from "lucide-react";

const milestones = [
  {
    icon: ShieldCheck,
    title: "Base Técnica",
    text: "Atuação em suporte técnico, manutenção, infraestrutura e resolução de problemas reais no dia a dia.",
  },
  {
    icon: Network,
    title: "Visão de Sistemas",
    text: "Experiência com redes, equipamentos, rotinas de atendimento e ambientes que precisam de estabilidade.",
  },
  {
    icon: Cpu,
    title: "Evolução Digital",
    text: "Migração natural para programação com React, APIs, UI/UX e inteligência artificial aplicada a soluções úteis.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
              Sobre mim
            </p>
            <h2 className="section-title">Tecnologia com repertório de campo.</h2>
            <p className="section-copy mt-6">
              Minha trajetória começou no suporte técnico, infraestrutura, redes
              e manutenção, onde aprendi a transformar problemas complexos em
              respostas claras. Hoje, levo essa visão prática para o front-end,
              criando interfaces com React, integrações com APIs, experiências
              bem desenhadas e soluções digitais ampliadas por IA.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="glass-panel rounded-[2rem] p-6"
                >
                  <div className="flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
