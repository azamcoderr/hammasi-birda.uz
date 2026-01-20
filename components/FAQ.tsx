"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Loyiha necha kunda ishga tushadi?",
    answer:
      "MVP odatda 4-6 hafta ichida, to'liq ekotizim esa 8-12 hafta davom etadi.",
  },
  {
    question: "Konsalting xizmatlari bormi?",
    answer:
      "Ha, strategiya, growth va marketing bo'yicha doimiy konsalting taqdim etamiz.",
  },
  {
    question: "Qanday texnologiyalar ishlatiladi?",
    answer:
      "Next.js, React Native, WebGL, analytics va AI asosidagi automation stack.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Savollarga javoblar
          </h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
