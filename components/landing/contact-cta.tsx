export function ContactCta() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 lg:px-10"
    >
      <div className="grid gap-8 rounded-[2.5rem] border border-emerald-200/20 bg-gradient-to-br from-emerald-300/15 via-white/5 to-transparent p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Ready for a homepage that sells the right story and supports the
            systems behind it?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Let&apos;s turn the brand into a fast, maintainable product surface
            your team can keep building on.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            href="mailto:info@codeform.co.za"
          >
            info@codeform.co.za
          </a>
          <a
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            href="#top"
          >
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
