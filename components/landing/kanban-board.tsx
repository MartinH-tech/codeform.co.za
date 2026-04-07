"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

const columns = [
  {
    step: "1",
    title: "About us",
    body: [
      "At codeform, we believe the future belongs to businesses that build, adapt, and evolve.",
      "We design and develop modern websites and web applications that do more than just look good. They perform, scale, and drive real results. In a digital world where first impressions happen online, your platform is your most powerful asset.",
      "Our approach is simple: clarity, performance, and purpose. Every product we create is built with intention, from clean user experiences to robust, scalable systems that grow with your business.",
      "We do not just build websites. We build digital foundations for what is next.",
    ],
  },
  {
    step: "2",
    title: "What we offer",
    body: "We design landing pages, workflows, client portals, and operational surfaces that help teams move with confidence.",
  },
  {
    step: "3",
    title: "Contact us",
    body: "Start the conversation, share the challenge, and let us shape the right digital experience around your goals.",
  },
];

const offers = [
  {
    title: "Apps",
    body: "Custom internal and client-facing apps built to streamline workflows and make operations easier to manage.",
  },
  {
    title: "Websites",
    body: "Fast, modern websites designed to present the brand clearly and convert attention into action.",
  },
  {
    title: "Social Media management",
    body: "Content planning, publishing support, and digital consistency across the channels your audience actually sees.",
  },
  {
    title: "Hosting",
    body: "Reliable hosting setup and deployment support so your digital presence stays stable and easy to maintain.",
  },
  {
    title: "PowerBI",
    body: "Dashboards and reporting layers that turn scattered business data into useful decision-making visibility.",
  },
];

const teamMembers = [
  {
    image: "/Gideon.png",
    name: "Gideon Harmse",
    role: "Software Engineer",
  },
  {
    image: "/Martin.png",
    name: "Martin Harmse",
    role: "Designer and Scrummaster",
  },
  {
    image: "/Jason.png",
    name: "Jason van den Heever",
    role: "Social Media Manager",
  },
];

