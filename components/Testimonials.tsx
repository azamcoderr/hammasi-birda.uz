"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dilnoza Karimova",
    role: "CEO, Retail Pro",
    quote:
      "Hammasi Birda jamoasi bizning brendni 30 kun ichida premium darajaga olib chiqdi.",
  },
  {
    name: "Bekzod Mirzaev",
    role: "Founder, Fintech Lab",
    quote:
      "UX va marketing hammasi birda bo'lgani uchun konversiya 2x oshdi.",
  },
  {
    name: "Madina Rasulova",
    role: "CMO, SaaS Cloud",
    quote:
      "Professional yondashuv, aniq KPI va kuchli dizayn — natija ajoyib.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Mijozlar
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Ishonchli hamkorlar fikri
          </h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <p className="text-sm text-slate-200">“{item.quote}”</p>
              <footer className="mt-6 text-sm text-slate-400">
                <span className="block text-white">{item.name}</span>
                {item.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
