import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { Lock, User } from "lucide-react";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/_site/team")({
  head: () => ({
    meta: [
      { title: "Team — IOAI Philippines" },
      {
        name: "description",
        content:
          "Meet the official Philippine delegations for the 2027 IOAI (Singapore) and APOAI (Russia) international AI competitions.",
      },
      { property: "og:title", content: "Team — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Meet the official Philippine delegations for the 2027 IOAI (Singapore) and APOAI (Russia) international AI competitions.",
      },
    ],
    links: [canonical("/team")],
  }),
  component: Team,
});

type Slot = {
  seat: string;
  role: string;
  criterion: string;
  status: string;
};

const ioaiSlots: Slot[] = [
  {
    seat: "Delegate 01",
    role: "Primary Delegation",
    criterion: "National Finals · Rank 1",
    status: "Determined Feb 21, 2027",
  },
  {
    seat: "Delegate 02",
    role: "Primary Delegation",
    criterion: "National Finals · Rank 2",
    status: "Determined Feb 21, 2027",
  },
  {
    seat: "Delegate 03",
    role: "Primary Delegation",
    criterion: "National Finals · Rank 3",
    status: "Determined Feb 21, 2027",
  },
  {
    seat: "Delegate 04",
    role: "Primary Delegation",
    criterion: "National Finals · Rank 4",
    status: "Determined Feb 21, 2027",
  },
];

const apoaiSlots: Slot[] = [
  {
    seat: "Junior Delegate 01",
    role: "Junior Pipeline Delegation",
    criterion: "Top Non-Graduating Finalist (K–11)",
    status: "Determined Feb 21, 2027",
  },
  {
    seat: "Junior Delegate 02",
    role: "Junior Pipeline Delegation",
    criterion: "Top Non-Graduating Finalist (K–11)",
    status: "Determined Feb 21, 2027",
  },
  {
    seat: "Junior Delegate 03",
    role: "Junior Pipeline Delegation",
    criterion: "Top Non-Graduating Finalist (K–11)",
    status: "Determined Feb 21, 2027",
  },
  {
    seat: "Junior Delegate 04",
    role: "Junior Pipeline Delegation",
    criterion: "Top Non-Graduating Finalist (K–11)",
    status: "Determined Feb 21, 2027",
  },
];

function PlaceholderCard({ slot }: { slot: Slot }) {
  return (
    <div className="flex flex-col justify-between bg-surface p-6 text-center">
      <div>
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-border/80 bg-background/50 text-muted-foreground/60">
          <User className="h-8 w-8 stroke-[1.25]" />
        </div>
        <div className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
          {slot.seat}
        </div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          {slot.role}
        </div>
        <div className="mt-2 text-xs text-muted-foreground">{slot.criterion}</div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-1.5 border-t border-border/60 pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        <Lock className="h-3 w-3 text-muted-foreground/70" />
        {slot.status}
      </div>
    </div>
  );
}

function CompetitionSection({
  tag,
  title,
  subtitle,
  slots,
}: {
  tag: string;
  title: string;
  subtitle: string;
  slots: Slot[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// {tag}</div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>

      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {slots.map((s, i) => (
          <PlaceholderCard key={`${tag}-${i}`} slot={s} />
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // team.2027
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Team PH for the <span className="text-primary">2027 international campaigns.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Official delegations representing the Philippines at IOAI 2027 (Singapore) and APOAI
            2027 (Russia) will be determined during the National Finals at the Ateneo CTC Build Lab
            on February 20–21, 2027.
          </p>
        </div>
      </section>

      {/* IOAI SINGAPORE */}
      <CompetitionSection
        tag="ioai.2027"
        title="IOAI — International Olympiad in Artificial Intelligence"
        subtitle="Flagship 4-student national delegation competing onsite in Singapore (July 4–10, 2027). Open to all qualified finalists, including graduating Grade 12 seniors."
        slots={ioaiSlots}
      />

      <div className="border-t border-border/60" />

      {/* APOAI RUSSIA */}
      <CompetitionSection
        tag="apoai.2027"
        title="APOAI — Asia-Pacific Olympiad in Artificial Intelligence"
        subtitle="4-student junior development delegation competing in Russia (April 26–30, 2027), hosted by Central University / AI Alliance. Reserved for the top non-graduating finalists (Kindergarten through Grade 11)."
        slots={apoaiSlots}
      />
    </>
  );
}
