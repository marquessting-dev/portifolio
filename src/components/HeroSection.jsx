import { ArrowRight, CodeXml, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import adairPhoto from "../assets/adair.png";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="relative pt-32 sm:pt-40">
      <div className="container-premium grid min-h-[calc(100vh-5rem)] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
            <Sparkles size={16} className="text-cyan-500" />
            Experiências digitais modernas, úteis e elegantes
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-normal text-slate-950 sm:text-7xl lg:text-8xl dark:text-white">
            Adair Marques
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            Desenvolvedor front-end, profissional de suporte técnico e entusiasta
            de IA, criando interfaces rápidas, refinadas e soluções digitais que
            unem tecnologia, clareza e experiência premium.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-premium transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-white dark:text-slate-950"
            >
              Ver Projetos
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>
            <a
              href="#social"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            >
              Redes Sociais
              <CodeXml size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[500px] items-center justify-center"
        >
          <div className="absolute h-[72%] w-[72%] rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-300/15" />
          <div className="absolute bottom-8 h-24 w-[68%] rounded-full bg-slate-950/15 blur-3xl dark:bg-cyan-950/30" />
          <motion.img
            src={adairPhoto}
            alt="Foto de Adair Marques"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-[min(88vw,440px)] object-contain drop-shadow-[0_34px_46px_rgba(15,23,42,0.34)] [mask-image:radial-gradient(ellipse_58%_72%_at_50%_48%,#000_56%,rgba(0,0,0,0.82)_66%,transparent_82%)] dark:drop-shadow-[0_34px_52px_rgba(34,211,238,0.18)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
