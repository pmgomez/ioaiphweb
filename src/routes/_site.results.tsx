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
  href?: string;
  kind: "sheet" | "doc" | "drive" | "pending";
  window?: string;
  featured?: boolean;
};

type Competition = {
  code: string;
  name: string;
  full: string;
  scope: string;
  host: string;
  window: string;
  href?: string;
};

// 2027 International & Regional Competitions (Locked until competition windows conclude)
const competitions: Competition[] = [
  {
    code: "C-01",
    name: "IOAI",
    full: "International Olympiad in Artificial Intelligence",
    scope: "Global · final stage",
    host: "Hosted by Singapore",
    window: "Jul 4 – 10, 2027",
  },
  {
    code: "C-02",
    name: "APOAI",
    full: "Asia-Pacific Olympiad in Artificial Intelligence",
    scope: "Asia-Pacific regional",
    host: "Hosted by Russia",
    window: "Apr – Jun 2027 (TBD)",
  },
];

// 2027 National Selection Pipeline Placeholders (Reverse chronological: Selection ← Finals ← Semis ← Quarters ← Qualifiers ← Eliminations)
const selection: Resource[] = [
  {
    code: "R-01",
    title: "Team Selection & Final Delegations",
    subtitle: "Official Philippine delegations for IOAI 2027 Singapore and APOAI 2027 Russia.",
    kind: "pending",
    window: "Feb 20 – 21, 2027",
    featured: true,
  },
  {
    code: "R-02",
    title: "Stage 5: National Finals Results",
    subtitle: "Aggregate task scores from the two-day onsite finals at the Ateneo CTC Build Lab.",
    kind: "pending",
    window: "Feb 20 – 21, 2027",
    featured: true,
  },
  {
    code: "R-03",
    title: "Stage 4: Semi-Finals Qualifiers & Standings",
    subtitle:
      "Standings from the hybrid sprint; top 24 qualifiers advancing to the National Finals.",
    kind: "pending",
    window: "Jan 30, 2027",
  },
  {
    code: "R-04",
    title: "Stage 3: Quarter-Finals Results",
    subtitle: "Scores from the online proctored round; top 40 advancing to the Semi-Finals.",
    kind: "pending",
    window: "Jan 16, 2027",
  },
  {
    code: "R-05",
    title: "Stage 2: Qualifiers Results",
    subtitle: "Results from the timed proctored sprint; top 80 advancing to the Quarter-Finals.",
    kind: "pending",
    window: "Dec 12, 2026",
  },
  {
    code: "R-06",
    title: "Stage 1: Eliminations Results",
    subtitle: "Contestants advancing past the nationwide seven-day asynchronous round (Top 300).",
    kind: "pending",
    window: "Nov 16 – 22, 2026",
  },
];

const certificates = {
  code: "C-00",
  title: "Certificates (Cycle 2027)",
  subtitle:
    "Official downloadable certificates for contestants, coaches, and partner institutions will be published here following the completion of each selection stage.",
  status: "Locked · Available post-contest",
};

function Results() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // results.index · cycle_2027
          </div>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Results &amp; records
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            From the international podium back to the first qualifier — every round Team Philippines
            moves through, in one place.
          </p>
        </div>
      </section>

      {/* SECTION 1: COMPETITION RESULTS (LOCKED) */}
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
              International and regional standings will be unlocked and posted here as each
              competition concludes.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            international → regional
          </div>
        </div>

        <div className="mt-8 space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {competitions.map((c, i) => (
            <CompetitionBanner key={c.code} c={c} primary={i === 0} />
          ))}
        </div>
      </section>

      {/* SECTION 2: NATIONAL SELECTION CYCLE (PLACEHOLDERS) */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              section · 02
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              National selection cycle
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Official grade books and qualifying rosters will be published sequentially throughout
              the 2027 campaign.
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            team selection ← eliminations
          </div>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {selection.map((r) => (
            <ResourceCard key={r.code} r={r} />
          ))}
        </div>
      </section>

      {/* SECTION 3: CERTIFICATES (PLACEHOLDER) */}
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

        <div className="mt-8 block overflow-hidden rounded-sm border border-border bg-surface">
          <div className="grid items-stretch md:grid-cols-[1fr_auto]">
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {certificates.code} · credentials
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                {certificates.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                {certificates.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {["Students", "Teachers", "Coaches", "Schools"].map((t) => (
                  <span key={t} className="rounded-sm border border-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-border bg-background/40 px-8 py-6 md:border-l md:border-t-0">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Lock className="size-4" />
                {certificates.status}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CompetitionBanner({ c, primary }: { c: Competition; primary?: boolean }) {
  const isLink = !!c.href;
  const Tag = isLink ? "a" : "div";

  return (
    <Tag
      {...(isLink ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
      className={`relative grid gap-6 px-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:px-10 ${
        primary ? "bg-primary/5" : "bg-surface"
      } ${isLink ? "group transition-colors hover:bg-muted/40 cursor-pointer" : ""}`}
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
            primary ? "text-primary text-5xl md:text-6xl" : "text-4xl md:text-5xl"
          }`}
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
      <div
        className={`flex items-center gap-2 self-start rounded-sm border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:self-center transition-colors ${
          isLink ? "group-hover:text-primary group-hover:border-primary/40" : ""
        }`}
      >
        {isLink ? (
          <ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        ) : (
          <Lock className="size-3" />
        )}
        {c.window}
      </div>
    </Tag>
  );
}

function ResourceCard({ r }: { r: Resource }) {
  const KIND_LABELS: Record<Resource["kind"], string> = {
    drive: "google drive",
    doc: "google doc",
    sheet: "google sheet",
    pending: "locked",
  };
  const kindLabel = KIND_LABELS[r.kind];
  const isLink = !!r.href;
  const Tag = isLink ? "a" : "div";

  return (
    <Tag
      {...(isLink ? { href: r.href, target: "_blank", rel: "noreferrer" } : {})}
      className={`group relative flex flex-col gap-5 bg-surface p-6 transition-colors ${
        isLink ? "hover:bg-muted/50 cursor-pointer" : "opacity-85"
      } ${r.featured ? "ring-1 ring-inset ring-primary/40" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {r.code} · {kindLabel}
        </div>
        {isLink ? (
          <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        ) : (
          <Lock className="size-3.5 text-muted-foreground" />
        )}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold leading-tight">{r.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{r.subtitle}</p>
        {r.window && (
          <div className="mt-3 inline-block rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {r.window}
          </div>
        )}
      </div>

      {r.featured && (
        <div className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/5 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          ● Target Milestone
        </div>
      )}
    </Tag>
  );
}
