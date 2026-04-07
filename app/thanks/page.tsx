import Link from "next/link";

const messages = {
  contact: {
    eyebrow: "Contact request sent",
    title: "Thanks, your message is on its way.",
    body: "We received your contact request and will get back to you at the details you provided.",
  },
  evolve: {
    eyebrow: "Sample request sent",
    title: "Thanks, your free sample request is in.",
    body: "We received your project details. If uploads were included and stayed under 10 MB total, they were sent with the request.",
  },
  default: {
    eyebrow: "Submission received",
    title: "Thanks, your form was submitted.",
    body: "We received your details and will follow up soon.",
  },
} as const;

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ form?: string }>;
}) {
  const params = await searchParams;
  const content =
    params.form === "contact"
      ? messages.contact
      : params.form === "evolve"
        ? messages.evolve
        : messages.default;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#163826_0%,#0b1d14_100%)] px-4 py-6 text-white md:px-6 md:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl items-center justify-center">
        <section className="w-full rounded-[2.4rem] border border-white/10 bg-white/6 px-6 py-10 shadow-[0_30px_80px_rgba(3,10,7,0.28)] backdrop-blur-sm md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7ff28]">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
            {content.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex rounded-full bg-[#d7ff28] px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              href="/"
            >
              Back to homepage
            </Link>
            <a
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              href="mailto:info@codeform.co.za"
            >
              Email us directly
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
