"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Start",
    price: "12 mln",
    description: "Startaplar uchun asosiy paket.",
    features: ["Audit & UX", "Landing + CRM", "1 oy support"],
  },
  {
    name: "Growth",
    price: "28 mln",
    description: "Kuchli growth va premium dizayn.",
    features: ["Branding", "Web + mobil MVP", "Kreativ marketing"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Katta bizneslar uchun to'liq ekotizim.",
    features: ["Design system", "Scale development", "Dedicated team"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Narxlar
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Moslashuvchan premium paketlar
          </h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel relative p-8 ${
                tier.featured ? "border-accent shadow-glow" : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Tavsiya
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{tier.description}</p>
              <p className="mt-6 text-3xl font-semibold text-white">
                {tier.price}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="button-ghost mt-8 w-full">
                Batafsil
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
