import { Navbar } from "@/components/Navbar";
import { Hero3D } from "@/components/Hero3D";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main id="top" className="relative">
      <Navbar />
      <section className="px-6 pt-36 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-panel-border bg-panel/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
              Premium agency
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">
                Biznesingiz uchun <span className="gradient-text">hammasi birda</span>
                premium digital ekotizim
              </h1>
              <p className="text-base text-slate-300">
                Hammasi Birda — strategiya, dizayn va texnologiyani bitta jamoada
                birlashtiradigan agentlik. Biz sizning mahsulotingizni yuqori
                darajadagi tajriba va o'sishga olib chiqamiz.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-primary">
                Loyihani boshlash
              </a>
              <a href="#cases" className="button-ghost">
                Keyslarni ko'rish
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-panel p-4 text-center">
                <p className="text-2xl font-semibold text-white">120+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Loyihalar
                </p>
              </div>
              <div className="glass-panel p-4 text-center">
                <p className="text-2xl font-semibold text-white">15</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Ekspertlar
                </p>
              </div>
              <div className="glass-panel p-4 text-center">
                <p className="text-2xl font-semibold text-white">8 yil</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Tajriba
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Hero3D />
            <div className="glass-panel p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Fokus
              </p>
              <p className="mt-3 text-base text-slate-200">
                AI-driven marketing, premium UX, 3D visual va tezkor product
                launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Cases />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <footer className="px-6 pb-12 pt-6 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-panel-border pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© 2024 Hammasi Birda. Barcha huquqlar himoyalangan.</span>
          <span>Strategiya · Design · Technology</span>
        </div>
      </footer>
    </main>
  );
}
