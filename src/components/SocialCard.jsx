import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialCard({ icon: Icon, name, handle, href, index }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-panel group rounded-[2rem] p-6"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 p-3 text-white dark:bg-white dark:text-slate-950">
          <Icon size={24} />
        </span>
        <ArrowUpRight
          size={20}
          className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-500"
        />
      </div>
      <h3 className="mt-7 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{handle}</p>
    </motion.a>
  );
}
