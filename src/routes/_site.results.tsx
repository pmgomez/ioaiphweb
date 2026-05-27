import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { ArrowUpRight, Lock } from "lucide-react";

export const Route = createFileRoute("/_site/results")({
  head: () => ({
    meta: [
      { title: "Results — IOAI Philippines" },
      {
        name: "description",
        content:
          "Official results, qualifiers, and certificates from the IOAI Philippines national selection cycle, plus regional and international standings.",
      },
    ],
  }),
  component: Results,
});

type Resource = {
  code: string;
  title: string;
  subtitle: string;
  href: string;
  kind: "sheet" | "doc" | "drive";
  featured?: boolean;
};

// Reverse chronological: Team Selection ← Finals ← Semis ← Round 1
const selection: Resource[] = [
  {
    code: "R-01",
    title: "Team Selection Grade Book",
    subtitle:
      "Composite grade book used to assemble the official Philippine delegation.",
    href: "https://docs.google.com/spreadsheets/d/1xsZy_sfp_xIhAP_qdBCWHEZ44De5QChR4Xe_LUQSX08/edit?gid=0#gid=0",
    kind: "sheet",
    featured: true,
  },
  {
    code: "R-02",
    title: "National Finals Results",
    subtitle: "Final scores from the IOAI PH national finals.",
    href: "https://bit.ly/ioaiph-finals-results",
    kind: "sheet",
    featured: true,
  },
  {
    code: "R-03",
    title: "Semi-Finals Results",
    subtitle: "Scores and standings from the semi-final round.",
    href: "https://bit.ly/ioaiph-semis-results",
    kind: "sheet",
  },
  {
    code: "R-04",
    title: "Semi-Finals Qualifiers",
    subtitle: "Roster of contestants invited to the national semi-finals.",
    href: "https://bit.ly/ioaiph-semis",
    kind: "sheet",
  },
  {
    code: "R-05",
    title: "Successful Round 1 Participants",
    subtitle: "Contestants who advanced past the opening online round.",
    href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGS-4r-EuryVT0-aoRbNhkdsmWN7T_JlIAmZeJ3-9UVchnT0hX5oSnWvKl2Qv20oU_sQcGOL1QN9gD/pubhtml",
    kind: "sheet",
  },
];

const certificates: Resource = {
  code: "C-00",
  title: "Certificates",
  subtitle:
    "Downloadable certificates for students, teachers, coaches, and schools.",
  href: "https://drive.google.com/drive/u/0/folders/1EXT7xkEyxnlSgNESNvF0JIjeT753SSuv",
  kind: "drive",
};

// Reverse chronological: International → Regional → Sub-regional
const competitions = [
  {
    code: "C-01",
    name: "IOAI",
    full: "International Olympiad in Artificial Intelligence",
    scope: "Global · final stage",
    host: "Hosted by Kazakhstan",
    window: "Results pending",
  },
  {
    code: "C-02",
    name: "APOAI",
    full: "Asia-Pacific Olympiad in Artificial Intelligence",
    scope: "Asia-Pacific regional",
    host: "Hosted by China",
    window: "Results pending",
  },
  {
    code: "C-03",
    name: "NEOAI",
    full: "Northern Eurasia Olympiad in Artificial Intelligence",
    scope: "Northern Eurasia sub-regional",
    host: "Hosted by Russia",
    window: "Results pending",
  },
];

function Results() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // results.index · cycle_2026
          </div>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Results &amp; records
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            From the international podium back to the first qualifier — every
            round Team Philippines moves through, in one place.
          </p>
        </div>
      </section>

      {/* COMPETITION BANNERS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              section · 01
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Competition results
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              International, regional, and sub-regional standings will land
              here as each competition concludes.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            international → sub-regional
          </div>
        </div>

        <div className="mt-8 space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {competitions.map((c, i) => (
            <CompetitionBanner key={c.code} c={c} primary={i === 0} />
          ))}
        </div>
      </section>

      {/* NATIONAL SELECTION CYCLE */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              section · 02
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              National selection cycle
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            team selection → round 1
          </div>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {selection.map((r) => (
            <ResourceCard key={r.code} r={r} />
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              section · 03
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Certificates
            </h2>
          </div>
        </div>

        <a
          href={certificates.href}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 block overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-primary/50"
        >
          <div className="grid items-stretch md:grid-cols-[1fr_auto]">
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {certificates.code} · google drive
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                {certificates.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                {certificates.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {["Students", "Teachers", "Coaches", "Schools"].map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-border bg-background/40 px-8 py-6 md:border-l md:border-t-0">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Open folder
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}

function CompetitionBanner({
  c,
  primary,
}: {
  c: (typeof competitions)[number];
  primary?: boolean;
}) {
  return (
    <div
      className={`relative grid gap-6 px-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:px-10 ${
        primary ? "bg-primary/5" : "bg-surface"
      }`}
    >
      {primary && (
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-primary" />
      )}
      <div className="flex items-baseline gap-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {c.code}
        </div>
        <div
          className={`font-display font-semibold tracking-tight ${
            primary ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"
          }`}
          style={primary ? { color: "var(--color-primary)" } : undefined}
        >
          {c.name}
        </div>
      </div>
      <div className="md:px-6">
        <div className="font-display text-lg md:text-xl">{c.full}</div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {c.scope} · {c.host}
        </div>
      </div>
      <div className="flex items-center gap-2 self-start rounded-sm border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:self-center">
        <Lock className="size-3" />
        {c.window}
      </div>
    </div>
  );
}

function ResourceCard({ r }: { r: Resource }) {
  const kindLabel =
    r.kind === "drive"
      ? "google drive"
      : r.kind === "doc"
        ? "google doc"
        : "google sheet";
  return (
    <a
      href={r.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col gap-5 bg-surface p-6 transition-colors hover:bg-surface/70 ${
        r.featured ? "ring-1 ring-inset ring-primary/40" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          {r.code} · {kindLabel}
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold leading-tight">
          {r.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{r.subtitle}</p>
      </div>
      {r.featured && (
        <div className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          ● Featured
        </div>
      )}
    </a>
  );
}
