import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";

export const Route = createFileRoute("/_site/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — IOAI Philippines" },
      { name: "description", content: "Partner with IOAI Philippines to fund Team PH at the International Olympiad in AI. Four tiers of strategic sponsorship." },
    ],
  }),
  component: Partnerships,
});

const tiers = [
  {
    name: "Bronze",
    code: "T-04",
    price: "₱ 250,000",
    accent: "bronze",
    desc: "For organizations beginning a partnership with the national program.",
    perks: [
      "Logo placement on IOAI PH website",
      "Recognition at the national bootcamp",
      "Quarterly impact report",
      "1 invitation to send-off ceremony",
    ],
  },
  {
    name: "Silver",
    code: "T-03",
    price: "₱ 750,000",
    accent: "silver",
    desc: "For partners co-funding the bootcamp and selection phases.",
    perks: [
      "Everything in Bronze",
      "Branded session at national bootcamp",
      "Access to top-48 finalist talent pool",
      "Co-branded press release",
      "4 invitations to send-off + welcome-home",
    ],
  },
  {
    name: "Gold",
    code: "T-02",
    price: "₱ 2,000,000",
    accent: "gold",
    featured: true,
    desc: "For partners underwriting the full national delegation.",
    perks: [
      "Everything in Silver",
      "Named title sponsor of training camp",
      "Logo on Team PH competition apparel",
      "Executive on advisory board",
      "Featured documentary segment",
      "Exclusive recruitment partnership",
    ],
  },
  {
    name: "Platinum",
    code: "T-01",
    price: "Bespoke",
    accent: "primary",
    desc: "Lead sponsor of IOAI Philippines. Limited to one organization per cycle.",
    perks: [
      "Everything in Gold",
      "Presenting partner — 'IOAI PH presented by [Brand]'",
      "Dedicated AI research grant in your name",
      "Named scholarship for top performer",
      "Co-design of multi-year program roadmap",
    ],
  },
];

function Partnerships() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// partnerships.tiers</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Fund the future of <span className="text-primary">Filipino AI.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every peso of sponsorship goes directly to student stipends, training infrastructure, travel to Astana, and the long-term sustainability of the national delegation. No middlemen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-4">
          {tiers.map((t) => {
            const ring = t.accent === "gold" ? "var(--gold)" : t.accent === "silver" ? "var(--silver)" : t.accent === "bronze" ? "var(--bronze)" : "var(--primary)";
            return (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-sm border bg-surface p-6 ${t.featured ? "border-primary/50 lg:scale-[1.03] lg:shadow-2xl" : "border-border"}`}
                style={t.featured ? { boxShadow: "0 0 0 1px var(--color-primary), 0 30px 60px -20px color-mix(in oklab, var(--color-primary) 40%, transparent)" } : undefined}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-6 rounded-sm bg-primary px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                    Most committed
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="h-2 w-2 rounded-full" style={{ background: ring }} />
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.code}</div>
                </div>
                <div className="mt-6 font-display text-2xl font-semibold">{t.name}</div>
                <div className="mt-2 font-display text-3xl font-semibold tracking-tight" style={{ color: ring }}>{t.price}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-px w-3 flex-none bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 rounded-sm px-4 py-3 font-mono text-xs uppercase tracking-wider transition-all ${t.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:border-primary/40"}`}>
                  Inquire →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { k: "100%", l: "Of funds go to students & program" },
            { k: "501(c)-equivalent", l: "Tax-deductible in PH & US" },
            { k: "Quarterly", l: "Public audit & impact reports" },
          ].map((s) => (
            <div key={s.l} className="bg-surface p-8">
              <div className="font-display text-3xl font-semibold text-primary">{s.k}</div>
              <div className="mt-2 font-mono text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
