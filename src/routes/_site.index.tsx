import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";


export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "IOAI Philippines — Team PH at the International Olympiad in AI" },
      { name: "description", content: "The official national program selecting and training the Philippine team for the International Olympiad in Artificial Intelligence." },
      { property: "og:title", content: "IOAI Philippines" },
      { property: "og:description", content: "Road to Astana 2025. Filipino students competing at the world stage of AI." },
    ],
  }),
  component: Home,
});

const timeline = [
  { date: "MAR 2025", phase: "01 / Open Call", title: "National Registration", desc: "Open call to all senior high and early-undergraduate students across the Philippines. Free to apply.", status: "complete" },
  { date: "APR 2025", phase: "02 / Qualifier", title: "Online Qualifying Round", desc: "Four-hour assessment on linear algebra, probability, classical ML and applied NLP/CV.", status: "complete" },
  { date: "MAY 2025", phase: "03 / Bootcamp", title: "National Training Camp", desc: "Intensive two-week residency with mentors from UP Diliman, Ateneo, DLSU and industry researchers.", status: "complete" },
  { date: "JUN 2025", phase: "04 / Selection", title: "Final Team Selection", desc: "Top four contestants chosen as Team Philippines. Two reserves named.", status: "active" },
  { date: "JUL 2025", phase: "05 / Pre-Departure", title: "Final Sprint in Manila", desc: "Custom curriculum on agents, RL and competition strategy with international coaches.", status: "upcoming" },
  { date: "AUG 2025", phase: "06 / Astana", title: "IOAI 2025 · Astana, Kazakhstan", desc: "Eight days of competition at the world stage. 60+ national teams compete in scientific and practical rounds.", status: "upcoming" },
];

const stats = [
  { k: "2,140", l: "Applicants" },
  { k: "48", l: "Finalists" },
  { k: "4", l: "Team Members" },
  { k: "17", l: "Provinces" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[360px] w-[520px] rounded-full bg-signal/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-24">
          <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            IOAI 2025 · Astana, Kazakhstan · Aug 02–09
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-gradient">Filipino intelligence</span><br />on the world stage of AI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            IOAI Philippines is the national selection and training program sending Team PH to the International Olympiad in Artificial Intelligence. We identify, train and field the country's strongest young AI talent — at zero cost to students.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-sm bg-primary px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90">
              Meet the Program →
            </Link>
            <Link to="/partnerships" className="rounded-sm border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-wider transition-all hover:border-primary/40">
              Partner with us
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="bg-surface p-6">
                <div className="font-display text-3xl font-semibold text-primary md:text-4xl">{s.k}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASTANA TIMELINE */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// road_to_astana.log</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The 2025 cycle, in six phases.
            </h2>
          </div>
          <div className="hidden font-mono text-xs text-muted-foreground md:block">
            Last updated · 2025.06.14
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-12">
            {timeline.map((t, i) => {
              const right = i % 2 === 1;
              return (
                <li key={t.phase} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div className={`absolute left-0 top-1.5 grid h-6 w-6 place-items-center md:left-1/2 md:-translate-x-1/2`}>
                    <div className={`h-3 w-3 rounded-full ${t.status === "active" ? "bg-primary glow-primary animate-pulse" : t.status === "complete" ? "bg-primary" : "border border-border bg-background"}`} />
                  </div>
                  <div className={`pl-10 md:pl-0 ${right ? "md:col-start-2" : "md:text-right md:pr-12"}`}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.date} · {t.phase}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    <div className={`mt-3 inline-flex items-center gap-2 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${
                      t.status === "active" ? "border-primary/40 bg-primary/10 text-primary"
                      : t.status === "complete" ? "border-border bg-surface text-muted-foreground"
                      : "border-dashed border-border text-muted-foreground"
                    }`}>
                      {t.status === "active" ? "● in progress" : t.status === "complete" ? "✓ complete" : "○ upcoming"}
                    </div>
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
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// system.architecture</div>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            An infrastructure for national AI talent.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              { n: "01", t: "Free, merit-based selection", d: "No application fees. Every student in the Philippines can compete. Selection is purely by performance on technical assessments." },
              { n: "02", t: "World-class curriculum", d: "Coursework mirrors the IOAI syllabus: classical ML, deep learning, NLP, computer vision, RL and applied agentic systems." },
              { n: "03", t: "Mentor network", d: "Active researchers and engineers from UP, Ateneo, DLSU, plus industry leads from Google, Meta and local AI labs." },
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
        <div className="relative overflow-hidden rounded-sm border border-primary/30 bg-gradient-to-br from-surface to-background p-12 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// 2026_cycle.init</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Applications for the 2026 cycle open this November.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Be the first to know when the qualifier opens. Join the IOAI Philippines mailing list.</p>
            <form className="mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
              <input type="email" placeholder="your@school.edu.ph" className="flex-1 rounded-sm border border-border bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary" />
              <button type="button" className="rounded-sm bg-primary px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground hover:opacity-90">Notify me</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
