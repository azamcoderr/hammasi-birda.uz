"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Audit va strategiya",
    desc: "Biz bozoringizni tahlil qilamiz, positioning va KPI belgilaymiz.",
  },
  {
    title: "Premium dizayn",
    desc: "Glassmorphism va futuristik UI asosida prototiplar yaratamiz.",
  },
  {
    title: "Ishga tushirish",
    desc: "Develop, test va launch. KPI monitoring hammasi birda.",
  },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Jarayon
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Tizimli ishlash, o'lchanadigan natija
          </h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <span className="text-sm font-semibold text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
