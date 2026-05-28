import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { useTheme } from "@/components/theme-provider";

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
    name: "Friend",
    code: "T-07",
    price: "Up to ₱5,000",
    color: "#10B981",
    colorLight: "#047857",
    desc: "A grassroots contribution that helps cover essential administrative and incidental costs during the national selection phase.",
    perks: [
      "Name listed on the dedicated 'Friends of IOAI PH' page",
      "Annual impact report via email with milestones & financials",
    ],
  },
  {
    name: "Steel",
    code: "T-06",
    price: "Up to ₱10,000",
    color: "#6B7280",
    colorLight: "#374151",
    desc: "An entry-level partnership that offsets specialized bootcamp materials and meals for our national finalists.",
    perks: [
      "Everything in Friend",
      "Premium name placement on the IOAI PH front page",
      "Recognition as supporting partner at the national bootcamp",
      "1 invitation to the official team send-off ceremony",
    ],
  },
  {
    name: "Bronze",
    code: "T-05",
    price: "Up to ₱25,000",
    color: "#D97706",
    colorLight: "#92400E",
    desc: "Co-funds operational stipends, training infrastructure, and logistics for the national bootcamp and selection rounds.",
    perks: [
      "Everything in Steel",
      "Prominent logo on the main partner section & marketing collateral",
      "Dedicated acknowledgment post across IOAI PH social channels",
      "Official digital certificate of appreciation",
    ],
  },
  {
    name: "Silver",
    code: "T-04",
    price: "Up to ₱50,000",
    color: "#E5E7EB",
    colorLight: "#4B5563",
    desc: "Underwrites a meaningful share of advanced training operations and contestant mentoring across the cycle.",
    perks: [
      "Everything in Bronze",
      "Branded session, technical talk, or mentorship module at bootcamp",
      "Early access to anonymized profiles from our national talent pool",
      "Inclusion as supporting partner in co-branded national press release",
      "4 invitations to send-off + welcome-home ceremonies",
    ],
  },
  {
    name: "Gold",
    code: "T-03",
    price: "Up to ₱100,000",
    color: "#F59E0B",
    colorLight: "#B45309",
    featured: true,
    desc: "Provides high-level operational anchoring, ensuring the delegation's core competitive needs are met.",
    perks: [
      "Everything in Silver",
      "Named title sponsor of the intensive national training camp",
      "Logo on official Team Philippines competition shirts",
      "Executive seat on the IOAI PH advisory board for the cycle",
      "Standalone partner feature on our primary media channels",
      "Exclusive recruitment & internship pipeline partnership",
    ],
  },
  {
    name: "Platinum",
    code: "T-02",
    price: "Up to ₱250,000",
    color: "#38BDF8",
    colorLight: "#0369A1",
    desc: "Anchors a major component of the international delegation — directly subsidizing registration, travel, and logistics for the 5-person team (4 contestants + 1 team leader).",
    perks: [
      "Everything in Gold",
      "Named AI research grant or scholarship for the top performer",
      "Option to join Team PH at the IOAI Global Finals as official Guests (all-access pass; separate fee covers lodging & meals)",
    ],
  },
  {
    name: "Diamond",
    code: "T-01",
    price: "Bespoke",
    color: "#FFFFFF",
    colorLight: "#111827",
    desc: "Lead presenting sponsor of IOAI Philippines. Fully secures the international campaign, offsetting registration, airfare, lodging, and equipment overhead exceeding ₱500,000. Exclusive — 1 slot per cycle.",
    perks: [
      "Everything in Platinum",
      "Presenting rights — 'IOAI PH presented by [Your Brand]'",
      "Prime logo on Team PH competition shirts and winter jackets",
      "Co-design of the multi-year national program roadmap",
    ],
  },
];



function Partnerships() {
  const { resolvedTheme } = useTheme();
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
            Every peso of sponsorship goes directly to student stipends, training infrastructure, travel, and the long-term sustainability of the national delegation. No middlemen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => {
            const ring = resolvedTheme === "dark" ? t.color : t.colorLight;
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
                <a href={`mailto:info@ioaiph.org?subject=Partnership inquiry — ${t.name} tier`} className={`mt-8 inline-block rounded-sm px-4 py-3 text-center font-mono text-xs uppercase tracking-wider transition-all ${t.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:border-primary/40"}`}>
                  Inquire →
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { k: "100%", l: "Of funds go to students & program" },
            { k: "501(c)-equivalent", l: "Tax-deductible in PH & US" },
            { k: "Annual", l: "Public audit & impact reports" },
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
