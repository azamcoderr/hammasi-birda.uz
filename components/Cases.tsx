"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Fintech superapp",
    tag: "UX/UI · Growth",
    result: "+38% onboarding",
  },
  {
    title: "Retail e-commerce",
    tag: "Branding · Performance",
    result: "2.4x ROAS",
  },
  {
    title: "SaaS platforma",
    tag: "Product · Web",
    result: "-27% churn",
  },
];

export function Cases() {
  return (
    <section id="cases" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Keyslar
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Natija beruvchi loyihalar
          </h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-7"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>{item.tag}</span>
                <span className="text-accent">{item.result}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Mijoz ehtiyojiga mos premium yechimlar va marketing orkestri.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
