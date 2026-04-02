import { CButtonMark } from "@/components/landing/c-button-mark";

const stats = [
  { value: "3 weeks", label: "to launch a focused MVP" },
  { value: "12+", label: "systems we can wire into one flow" },
  { value: "24/7", label: "visibility across leads and ops" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-24 lg:pt-14"
    >
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">
          Next.js + Tailwind + shadcn/ui
        </div>
        <div className="space-y-6">
          <p className="max-w-2xl text-sm uppercase tracking-[0.3em] text-white/55">
            Digital infrastructure for ambitious African brands
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Build a sharper online presence without the usual agency drag.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            We design and ship modern websites, client portals, and internal
            tools that help teams move faster, look premium, and stay in sync.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            href="#contact"
          >
            Start your project
          </a>
          <a
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            href="#services"
          >
            Explore services
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="text-2xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CButtonMark />
    </section>
  );
}
