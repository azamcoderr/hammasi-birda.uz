"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Xizmatlar", href: "#services" },
  { label: "Keyslar", href: "#cases" },
  { label: "Jarayon", href: "#process" },
  { label: "Narxlar", href: "#pricing" },
  { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full px-4 sm:px-8"
    >
      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-panel-border bg-panel/70 px-6 py-3 backdrop-blur-glass">
        <a href="#top" className="text-lg font-semibold text-white">
          hammasibirda<span className="text-accent">.uz</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button-primary text-xs">
          Loyihani Boshlash
        </a>
      </div>
    </motion.header>
  );
}
