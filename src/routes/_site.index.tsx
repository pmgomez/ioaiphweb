import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { useTheme } from "@/components/theme-provider";
import aapLogo from "@/assets/aaplogo.png";
import aapLogoLight from "@/assets/aaplogo-light.png";
import opLogo from "@/assets/oplogo.svg";
import oesLogo from "@/assets/oeslogo.webp";
import depedLogo from "@/assets/depedlogo.svg";
import dostSeiLogo from "@/assets/dostseilogo.webp";
import ateneoBuildLogo from "@/assets/ateneobuildlogo.jpg";
import dashlabsLogo from "@/assets/dashlabs-logo.png";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "IOAI Philippines — Team PH at the International Olympiad in AI" },
      {
        name: "description",
        content:
          "The official national program selecting and training the Philippine team for the International Olympiad in Artificial Intelligence.",
      },
      { property: "og:title", content: "IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Road to Singapore 2027. Filipino K-12 students worldwide competing on the world stage of AI.",
      },
    ],
  }),
  component: Home,
});

const timeline = [
  {
    date: "SEP 12 – NOV 11, 2026",
    phase: "01 / Registration",
    title: "Open Registration",
    desc: "Nationwide public application window open to all eligible Filipino K-12 students worldwide. Free to apply.",
    status: "active",
  },
  {
    date: "NOV 16 – 22, 2026",
    phase: "02 / National",
    title: "Stage 1: Eliminations",
    desc: "Window-locked asynchronous sprint (EduSpace Round 1 + National MCQ), Open Pool → Top 300.",
    status: "upcoming",
  },
  {
    date: "DEC 12, 2026",
    phase: "03 / National",
    title: "Stage 2: Qualifiers",
    desc: "Timed proctored sprint, Top 300 → Top 80.",
    status: "upcoming",
  },
  {
    date: "JAN 16, 2027",
    phase: "04 / National",
    title: "Stage 3: Quarter-Finals",
    desc: "Online proctored, Top 80 → Top 40.",
    status: "upcoming",
  },
  {
    date: "JAN 30, 2027",
    phase: "05 / National",
    title: "Stage 4: Semi-Finals",
    desc: "Hybrid sprint, Top 40 + seeds → Top 24 Finals berths.",
    status: "upcoming",
  },
  {
    date: "FEB 20 – 21, 2027",
    phase: "06 / National",
    title: "Stage 5: National Finals",
    desc: "2 days onsite at Ateneo BUILD, up to 31 finalists. Top 24 → Top 4 Team PH.",
    status: "upcoming",
  },
  {
    date: "FEB 25 – MAR 2, 2027",
    phase: "07 / Regional (Pending)",
    title: "IAIO 2027 · Vietnam (Pending Accreditation)",
    desc: "Invitational delegation fielded from the 2026 medalist pool, subject to final international host accreditation and bilateral confirmation.",
    status: "upcoming",
  },
  {
    date: "MAR 1 – APR 15, 2027",
    phase: "08 / Delegation",
    title: "National Team Lock & Clearances",
    desc: "School exam and graduation clearance buffer, host financial aid filings, and detailed participant registration ahead of Singapore's Apr 15 team lock (strictly 1 team per country).",
    status: "upcoming",
  },
  {
    date: "APR 19 – JUN 27, 2027",
    phase: "09 / Preparation",
    title: "Pre-Departure Boot Camp",
    desc: "10-week intensive hybrid to full-time lab drills, running concurrent with Singapore visa processing (if necessary) and health screening.",
    status: "upcoming",
  },
  {
    date: "APR – JUN 2027 (TBD)",
    phase: "10 / Regional",
    title: "APOAI 2027 · Russia",
    desc: "4 non-graduating students in junior pipeline representing Team PH.",
    status: "upcoming",
  },
  {
    date: "JUL 4 – 10, 2027",
    phase: "11 / International",
    title: "IOAI 2027 · Singapore",
    desc: "Top 4 national finalists at the world championship (Jul 4 Arrival Day, Jul 5 Opening Ceremony).",
    status: "upcoming",
  },
];

