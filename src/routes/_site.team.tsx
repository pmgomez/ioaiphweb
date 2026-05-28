import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";

export const Route = createFileRoute("/_site/team")({
  head: () => ({
    meta: [
      { title: "Team — IOAI Philippines" },
      {
        name: "description",
        content: "Meet Team PH for the 2026 IOAI, APOAI, and NEOAI international AI competitions.",
      },
    ],
  }),
  component: Team,
});

type Member = { name: string; school: string; photo?: string };

const ioai: Member[] = Array.from({ length: 4 }, (_, i) => ({
  name: `TBA Member ${i + 1}`,
  school: "School TBA",
}));

const apoai: Member[] = Array.from({ length: 8 }, (_, i) => ({
  name: `TBA Member ${i + 1}`,
  school: "School TBA",
}));

const neoai: Member[] = Array.from({ length: 12 }, (_, i) => ({
  name: `TBA Member ${i + 1}`,
  school: "School TBA",
}));

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="bg-surface p-6">
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-primary/10">
        {m.photo ? <img src={m.photo} alt={m.name} className="h-full w-full object-cover" /> : null}
      </div>
      <div className="mt-4 text-center font-display text-base font-semibold">{m.name}</div>
      <div className="mt-1 text-center font-mono text-[11px] text-muted-foreground">{m.school}</div>
    </div>
  );
}

function CompetitionSection({
  tag,
  title,
  subtitle,
  members,
}: {
  tag: string;
  title: string;
  subtitle: string;
  members: Member[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// {tag}</div>
      <h2 className="mt-3 font-display text-3xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((m, i) => (
          <MemberCard key={`${tag}-${i}`} m={m} />
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// team.2026</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Team PH for the<span className="text-primary"> 2026 international AI competitions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The Filipino students selected to represent the country at IOAI, APOAI, and NEOAI in 2026. Rosters below are
            placeholders and will be finalized after national selection.
          </p>
        </div>
      </section>

      <CompetitionSection
        tag="ioai.2026"
        title="IOAI — International Olympiad in Artificial Intelligence"
        subtitle="Four-member national team representing the Philippines on the global IOAI stage."
        members={ioai}
      />

      <div className="border-t border-border/60" />

      <CompetitionSection
        tag="apoai.2026"
        title="APOAI — Asia-Pacific Olympiad in Artificial Intelligence"
        subtitle="Eight-member team competing across the best in the Asia-Pacific region."
        members={apoai}
      />

      <div className="border-t border-border/60" />

      <CompetitionSection
        tag="neoai.2026"
        title="NEOAI — Northern Eurasia Olympiad in Artificial Intelligence"
        subtitle="Twelve-member national delegation for NEOAI 2026."
        members={neoai}
      />
    </>
  );
}
