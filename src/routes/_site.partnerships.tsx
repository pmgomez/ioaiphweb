import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { useTheme } from "@/components/theme-provider";
import { Sparkles, Cpu, Check, ArrowRight, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/_site/partnerships")({
  head: () => ({
    meta: [
      { title: "2027 Sponsorship Framework — IOAI Philippines" },
      {
        name: "description",
        content:
          "Partner with IOAI Philippines to fund and empower Team PH for the 2027 Olympiad cycle. Explore our 2027 Sponsorship Tier Framework.",
      },
      { property: "og:title", content: "2027 Sponsorship Framework — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Partner with IOAI Philippines to fund Team PH at the International Olympiad in AI. Official 2027 Sponsorship Tier Matrix.",
      },
    ],
  }),
  component: Partnerships,
});

type CorporateTier = {
  name: string;
  badge?: string;
  code: string;
  price: string;
  color: string;
  colorLight: string;
  scope: string;
  deliverables: string[];
  featured?: boolean;
};

const premierTiers: CorporateTier[] = [
  {
    name: "Title Sponsor",
    badge: "Bespoke Title Rights",
    code: "T-01",
    price: "PHP 1,000,000+",
    color: "#38BDF8",
    colorLight: "#0284C7",
    featured: true,
    scope: "Full domestic operational underwriting, compute platform scale, and multi-year emergency travel reserves.",
    deliverables: [
      '"IOAI Philippines presented by [Sponsor]" title rights',
      "Primary chest logo on all official international delegation uniforms",
      "VIP press seats and board-level briefing access",
    ],
  },
  {
    name: "Platinum Partner",
    badge: "Delegations Anchor",
    code: "T-02",
    price: "PHP 500,000+",
    color: "#818CF8",
    colorLight: "#4F46E5",
    featured: true,
    scope: "Underwriting non-GAA travel deficits across IAIO (Vietnam), APOAI (Russia), and IOAI (Singapore) delegations.",
    deliverables: [
      "Co-presenter status for national selection rounds",
      "Custom corporate problem integration in selection tasks",
      "VIP ceremony seating",
    ],
  },
];

const coreTiers: CorporateTier[] = [
  {
    name: "Gold Partner",
    code: "T-03",
    price: "PHP 250,000+",
    color: "#F59E0B",
    colorLight: "#D97706",
    scope: "National Finals execution at Ateneo BUILD, expert lecturer stipends, and dedicated cloud GPU compute credits.",
    deliverables: [
      "Keynote speaking slot at National Finals",
      "Contest platform co-branding",
      "Direct recruitment pipeline access to finalist resume books",
    ],
  },
  {
    name: "Silver Partner",
    code: "T-04",
    price: "PHP 100,000+",
    color: "#9CA3AF",
    colorLight: "#4B5563",
    scope: "Official national team apparel, travel insurance policies, and Visayas/Mindanao regional selection roadshows.",
    deliverables: [
      "Logo placement on official international team jackets",
      "Logo on printed event collateral",
      "Priority access to finalist resume books",
    ],
  },
  {
    name: "Bronze Partner",
    code: "T-05",
    price: "PHP 50,000+",
    color: "#D97706",
    colorLight: "#92400E",
    scope: "Onsite meal catering for national finals at Ateneo BUILD, venue support, and proctor stipends.",
    deliverables: [
      "Stage backdrop logo placement",
      "Dedicated social media spotlight",
      "Student kit promotional inserts",
    ],
  },
  {
    name: "Steel Partner",
    code: "T-06",
    price: "PHP 25,000+",
    color: "#6B7280",
    colorLight: "#374151",
    scope: "Regional examination center logistics, local student transit, and proctoring allowances.",
    deliverables: [
      "Website logo placement",
      "Partner announcement",
      "Digital certificate co-branding",
    ],
  },
];

const supporterTier = {
  name: "Friend / Supporter",
  code: "T-07",
  price: "Under PHP 25,000",
  color: "#10B981",
  colorLight: "#059669",
  scope: "Alumni micro-donations, local administrative supplies, and student travel stipends.",
  deliverables: [
    "Website directory listing",
    "Digital certificate of appreciation",
    "Social media group mention",
  ],
};