const stats = [
  { value: "300", label: "STAGE 1 QUALIFIERS" },
  { value: "80", label: "QUARTER-FINALISTS" },
  { value: "40", label: "SEMI-FINALISTS" },
  { value: "24", label: "FINALS QUALIFIERS" },
  { value: "4", label: "APOAI RUSSIA" },
  { value: "4", label: "IOAI SINGAPORE" },
  { value: "82", label: "PROVINCES" },
  { value: "18", label: "REGIONS" },
  { value: "1", label: "COUNTRY" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 overflow-hidden border-b border-border/60 bg-background pt-24">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-24">
          <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            IOAI 2027 · Singapore · Jul 04–10
          </div>
          <h1 className="mt-4 max-w-5xl font-display text-6xl font-semibold leading-[1.0] tracking-tight text-foreground md:text-7xl lg:text-[5.25rem]">
            <span className="text-gradient">Filipino intelligence</span>
            <br />
            on the world stage of AI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            IOAI Philippines is the national selection and training program sending Team PH to the
            International Olympiad in Artificial Intelligence. We identify, train, and field the
            country's strongest Filipino K-12 AI talent — at zero cost to students.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://forms.gle/Xoiq3YQE3Z3HqATG7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              Register for 2027 →
            </a>
            <Link
              to="/partnerships"
              className="rounded-sm border border-border bg-surface px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40"
            >
              Partner with us
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border shadow-sm sm:grid-cols-9">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/80 px-3 py-4 text-center backdrop-blur-sm">
                <div className="font-display text-2xl font-bold tracking-tight text-primary md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SINGAPORE TIMELINE */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              // road_to_singapore.log
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The 2027 selection cycle, from national qualifiers to the world stage.
            </h2>
          </div>
          <Link
            to="/selection-2027"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-border/80 bg-surface px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-surface-elevated hover:text-primary"
          >
            <span>Full 2027 Selection Roadmap</span>
            <span>→</span>
          </Link>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-12">
            {timeline.map((t, i) => {
              const right = i % 2 === 1;
              return (
                <li key={t.phase} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div
                    className={`absolute left-0 top-1.5 grid h-6 w-6 place-items-center md:left-1/2 md:-translate-x-1/2`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full ${t.status === "active" ? "bg-primary glow-primary animate-pulse" : t.status === "complete" ? "bg-primary" : "border border-border bg-background"}`}
                    />
                  </div>
                  <div
                    className={`pl-10 md:pl-0 ${right ? "md:col-start-2" : "md:text-right md:pr-12"}`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {t.date} · {t.phase}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // system.architecture
          </div>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            An infrastructure for national AI talent.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Free, merit-based selection",
                d: "No application fees. Open to all Filipino K-12 students worldwide. Selection is purely by performance on technical assessments.",
              },
              {
                n: "02",
                t: "World-class curriculum",
                d: "Coursework mirrors the IOAI syllabus: classical ML, deep learning, NLP, computer vision, audio, and AI ethics.",
              },
              {
                n: "03",
                t: "Mentor network",
                d: "Active researchers and engineers from local and global universities, plus industry leaders from here and abroad.",
              },
            ].map((c) => (
              <div key={c.n} className="bg-surface p-8">
                <div className="font-mono text-xs text-primary">{c.n}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="relative overflow-hidden rounded-sm border border-border/80 bg-surface p-8 transition-colors hover:border-primary/40 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              // 2027_cycle.register
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Registration for the 2027 cycle is now open.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              Open to all eligible Filipino K-12 students worldwide. Free to apply. Complete the
              official registration form to enter Stage 1 screening for the national delegations to
              Singapore (IOAI) and Russia (APOAI).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://forms.gle/Xoiq3YQE3Z3HqATG7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
              >
                Register for 2027 →
              </a>
              <a
                href="https://discord.gg/pBktCwHNkJ"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border bg-background px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40"
              >
                Discord →
              </a>
              <a
                href="https://www.facebook.com/ioaiph"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border bg-background px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40"
              >
                Facebook →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL DELEGATION FIELD DISPATCH */}
      <section className="border-t border-border/60 bg-surface/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                // field_dispatch.delegations
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Dual delegations. One national pipeline.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Documenting Team Philippines across the international championship (IOAI) and the
                regional arena (APOAI).
              </p>
            </div>

            {/* Outbound Archive Vaults */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.facebook.com/media/set/?set=a.122150342643126833&type=3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
              >
                <span>Facebook Highlights (80 photos)</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://photos.app.goo.gl/JErUMrtr7Nuqn4DU7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
              >
                <span>Google Photos Vault (800+ photos)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* 6-Frame Landscape Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/gallery/ioai-stage.webp",
                program: "IOAI World Stage",
                caption: "Opening Ceremony in Astana",
                code: "AST-01",
                meta: "by the President of Kazakhstan",
              },
              {
                src: "/images/gallery/ioai-contest.webp",
                program: "IOAI World Stage",
                caption: "Competition Proper at KNUS",
                code: "AST-02",
                meta: "Can you spot the Philippine jacket?",
              },
              {
                src: "/images/gallery/ioai-podium.webp",
                program: "IOAI World Stage",
                caption: "100% Medal Haul 🏅",
                code: "AST-03",
                meta: "Inaugural 1 Silver 3 Bronze!",
              },
              {
                src: "/images/gallery/apoai-delegation.webp",
                program: "APOAI Regional",
                caption: "Ateneo BUILD Testing Center",
                code: "APO-01",
                meta: "Simultaneous Regional Competition Sprint",
              },
              {
                src: "/images/gallery/apoai-lab.webp",
                program: "APOAI Regional",
                caption: "Real-Time Sync Led by Beijing",
                code: "APO-02",
                meta: "Live Invigilation across Asia-Pacific",
              },
              {
                src: "/images/gallery/apoai-ceremony.webp",
                program: "APOAI Regional",
                caption: "Inaugural APOAI Team PH",
                code: "APO-03",
                meta: "National Delegation",
              },
            ].map((frame) => (
              <div
                key={frame.code}
                className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-sm border border-border bg-surface/60 p-4 transition-colors hover:border-primary/40"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"
                  aria-hidden="true"
                />

                <img
                  src={frame.src}
                  alt={`${frame.program} - ${frame.caption}`}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = "none";
                  }}
                  className="absolute inset-0 h-full w-full object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-xs border border-border/80 bg-background/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur-xs">
                    {frame.program}
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground/80">
                    {frame.code}
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="relative z-10 mt-auto pt-8">
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-t from-background/95 via-background/60 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="block font-display text-sm font-semibold tracking-tight text-foreground">
                    {frame.caption}
                  </span>
                  <span className="block font-mono text-[9px] tracking-wide text-muted-foreground">
                    {frame.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT SHOWCASE */}
      <section className="relative overflow-hidden border-t border-border/60 bg-surface/50 py-20 md:py-28">
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-12">
            {/* Content Column */}
            <div className="flex flex-col items-start md:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                // institutional.accountability
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                2026 Performance Report &amp; FY 2027 Policy Roadmap
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A comprehensive institutional brief detailing national talent screening, the 2026
                Kazakhstan delegation performance, curriculum frameworks, and strategic policy
                recommendations for Philippine AI education.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Ateneo BUILD", "Delegation Data", "Policy Roadmap", "White Paper"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/17A4lrbMgY4y4jXcQ0atATUSjwEQ6rH0W/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.99]"
                >
                  <span>Read 2026 Report (PDF)</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  to="/2026"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/50"
                >
                  <span>Explore 2026 Archive</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Book Mockup Visual Column */}
            <div className="relative flex items-center justify-center md:col-span-5">
              <a
                href="https://drive.google.com/file/d/17A4lrbMgY4y4jXcQ0atATUSjwEQ6rH0W/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:bg-primary/25"
                  aria-hidden="true"
                />

                <img
                  src="/images/report-2026-cover.webp"
                  alt="IOAI Philippines 2026 Performance Report & FY 2027 Policy Roadmap Cover"
                  width={320}
                  height={440}
                  className="relative z-10 w-full max-w-[220px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02] sm:max-w-[260px] dark:drop-shadow-[0_20px_35px_rgba(56,189,248,0.15)]"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <PartnersSection />
    </>
  );
}

type Partner = { name: string; src: string; lightSrc?: string; href?: string; subtitle?: string };

type Recognition = { name: string; label: string; src: string; lightSrc?: string; href?: string };

const recognizedBy: Recognition[] = [
  { name: "OP", label: "Office of the President", src: opLogo },
  { name: "OES", label: "Office of the Executive Secretary", src: oesLogo },
  { name: "DepEd", label: "Department of Education", src: depedLogo },
  { name: "DOST-SEI", label: "Science Education Institute", src: dostSeiLogo },
];

const featuredPartners: Partner[] = [
  {
    name: "Analytics and AI Association of the Philippines",
    src: aapLogo,
    lightSrc: aapLogoLight,
    href: "https://www.aap.ph/",
  },
  {
    name: "Dashlabs.ai",
    src: dashlabsLogo,
    href: "https://dashlabs.ai/",
  },
];

function LogoTile({
  p,
  size = "md",
  widthClass,
}: {
  p: Partner;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  widthClass?: string;
}) {
  const heights = { sm: "h-8", md: "h-24", lg: "h-16", xl: "h-48", "2xl": "h-72" };
  const Tag: any = p.href ? "a" : "div";
  const props = p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {};
  const { resolvedTheme } = useTheme();
  const src = resolvedTheme === "light" && p.lightSrc ? p.lightSrc : p.src;
  return (
    <Tag
      {...props}
      title={p.name}
      className="group relative flex shrink-0 items-center justify-center px-8 py-6 transition-all"
    >
      <img
        src={src}
        alt={p.name}
        loading="lazy"
        className={`${heights[size]} ${widthClass ?? "w-auto"} object-contain transition-transform duration-500 group-hover:scale-110`}
      />
    </Tag>
  );
}

function TierLabel({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${accent}`} />
      {children}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function PartnersSection() {
  return (
    <section className="relative border-y border-border/60 bg-surface/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              // coalition.manifest
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Backed by a national coalition.
            </h2>
          </div>
          <Link
            to="/partnerships"
            className="hidden shrink-0 rounded-sm border border-border bg-surface px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-primary/40 hover:text-primary md:inline-block"
          >
            Become a partner →
          </Link>
        </div>

        {/* ROW 0: HOST + RECOGNITION */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div>
            <TierLabel accent="bg-primary shadow-[0_0_10px_1px] shadow-primary/60">
              Hosted by
            </TierLabel>
            <div className="mt-6 flex h-56 items-center justify-center rounded-sm border border-primary/30 bg-transparent px-6">
              <img
                src={ateneoBuildLogo}
                alt="Ateneo BUILD logo"
                loading="lazy"
                className="h-[85%] w-auto object-contain"
              />
            </div>
          </div>
          <div>
            <TierLabel accent="bg-primary shadow-[0_0_10px_1px] shadow-primary/60">
              Recognized by
            </TierLabel>
            <div className="mt-6 grid h-auto min-h-56 sm:h-56 grid-cols-2 sm:grid-cols-4 items-center gap-3 rounded-sm border border-primary/30 bg-transparent p-4">
              {recognizedBy.map((o) => (
                <div
                  key={o.name}
                  className="flex flex-col items-center justify-center gap-2 text-center"
                >
                  {o.src ? (
                    <img
                      src={o.src}
                      alt={`${o.name} logo`}
                      loading="lazy"
                      className="h-14 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-primary/40 bg-primary/5 font-mono text-xs font-semibold text-primary">
                      {o.name}
                    </div>
                  )}
                  <div>
                    <div className="font-display text-xs sm:text-sm font-semibold tracking-tight">
                      {o.name}
                    </div>
                    <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-muted-foreground line-clamp-2">
                      {o.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: FEATURED (AAP + Dashlabs) */}
        <div className="mt-16">
          <TierLabel accent="bg-primary shadow-[0_0_10px_1px] shadow-primary/60">
            Featured Community Partners
          </TierLabel>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featuredPartners.map((p) => (
              <div key={p.name} className="flex items-center justify-center bg-transparent py-10">
                <LogoTile p={p} size="lg" widthClass="w-56" />
              </div>
            ))}
          </div>
        </div>

        {/* 2027 SPONSORSHIP CALLOUT CARD */}
        <div className="mt-14 rounded-sm border border-border/80 bg-surface/40 p-8 transition-colors hover:border-primary/40 md:flex md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              // corporate.sponsorship · cycle_2027
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Power Team Philippines on the world stage.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Partner with us to build the country’s premier AI talent pipeline. Accessible to over
              27 million K-12 learners across all 82 provinces, 18 regions, and Filipino students
              worldwide, corporate and compute partnerships power the entire 2027 national selection
              cycle—from open screening to intensive training boot camps, and dual international
              delegations—at zero cost to students.
            </p>
          </div>
          <div className="mt-6 shrink-0 md:ml-8 md:mt-0">
            <Link
              to="/partnerships"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
            >
              View 2027 Prospectus →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
