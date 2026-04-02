const logos = ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript", "Vercel"];

export function PlatformStrip() {
  return (
    <section
      id="platform"
      className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">
          System tools
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-medium text-white/80"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
