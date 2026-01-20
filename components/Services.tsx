"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Brending va Vizual tizim",
    desc: "Premium identika, logotip, brandbook va raqamli assetlar.",
  },
  {
    title: "Web va Mobil mahsulot",
    desc: "Next.js, React Native va yuqori konversiyali UX/UI.",
  },
  {
    title: "Performance Marketing",
    desc: "Kreativ, SMM, reklama optimizatsiyasi va analitika.",
  },
  {
    title: "Growth konsalting",
    desc: "Bozorga chiqish, positioning va monetizatsiya strategiyasi.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Xizmatlar
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Biz sizga hammasini birda taqdim etamiz
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
