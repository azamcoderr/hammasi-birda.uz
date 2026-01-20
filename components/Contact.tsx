"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel grid gap-10 p-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Bog'lanish
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Loyihangizni premium darajada boshlaymiz
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Biz bilan hammasi birda: strategiya, dizayn, development va marketing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="button-primary">Bepul brif</button>
              <button className="button-ghost">Qo'ng'iroq so'rash</button>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-panel-border bg-slate-950/40 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Telefon
              </p>
              <p className="mt-2 text-lg text-white">+998 90 000 00 00</p>
            </div>
            <div className="rounded-2xl border border-panel-border bg-slate-950/40 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <p className="mt-2 text-lg text-white">hello@hammasibirda.uz</p>
            </div>
            <div className="rounded-2xl border border-panel-border bg-slate-950/40 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Manzil
              </p>
              <p className="mt-2 text-lg text-white">
                Toshkent, Amir Temur 1
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