function OfferBlocks({ expanded }: { expanded: boolean }) {
  const [activeOffer, setActiveOffer] = useState("Apps");

  return (
    <div className={`flex h-full flex-col ${expanded ? "mt-1" : "mt-6"}`}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {offers.map((offer) => {
          const active = offer.title === activeOffer;

          return (
            <button
              key={offer.title}
              className={`min-h-[3.5rem] rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all sm:min-h-[4.25rem] ${
                active
                  ? "bg-[#d7ff28] text-slate-950 shadow-[0_12px_24px_rgba(146,184,18,0.22)]"
                  : "bg-[#c9f320] text-slate-950/85 hover:bg-[#d7ff28]"
              }`}
              onClick={(event) => {
                event.stopPropagation();
                setActiveOffer(offer.title);
              }}
              type="button"
            >
              {offer.title}
            </button>
          );
        })}
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? "mt-4 max-h-52 opacity-100 sm:mt-5 sm:max-h-64" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[1.5rem] bg-[#d7ff28] px-4 py-4 text-slate-950 shadow-[0_18px_30px_rgba(146,184,18,0.22)] sm:px-5 sm:py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            {activeOffer}
          </p>
          <p className="mt-2 text-sm leading-6 sm:mt-3 sm:text-base sm:leading-7">
            {offers.find((offer) => offer.title === activeOffer)?.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const nextUrl =
    typeof window === "undefined"
      ? ""
      : `${window.location.origin}/thanks?form=contact`;

  return (
    <form
      action="https://formsubmit.co/info@codeform.co.za"
      className="mt-6 space-y-4"
      method="POST"
      onClick={(event) => event.stopPropagation()}
    >
      <input name="_next" type="hidden" value={nextUrl} />
      <input name="_subject" type="hidden" value="Codeform contact form submission" />
      <input name="_template" type="hidden" value="table" />
      <input name="_url" type="hidden" value="https://codeform.co.za/#contact" />
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="_honey"
        tabIndex={-1}
        type="text"
      />
      <div className="grid gap-4">
        <input
          className="rounded-2xl border border-[#153826]/10 bg-white px-4 py-3 text-sm text-[#153826] outline-none placeholder:text-[#153826]/45 focus:border-[#153826]/25"
          name="name"
          placeholder="Your name"
          required
          type="text"
        />
        <input
          className="rounded-2xl border border-[#153826]/10 bg-white px-4 py-3 text-sm text-[#153826] outline-none placeholder:text-[#153826]/45 focus:border-[#153826]/25"
          name="email"
          placeholder="Email address"
          required
          type="email"
        />
        <input
          className="rounded-2xl border border-[#153826]/10 bg-white px-4 py-3 text-sm text-[#153826] outline-none placeholder:text-[#153826]/45 focus:border-[#153826]/25"
          name="cellphone"
          placeholder="Cellphone number (optional)"
          type="tel"
        />
        <textarea
          className="min-h-[8rem] rounded-2xl border border-[#153826]/10 bg-white px-4 py-3 text-sm text-[#153826] outline-none placeholder:text-[#153826]/45 focus:border-[#153826]/25"
          name="message"
          placeholder="Tell us what you need"
          required
        />
      </div>
      <button
        className="inline-flex rounded-full bg-[#153826] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        type="submit"
      >
        Submit online
      </button>
    </form>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21a8.94 8.94 0 0 1-4.58-1.25L3 21l1.3-4.24A9 9 0 1 1 12 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.7 9.2c.17-.38.34-.4.5-.4h.44c.14 0 .35.05.54.45.18.4.6 1.45.65 1.55.05.1.08.23 0 .38-.08.15-.12.24-.24.37-.12.13-.26.29-.37.39-.12.1-.24.21-.1.42.13.21.58.95 1.25 1.55.86.77 1.59 1 1.81 1.12.22.12.35.1.48-.06.13-.16.56-.65.7-.87.15-.22.3-.18.5-.11.21.07 1.3.61 1.52.72.22.11.37.17.42.27.06.1.06.58-.13 1.14-.18.56-1.08 1.08-1.5 1.14-.4.06-.9.09-1.46-.1-.34-.11-.78-.26-1.34-.5-2.36-1.02-3.9-3.4-4.02-3.57-.11-.16-.96-1.28-.96-2.44 0-1.15.61-1.71.82-1.95Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TeamSection({
  teamSectionRef,
}: {
  teamSectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={teamSectionRef}
      className="mt-8 rounded-[2.4rem] bg-[linear-gradient(180deg,#163826_0%,#0b1d14_100%)] px-6 py-8 text-white shadow-[0_30px_80px_rgba(3,10,7,0.2)] md:px-8 md:py-10"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7ff28]">
          Meet the team
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
          The people shaping codeform behind the scenes
        </h2>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-white/10">
              <Image
                alt={member.name}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                src={member.image}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#d7ff28]">
                {member.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Column({
  active,
  body,
  onMeetTeam,
  onSelect,
  step,
  title,
}: {
  active: boolean;
  body: string | string[];
  onMeetTeam: () => void;
  onSelect: () => void;
  step: string;
  title: string;
}) {
  const isAbout = title === "About us";
  const isOffer = title === "What we offer";
  const isContact = title === "Contact us";
  const collapsedTeaser = isContact ? "Reach out" : "Read more";

  return (
    <section
      className={`group relative flex min-h-[22rem] w-full max-w-full overflow-hidden rounded-[2.25rem] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[32rem] lg:min-h-[36rem] ${
        active
          ? "flex-col bg-[#e7ecef] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_22px_40px_rgba(21,56,38,0.08)] sm:px-7 sm:py-7"
          : "items-start bg-[#eef1f4] px-4 py-6 hover:bg-[#e9eef0] lg:flex-col lg:justify-start lg:px-3"
      }`}
      onClick={active ? undefined : onSelect}
    >
      {active ? (
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7ff28] text-xl font-semibold text-slate-950">
            {step}
          </div>
          <h3 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[#153826] sm:text-3xl">
            {title}
          </h3>
        </div>
      ) : (
        <div className="flex h-full min-h-[26rem] w-full flex-col items-center justify-between py-2 text-left sm:min-h-[32rem] lg:min-h-[36rem]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7ff28] text-xl font-semibold text-slate-950">
            {step}
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-6 sm:py-8">
            <div className="h-16 w-2 rounded-full bg-[#d7ff28] shadow-[0_10px_22px_rgba(146,184,18,0.22)]" />
            <h3 className="text-center text-[1.35rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[#153826] sm:text-[1.7rem]">
              {title.split(" ").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h3>
          </div>
          <div className="w-full rounded-[1.5rem] bg-[linear-gradient(180deg,#d7ff28_0%,#b8f10d_100%)] px-3 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-[0_18px_30px_rgba(146,184,18,0.18)]">
            {isAbout ? "Evolve or fade" : collapsedTeaser}
          </div>
        </div>
      )}
      <div className={`flex min-w-0 flex-1 flex-col justify-between ${active ? "mt-6 sm:mt-10" : "hidden"}`}>
        {isOffer ? null : (
          <button
            className={`transition-all duration-500 ${
              isAbout || isContact
                ? active
                  ? "mt-4 h-2 w-[8rem] rounded-full bg-[#d7ff28] shadow-[0_10px_22px_rgba(146,184,18,0.28)] sm:mt-6 sm:w-[10rem]"
                  : "mx-auto w-[82%] rounded-[1.75rem] bg-[linear-gradient(180deg,#d7ff28_0%,#b8f10d_100%)] px-3 py-4 text-slate-950 shadow-[0_18px_30px_rgba(146,184,18,0.22)]"
                : active
                  ? "mx-auto w-[82%] rotate-0 bg-[linear-gradient(180deg,#d7ff28_0%,#b8f10d_100%)] px-4 py-5 text-slate-950 shadow-[0_18px_30px_rgba(146,184,18,0.22)] sm:px-6 sm:py-7"
                  : "mx-auto w-[82%] rounded-[1.75rem] bg-[linear-gradient(180deg,#d7ff28_0%,#b8f10d_100%)] px-3 py-4 text-slate-950 shadow-[0_18px_30px_rgba(146,184,18,0.22)]"
            }`}
            onClick={(event) => {
              event.stopPropagation();
              onSelect();
            }}
            type="button"
          >
            {(isAbout || isContact) && active ? null : (
              <>
                <div className={`mx-auto rounded-full border border-slate-600/45 ${active ? "h-8 w-8" : "h-6 w-6"}`} />
              <p
                  className={`mt-4 font-medium transition-all duration-500 ${
                    active
                      ? "text-center text-base leading-6 opacity-100"
                      : "text-center text-xs leading-5 opacity-90"
                  }`}
                >
                  {isContact
                    ? "Reach out"
                    : "Read more"}
                </p>
              </>
            )}
          </button>
        )}

        <div
          className={`overflow-hidden transition-all duration-500 ${
            active || isOffer
              ? "max-h-[90rem] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {isOffer ? (
            <OfferBlocks expanded={active} />
          ) : isAbout ? (
            <div className="mt-4 max-w-full sm:mt-6">
              <div className="space-y-3 break-words text-sm leading-6 text-[#153826]/78 sm:space-y-4 sm:text-base sm:leading-7">
                {Array.isArray(body)
                  ? body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  : <p>{body}</p>}
              </div>
              <button
                className="mt-5 inline-flex rounded-full bg-[#153826] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:mt-6 sm:px-6"
                onClick={(event) => {
                  event.stopPropagation();
                  onMeetTeam();
                }}
                type="button"
              >
                Meet the team
              </button>
            </div>
          ) : isContact ? (
            <div className="mt-6 max-w-full space-y-4 break-words text-sm leading-6 text-[#153826]/78 sm:mt-8 sm:max-w-[20rem] sm:text-base sm:leading-7">
              <p className="text-sm font-medium leading-6 text-[#153826] sm:text-base sm:leading-7">
                However you prefer - call, mail, WhatsApp. We&apos;re easy to reach, hard to ignore.
              </p>
              <p>
                <span className="font-semibold text-[#153826]">Email:</span>{" "}
                <a
                  className="font-medium text-[#153826] underline decoration-[#153826]/25 underline-offset-4"
                  href="mailto:info@codeform.co.za?subject=We%20want%20to%20evolve!"
                >
                  info@codeform.co.za
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#153826]">
                  Call or WhatsApp:
                </span>{" "}
                <a
                  className="font-medium text-[#153826] underline decoration-[#153826]/25 underline-offset-4"
                  href="tel:0712802694"
                >
                  0712802694
                </a>{" "}
                or{" "}
                <a
                  className="font-medium text-[#153826] underline decoration-[#153826]/25 underline-offset-4"
                  href="tel:0646866099"
                >
                  0646866099
                </a>
              </p>
              <a
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#0b1d14] transition-transform hover:-translate-y-0.5"
                href="https://wa.me/27712802694"
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon />
                Open WhatsApp
              </a>
              <p>If you would rather not call or mail, submit your details below.</p>
              <ContactForm />
            </div>
          ) : (
            <p className="mt-6 max-w-full break-words text-sm leading-6 text-[#153826]/78 sm:mt-8 sm:max-w-[18rem] sm:text-base sm:leading-7">
              {body}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function KanbanBoard() {
  const [evolved, setEvolved] = useState(false);
  const [activePanel, setActivePanel] = useState("1");
  const [showTeam, setShowTeam] = useState(false);
  const teamSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!showTeam) {
      return;
    }

    teamSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [showTeam]);

  const handleMeetTeam = () => {
    setShowTeam(true);
  };

  return (
    <div className="space-y-8">
      <div
        className={`grid min-h-[calc(100vh-3rem)] gap-6 transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-8 ${
          evolved
            ? "lg:grid-cols-[320px_minmax(0,1fr)]"
            : "grid-cols-1"
        }`}
      >
        <aside
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            evolved
              ? "min-h-[8.5rem] py-5 lg:min-h-[calc(100vh-3rem)] lg:max-w-[320px] lg:py-10"
              : "min-h-[12.5rem] py-6 md:min-h-[calc(100vh-3rem)] md:py-14"
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-[2.4rem] bg-[linear-gradient(180deg,#163826_0%,#0b1d14_100%)] px-6 text-white shadow-[0_30px_80px_rgba(3,10,7,0.32)] md:px-8 ${
              evolved
                ? "flex h-full items-center justify-center lg:flex"
                : "mx-auto flex h-full max-w-2xl flex-col items-center justify-start pt-1 text-center md:justify-center"
            }`}
          >
            {evolved ? (
              <div className="flex h-full w-full items-center justify-center lg:flex">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#d7ff28] shadow-[0_18px_40px_rgba(183,241,13,0.18)] lg:h-40 lg:w-40">
                  <Image
                    alt="Codeform logo"
                    className="h-12 w-12 rounded-[1rem] object-contain opacity-95 shadow-[0_0_18px_rgba(255,255,255,0.18)] lg:h-24 lg:w-24 lg:rounded-[1.5rem]"
                    height={96}
                    priority
                    src="/codeform_logo_enhanced.png"
                    width={96}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d7ff28] md:h-[4.5rem] md:w-[4.5rem]">
                <Image
                  alt="Codeform logo"
                  className="h-8 w-8 rounded-[0.75rem] object-contain opacity-95 shadow-[0_0_14px_rgba(255,255,255,0.16)] md:h-10 md:w-10 md:rounded-[1rem]"
                  height={40}
                  src="/codeform_logo_enhanced.png"
                  width={40}
                  />
                </div>
                <div className="mt-4 md:mt-12">
                  <h1 className="text-[2.2rem] font-semibold lowercase leading-[0.9] tracking-[-0.06em] text-[#d7ff28] md:text-8xl">
                    codeform
                  </h1>
                  <div className="mt-4 hidden lg:block md:mt-8">
                    <button
                      className="inline-flex rounded-full bg-[#d7ff28] px-5 py-2.5 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5 md:px-8 md:py-4 md:text-xl"
                      onClick={() => setEvolved(true)}
                      type="button"
                    >
                      Click to evolve
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>

        <div
          className={`relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            evolved
              ? "translate-x-0 opacity-100"
              : "translate-x-0 opacity-100 lg:pointer-events-none lg:translate-x-12 lg:opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-end gap-2 px-1 text-sm font-semibold text-black md:hidden">
            <span>Swipe right</span>
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </div>
          <div
            className="mobile-card-strip flex w-full min-w-0 gap-4 overflow-x-auto overflow-y-visible pb-3 snap-x snap-mandatory scroll-smooth md:grid md:gap-6 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2 lg:flex lg:items-stretch"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {columns.map((column) => (
              <div
                key={column.title}
                className={`shrink-0 snap-start overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activePanel === column.step
                    ? "w-[86vw] min-w-[86vw] max-w-[86vw]"
                    : "w-[58vw] min-w-[58vw] max-w-[58vw]"
                } md:min-w-0 md:max-w-none md:shrink md:w-auto lg:min-w-0 ${
                  activePanel === column.step
                    ? "lg:flex-[4] lg:basis-[52%]"
                    : "lg:flex-[0.55] lg:basis-[12%]"
                }`}
              >
                <Column
                  active={activePanel === column.step}
                  body={column.body}
                  onMeetTeam={handleMeetTeam}
                  onSelect={() => setActivePanel(column.step)}
                  step={column.step}
                  title={column.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showTeam ? <TeamSection teamSectionRef={teamSectionRef} /> : null}
    </div>
  );
}
