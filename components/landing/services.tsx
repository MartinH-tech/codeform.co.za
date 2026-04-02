const services = [
  {
    title: "Launch websites",
    description:
      "Premium landing pages and marketing sites that feel clear, fast, and trustworthy on first contact.",
  },
  {
    title: "Client-facing portals",
    description:
      "Secure touchpoints for onboarding, updates, documents, bookings, and repeat engagement.",
  },
  {
    title: "Internal workflows",
    description:
      "Operational tools that connect sales, service delivery, and reporting without spreadsheet chaos.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-200/75">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Digital systems that look polished and stay easy to grow.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-300">
            Each page section and component is structured to be reusable, so
            new features don&apos;t force a rewrite every time the business
            evolves.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
