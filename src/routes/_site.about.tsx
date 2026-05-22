import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — IOAI Philippines" },
      { name: "description", content: "How IOAI Philippines selects, trains and fields Team PH for the world stage of artificial intelligence." },
    ],
  }),
  component: About,
});

const leadership = [
  { name: "Dr. Maria Santos", role: "National Team Director", org: "UP Diliman · DCS" },
  { name: "Prof. Liam Reyes", role: "Head of Curriculum", org: "Ateneo · Dept of IS&CS" },
  { name: "Dr. Andrea Cruz", role: "Lead Coach, ML Track", org: "DLSU · CCS" },
  { name: "Mr. Jonas Villar", role: "Operations & Outreach", org: "DOST-SEI" },
];

function About() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <div className="grid-bg grid-bg-fade absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// about.program</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            We exist so Filipino students never have to choose between<span className="text-primary"> ambition and access.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            IOAI Philippines is the country's official delegation to the International Olympiad in Artificial Intelligence — a competition where the world's top high school AI talent is identified, mentored and put on stage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// mandate</div>
            <h2 className="mt-3 font-display text-3xl font-semibold">A national mandate</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, IOAI Philippines was established as the official body to organize the country's IOAI campaign. We operate under a coalition of universities, the DOST Science Education Institute, and private-sector AI organizations.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our remit is simple: find the most capable young minds in the country, equip them with world-class training, and represent the Philippines competitively on the global stage.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-surface p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Charter Excerpt</div>
            <p className="mt-4 font-display text-2xl leading-snug">
              "Every Filipino learner with the talent to compete in AI should have a path to do so — regardless of geography, school, or income."
            </p>
            <div className="mt-6 font-mono text-xs text-muted-foreground">— IOAI PH Founding Charter, §1</div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// leadership</div>
          <h2 className="mt-3 font-display text-3xl font-semibold">Leadership & coaching</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p) => (
              <div key={p.name} className="bg-surface p-6">
                <div className="grid h-12 w-12 place-items-center rounded-sm bg-primary/10 font-mono text-sm text-primary">
                  {p.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{p.name}</div>
                <div className="mt-1 text-sm text-primary">{p.role}</div>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">{p.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// values</div>
        <h2 className="mt-3 font-display text-3xl font-semibold">What we hold ourselves to</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Merit, only.", d: "Selection is blind to school, region, and background. The strongest mathematicians and engineers earn the seats." },
            { t: "Free, always.", d: "No applicant pays a peso. Travel, training, lodging and equipment are funded end-to-end." },
            { t: "Rigorous, openly.", d: "We publish our curriculum, our problem sets, and our selection criteria. The program is auditable." },
          ].map((v) => (
            <div key={v.t} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
