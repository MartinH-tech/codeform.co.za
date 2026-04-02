const steps = [
  {
    title: "Clarify the signal",
    text: "We map the customer journey, strongest offer, and must-have integrations before design starts.",
  },
  {
    title: "Design the experience",
    text: "We build a visual system and section library that feels distinctive instead of template-shaped.",
  },
  {
    title: "Ship and refine",
    text: "We launch on a clean frontend stack, then iterate with analytics, feedback, and content updates.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10"
    >
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-200/75">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Small team energy, structured delivery.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
