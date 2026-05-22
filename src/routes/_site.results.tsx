import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/results")({
  head: () => ({
    meta: [
      { title: "Results Dashboard — IOAI Philippines" },
      { name: "description", content: "Live performance and medal results for Team Philippines at the International Olympiad in AI." },
    ],
  }),
  component: Results,
});

const team = [
  { name: "Carlos Aguinaldo", school: "Philippine Science HS — Main", sci: 92, pra: 88, total: 180, medal: "Gold" },
  { name: "Mariel Tan", school: "Ateneo de Manila SHS", sci: 88, pra: 90, total: 178, medal: "Gold" },
  { name: "Iñigo Bernardo", school: "Manila Science HS", sci: 84, pra: 79, total: 163, medal: "Silver" },
  { name: "Sofia delos Reyes", school: "PSHS — Visayas Campus", sci: 78, pra: 81, total: 159, medal: "Silver" },
];

const nations = [
  { rank: 1, country: "China", g: 4, s: 0, b: 0, pts: 720 },
  { rank: 2, country: "USA", g: 3, s: 1, b: 0, pts: 698 },
  { rank: 3, country: "Russia", g: 3, s: 1, b: 0, pts: 691 },
  { rank: 4, country: "South Korea", g: 2, s: 2, b: 0, pts: 672 },
  { rank: 12, country: "Philippines", g: 2, s: 2, b: 0, pts: 680, highlight: true },
  { rank: 18, country: "Singapore", g: 1, s: 2, b: 1, pts: 631 },
  { rank: 24, country: "Vietnam", g: 1, s: 1, b: 2, pts: 598 },
  { rank: 31, country: "Indonesia", g: 0, s: 2, b: 2, pts: 562 },
];

const medalColor = (m: string) =>
  m === "Gold" ? "var(--gold)" : m === "Silver" ? "var(--silver)" : m === "Bronze" ? "var(--bronze)" : "var(--muted-foreground)";

function Results() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <div className="grid-bg grid-bg-fade absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// results.dashboard · ioai_2025</div>
              <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Astana 2025 · live results
              </h1>
            </div>
            <div className="flex items-center gap-3 rounded-sm border border-primary/40 bg-primary/5 px-3 py-2 font-mono text-xs text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Last sync · 2025.08.09 · 18:42 UTC+6
            </div>
          </div>
        </div>
      </section>

      {/* TOP METRICS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {[
            { k: "12th", l: "Global rank", sub: "of 64 nations", color: "primary" },
            { k: "2", l: "Gold medals", color: "gold" },
            { k: "2", l: "Silver medals", color: "silver" },
            { k: "680", l: "Total team points", color: "primary" },
          ].map((m) => (
            <div key={m.l} className="bg-surface p-6">
              <div className="font-display text-4xl font-semibold" style={{ color: `var(--${m.color})` }}>{m.k}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.l}</div>
              {m.sub && <div className="mt-0.5 text-xs text-muted-foreground">{m.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* TEAM BREAKDOWN */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-sm border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-display text-xl font-semibold">Team Philippines · contestant scores</h2>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">/200 max</div>
          </div>
          <div className="divide-y divide-border">
            {team.map((c) => (
              <div key={c.name} className="grid items-center gap-4 px-6 py-5 md:grid-cols-[2fr_1fr_1fr_auto]">
                <div>
                  <div className="font-display text-lg font-semibold">{c.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{c.school}</div>
                </div>
                <ScoreBar label="SCI" value={c.sci} />
                <ScoreBar label="PRA" value={c.pra} />
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold">{c.total}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">total</div>
                  </div>
                  <div
                    className="rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: medalColor(c.medal), borderColor: medalColor(c.medal) + "55" }}
                  >
                    ● {c.medal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATION LEADERBOARD */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-sm border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-display text-xl font-semibold">Nation leaderboard</h2>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">selected entries</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <th className="px-6 py-3 text-left">Rank</th>
                  <th className="px-6 py-3 text-left">Nation</th>
                  <th className="px-6 py-3 text-right" style={{ color: "var(--gold)" }}>G</th>
                  <th className="px-6 py-3 text-right" style={{ color: "var(--silver)" }}>S</th>
                  <th className="px-6 py-3 text-right" style={{ color: "var(--bronze)" }}>B</th>
                  <th className="px-6 py-3 text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                {nations.map((n) => (
                  <tr
                    key={n.country}
                    className={`border-b border-border/50 last:border-0 ${n.highlight ? "bg-primary/5" : ""}`}
                  >
                    <td className="px-6 py-4 font-mono">{String(n.rank).padStart(2, "0")}</td>
                    <td className="px-6 py-4 font-display">
                      {n.highlight ? <span className="text-primary">▸ {n.country}</span> : n.country}
                    </td>
                    <td className="px-6 py-4 text-right font-mono">{n.g}</td>
                    <td className="px-6 py-4 text-right font-mono">{n.s}</td>
                    <td className="px-6 py-4 text-right font-mono">{n.b}</td>
                    <td className="px-6 py-4 text-right font-mono">{n.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HISTORICAL */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-sm border border-border bg-surface p-6">
          <h2 className="font-display text-xl font-semibold">Cycle history</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { y: "2024 · Bulgaria", r: "23rd", m: "1 Silver · 1 Bronze" },
              { y: "2025 · Kazakhstan", r: "12th", m: "2 Gold · 2 Silver", live: true },
              { y: "2026 · TBD", r: "—", m: "Cycle opens Nov 2025", future: true },
            ].map((h) => (
              <div key={h.y} className={`rounded-sm border p-5 ${h.live ? "border-primary/40 bg-primary/5" : h.future ? "border-dashed border-border" : "border-border"}`}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{h.y}</div>
                <div className="mt-3 font-display text-3xl font-semibold" style={{ color: h.live ? "var(--color-primary)" : undefined }}>{h.r}</div>
                <div className="mt-1 text-sm text-muted-foreground">{h.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        <span>{label}</span>
        <span>{value}/100</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-background">
        <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