function Partnerships() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            2027 Sponsorship Tier Framework
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Fund the future of <span className="text-primary">Filipino AI.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every peso of corporate sponsorship and community giving goes directly to contestant training, high-performance
            compute infrastructure, regional selection roadshows, and international delegation travel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* PREMIER TIERS (TITLE & PLATINUM) */}
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Premier Strategic Sponsorships
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {premierTiers.map((t) => {
              const ring = resolvedTheme === "dark" ? t.color : t.colorLight;
              return (
                <div
                  key={t.name}
                  className="relative flex flex-col justify-between rounded-sm border border-primary/40 bg-gradient-to-b from-surface via-surface to-background p-8 shadow-2xl transition-all hover:border-primary/70"
                  style={{
                    boxShadow:
                      "0 0 0 1px var(--color-primary), 0 25px 50px -12px color-mix(in oklab, var(--color-primary) 25%, transparent)",
                  }}
                >
                  {t.badge && (
                    <div className="absolute -top-3 left-6 rounded-sm bg-primary px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
                      {t.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full" style={{ background: ring }} />
                        <span className="font-mono text-xs text-muted-foreground">{t.code}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Tier Floor</span>
                    </div>

                    <div className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground">{t.name}</div>
                    <div className="mt-2 font-display text-4xl font-semibold tracking-tight" style={{ color: ring }}>
                      {t.price}
                    </div>

                    <div className="mt-6 rounded-sm border border-border/80 bg-background/60 p-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Operational Scope
                      </div>
                      <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">{t.scope}</p>
                    </div>

                    <div className="mt-6">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Key Deliverables
                      </div>
                      <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                        {t.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-foreground/90">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`mailto:info@ioaiph.org?subject=2027 Partnership inquiry — ${t.name}`}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3.5 text-center font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 shadow-md"
                  >
                    Become a Partner <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* CORE CORPORATE TIERS (GOLD, SILVER, BRONZE, STEEL) */}
        <div className="mt-24">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Corporate Sponsorship Matrix
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreTiers.map((t) => {
              const ring = resolvedTheme === "dark" ? t.color : t.colorLight;
              return (
                <div
                  key={t.name}
                  className="flex flex-col justify-between rounded-sm border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-2 rounded-full" style={{ background: ring }} />
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {t.code}
                      </div>
                    </div>

                    <div className="mt-4 font-display text-xl font-semibold text-foreground">{t.name}</div>
                    <div className="mt-1 font-display text-2xl font-bold tracking-tight" style={{ color: ring }}>
                      {t.price}
                    </div>

                    <div className="mt-5 border-t border-border pt-4">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        Operational Scope
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{t.scope}</p>
                    </div>

                    <div className="mt-5 border-t border-border pt-4">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        Key Deliverables
                      </div>
                      <ul className="mt-2.5 space-y-2 text-xs text-foreground/80">
                        {t.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`mailto:info@ioaiph.org?subject=2027 Partnership inquiry — ${t.name}`}
                    className="mt-8 inline-flex items-center justify-center gap-1.5 rounded-sm border border-border bg-background px-4 py-2.5 text-center font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    Become a Partner <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* IN-KIND PARTNER CALLOUT */}
        <div className="mt-8 flex flex-col items-start gap-4 rounded-sm border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                In-Kind Sponsorships &amp; Compute Grants
              </div>
              <p className="mt-0.5 text-sm text-foreground/90 font-medium">
                Equivalent value in cloud GPU compute credits, travel logistics, or venue infrastructure can qualify for
                tier equivalency.
              </p>
            </div>
          </div>
          <a
            href="mailto:info@ioaiph.org?subject=In-Kind Partnership Inquiry"
            className="shrink-0 rounded-sm border border-primary/40 bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            In-Kind Inquiry →
          </a>
        </div>

        {/* FRIEND / SUPPORTER TIER FOOTER BANNER */}
        <div className="mt-12 overflow-hidden rounded-sm border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="h-4 w-4 text-emerald-500" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500">
                  {supporterTier.code} · Grassroots Giving
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                {supporterTier.name}
              </h3>
              <div className="mt-1 font-display text-xl font-semibold text-emerald-500">{supporterTier.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{supporterTier.scope}</p>
            </div>

            <div className="border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Deliverables &amp; Recognition
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-foreground/80">
                {supporterTier.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 items-center">
              <a
                href={`mailto:info@ioaiph.org?subject=2027 Supporter Inquiry — ${supporterTier.name}`}
                className="w-full rounded-sm border border-border bg-background px-6 py-3 text-center font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-emerald-500 hover:text-emerald-500 lg:w-auto"
              >
                Become a Supporter →
              </a>
            </div>
          </div>
        </div>

        {/* GOVERNANCE & IMPACT STATS */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { k: "100%", l: "Of funds go directly to students & training" },
            { k: "501(c)-equivalent", l: "Tax-deductible partnership options" },
            { k: "Audited", l: "Public reporting & cycle milestone accountability" },
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
