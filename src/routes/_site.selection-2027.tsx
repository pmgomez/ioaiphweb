import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import {
  Calendar,
  ShieldCheck,
  Award,
  Users,
  Scale,
  Plane,
  Laptop,
  Check,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/_site/selection-2027")({
  head: () => ({
    meta: [
      { title: "2027 Selection & Campaign Roadmap — IOAI Philippines" },
      {
        name: "description",
        content:
          "Official selection pipeline, competition stages, direct seeding policies, and operational calendar for the 2027 International Olympiad in Artificial Intelligence (IOAI) Singapore and APOAI Russia.",
      },
      { property: "og:title", content: "2027 Selection & Campaign Roadmap — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Official selection pipeline, competition stages, direct seeding policies, and operational calendar for the 2027 International Olympiad in Artificial Intelligence (IOAI) Singapore and APOAI Russia.",
      },
    ],
  }),
  component: SelectionRoadmap2027,
});

const calendarData = [
  {
    stage: "Open Registration Window",
    date: "Sep 12 – Nov 11, 2026",
    format: "Centralized Online Portal",
    progression: "Open Pool (K–12)",
    notes:
      "Institutional portal open for nationwide candidate registration. Registration closes early to onboard candidates into the mandatory EduSpace Round 1 platform.",
    status: "active",
  },
  {
    stage: "Stage 1: Eliminations",
    date: "Nov 16–22, 2026",
    format: "Online (Window-Locked Asynchronous 7-Day Window)",
    progression: "Open Pool → Top 300",
    notes:
      "Dual-screening assessment combining mandatory completion of IOAI EduSpace Round 1 with an internal timed National MCQ assessment.",
    status: "upcoming",
  },
  {
    stage: "Stage 2: Qualifiers",
    date: "Dec 12, 2026 (Saturday)",
    format: "Synchronous Proctored Online (3–4 hours)",
    progression: "Top 300 → Top 80",
    notes:
      "High-intensity sprint scheduled following Term 2 examinations and ahead of the nationwide secondary school holiday recess.",
    status: "upcoming",
  },
  {
    stage: "Stage 3: Quarter-Finals",
    date: "Jan 16, 2027 (Saturday)",
    format: "Synchronous Proctored Online (5 hours)",
    progression: "Top 80 → Top 40",
    notes:
      "Standardized virtual contest resuming two weeks after post-holiday school resumption, minimizing travel displacement.",
    status: "upcoming",
  },
  {
    stage: "Stage 4: Semi-Finals",
    date: "Jan 30, 2027 (Saturday)",
    format: "Hybrid Sprint (5 hours) • Luzon: Onsite at Ateneo • VisMin / Overseas: Synchronous",
    progression: "Top 40 + Seeds → Top 24",
    notes:
      "Returning 2026 APOAI Honorable Mentions enter the active pipeline. Non-Luzon and overseas candidates test synchronously under multi-stream surveillance.",
    status: "upcoming",
  },
  {
    stage: "Stage 5: National Finals",
    date: "Feb 20–21, 2027 (Sat–Sun)",
    format: "Onsite (Ateneo CTC Build Lab, 2 Days)",
    progression: "Top 31 → Delegations",
    notes:
      "Two independent 6-hour contest days replicating official IOAI individual competition rules. Non-Metro Manila finalists arrive Friday, February 19, 2027.",
    status: "upcoming",
  },
  {
    stage: "IAIO 2027 (Vietnam)",
    date: "Feb 25 – Mar 2, 2027",
    format: "Onsite (Vietnam) / Invitational",
    progression: "2026 Medalist Pool",
    notes:
      "Invitational delegation fielded from the 2026 medalist pool, subject to final international host accreditation and bilateral confirmation.",
    status: "upcoming",
  },
  {
    stage: "National Team Lock & Clearances",
    date: "Mar 1 – Apr 15, 2027",
    format: "Administrative & School Clearances",
    progression: "Official Delegations",
    notes:
      "Academic buffer covering secondary school Term 3 exams, graduation rites, host financial aid filings (Waves 1 & 2), and participant registration ahead of Singapore's Apr 15 team lock.",
    status: "upcoming",
  },
  {
    stage: "Pre-Departure Boot Camp",
    date: "Apr 19 – Jun 27, 2027",
    format: "Hybrid & Onsite Laboratories",
    progression: "Official Delegations",
    notes:
      "10-week intensive training block combining hybrid problem sets and full-time lab drills, running concurrent with travel documentation and health screening.",
    status: "upcoming",
  },
  {
    stage: "APOAI 2027 (Russia)",
    date: "Target: April, May, or Late June 2027 (TBD)",
    format: "Onsite (Russian Federation) / Remote Contingency",
    progression: "APOAI Development Delegation",
    notes:
      "Regional talent development olympiad fielding the top 4 non-graduating students. The committee will make best efforts to field an onsite delegation in Russia, maintaining a Manila-based proctored site as contingency.",
    status: "upcoming",
  },
  {
    stage: "IOAI 2027 (Singapore)",
    date: "Jul 4–10, 2027",
    format: "Onsite (Singapore)",
    progression: "Primary IOAI Delegation",
    notes:
      "World championship; official 4-student Philippine delegation arrives July 4 (Opening Ceremony July 5).",
    status: "upcoming",
  },
];

function SelectionRoadmap2027() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative -mt-24 overflow-hidden border-b border-border/60 bg-background pt-28 pb-16 md:pt-36 md:pb-24">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              // institutional.governance · cycle_2027
            </div>
            <span className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Official Policy Brief
            </span>
          </div>

          <h1 className="mt-5 max-w-5xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            IOAI Philippines 2027:
            <br />
            <span className="text-gradient">National Selection &amp; Campaign Roadmap</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            This official roadmap establishes the selection pipeline, competition stages, direct
            seeding policies, and operational calendar for the 2027 International Olympiad in
            Artificial Intelligence (IOAI) in Singapore and the Asia-Pacific Olympiad in Artificial
            Intelligence (APOAI) in the Russian Federation.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border shadow-sm sm:grid-cols-4">
            {[
              { label: "Target Delegations", val: "Singapore & Russia" },
              { label: "Selection Framework", val: "5 Domestic Stages" },
              { label: "Participation Fee", val: "100% Free / Zero Cost" },
              { label: "Finals Capacity", val: "31 Finalists / Ateneo BUILD" },
            ].map((m) => (
              <div key={m.label} className="bg-surface/90 p-4 backdrop-blur-sm sm:p-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </div>
                <div className="mt-1.5 font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
                  {m.val}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs & Table of Contents Nav */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://forms.gle/Xoiq3YQE3Z3HqATG7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.99]"
            >
              <span>Register for 2027 Cycle</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40"
            >
              <span>View FAQs</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT BODY */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 overflow-x-clip">
        {/* COMPACT STICKY JUMP BAR */}
        <div className="sticky top-16 z-30 mb-10 w-full rounded-sm border border-border/80 bg-background/95 px-4 py-2 backdrop-blur-md shadow-xs">
          <div className="flex items-center gap-2">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Jump to:
            </span>
            <nav className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
              {[
                { id: "eligibility", label: "01 Eligibility" },
                { id: "calendar", label: "02 Calendar" },
                { id: "seeding", label: "03 Seeding" },
                { id: "finals-format", label: "04 Finals" },
                { id: "delegations", label: "05 Delegations" },
                { id: "logistics", label: "06 Logistics" },
                { id: "appeals", label: "07 Appeals" },
              ].map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="rounded-xs border border-border/60 bg-surface/50 px-2 py-0.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground active:text-primary"
                >
                  {tab.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="space-y-24">
          {/* SECTION 1: PROGRAM OVERVIEW & ELIGIBILITY */}
          <section id="eligibility" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>01 // governance.eligibility</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              1. Program Overview &amp; Eligibility
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Participation in the IOAIPH selection pipeline is restricted to candidates who satisfy
              international IOAI eligibility criteria and are legally qualified to represent the
              Republic of the Philippines.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Target Cohort & Merit Governance */}
              <div className="rounded-sm border border-border bg-surface/60 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-sm bg-primary/10 text-primary">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Rule 1.1
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Target Cohort &amp; Merit Governance
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  All advancement milestones, national training squad allocations, and international
                  delegation berths are determined strictly by individual, verified performance
                  under standardized, timed examination conditions.
                </p>
                <div className="mt-5 rounded-sm border border-primary/20 bg-primary/5 p-4 text-xs font-mono text-primary">
                  Zero arbitrary selections • Pure meritocratic ranking • Independent Scientific
                  Committee oversight
                </div>
              </div>

              {/* Enrolment Status & Age Ceiling */}
              <div className="rounded-sm border border-border bg-surface/60 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-sm bg-primary/10 text-primary">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Rule 1.2
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Enrolment Status &amp; Age Ceiling
                    </h3>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Enrolment:</strong> Must be actively
                      enrolled in Kindergarten through Grade 12 (or equivalent) on or after December
                      1, 2026.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Age Ceiling:</strong> Must be born on or
                      after July 1, 2007 (attaining at most 20 years of age on July 1, 2027).
                    </span>
                  </li>
                </ul>
              </div>

              {/* Citizenship & Residency Pathways */}
              <div className="rounded-sm border border-border bg-surface/60 p-6 sm:p-8 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-sm bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Rule 1.3
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Citizenship &amp; Residency Pathways
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Candidates must satisfy at least one of the two recognized jurisdictional
                  pathways:
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-sm border border-border/70 bg-background/50 p-5">
                    <div className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                      Pathway A: Filipino Citizens
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Filipino citizens enrolled in an accredited educational institution located
                      within the Philippines or abroad.
                    </p>
                  </div>

                  <div className="rounded-sm border border-border/70 bg-background/50 p-5">
                    <div className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                      Pathway B: Long-Term Foreign Residents
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Foreign nationals residing in the Philippines for bona fide family reasons who
                      have completed at least one full academic year in a Philippine educational
                      institution, are projected to complete at least two consecutive years of
                      full-time education in the country prior to secondary graduation, and have not
                      entered any other jurisdiction's IOAI selection pipeline for the 2027 cycle.
                    </p>
                  </div>
                </div>

                {/* Overseas Students Subsection */}
                <div className="mt-6 rounded-sm border border-border/60 bg-surface/80 p-5">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider">
                    <Plane className="h-3.5 w-3.5 text-primary" />
                    <span>Overseas Filipino Students Provision</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Eligible overseas Filipino candidates may contest preliminary rounds remotely
                    through the Semi-Finals stage under standardized, synchronous online proctoring
                    pegged to Philippine Standard Time (PST). Qualifiers advancing to the National
                    Finals must compete on-site in Metro Manila.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: MASTER COMPETITION CALENDAR */}
          <section id="calendar" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Calendar className="h-3.5 w-3.5" />
              <span>02 // operational.schedule</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              2. Master Competition Calendar
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Comprehensive timeline detailing delivery formats, progressive cohort sizes, and
              academic alignment across all domestic stages and international competitions.
            </p>

            {/* Master Competition Calendar Table */}
            <div className="mt-8 max-w-full overflow-x-auto rounded-sm border border-border bg-surface/40">
              <table className="w-full text-left text-sm table-auto">
                <thead className="border-b border-border bg-surface text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3.5 font-semibold">Stage / Milestone</th>
                    <th className="px-4 py-3.5 font-semibold whitespace-nowrap">Target Date</th>
                    <th className="px-4 py-3.5 font-semibold">Delivery &amp; Format</th>
                    <th className="px-4 py-3.5 font-semibold">Progression</th>
                    <th className="px-4 py-3.5 font-semibold">Operational Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {calendarData.map((row) => (
                    <tr
                      key={row.stage}
                      className={
                        row.status === "blackout"
                          ? "bg-primary/5 text-muted-foreground/90 font-mono text-xs"
                          : row.status === "active"
                            ? "bg-surface/70 hover:bg-surface/90 transition-colors"
                            : "hover:bg-surface/50 transition-colors"
                      }
                    >
                      <td className="px-4 py-3.5 font-semibold text-foreground">
                        <div className="flex items-center gap-2">
                          {row.status === "active" && (
                            <span className="h-2 w-2 shrink-0 rounded-full bg-primary animate-pulse" />
                          )}
                          <span>{row.stage}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-primary whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-muted-foreground leading-snug">
                        {row.format}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-foreground leading-snug">
                        {row.progression}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-muted-foreground leading-relaxed">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: DIRECT SEEDING & EXEMPTION RULES */}
          <section id="seeding" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Award className="h-3.5 w-3.5" />
              <span>03 // athlete_continuity.seeding</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              3. Direct Seeding &amp; Exemption Rules
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              To recognize verified international achievements, ensure academic continuity, and
              prevent athlete fatigue, returning international performers from the 2026 campaign
              receive structured exemptions, provided they maintain accredited primary or secondary
              student enrolment during SY 2026–2027.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Tier 1 Box */}
              <div className="rounded-sm border border-primary/40 bg-surface/80 p-6 sm:p-8">
                <div className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  Tier 1 Exemption
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                  2026 IOAI &amp; APOAI Medalists
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Gold, Silver, and Bronze Recipients
                </p>

                <div className="mt-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                  Advance directly to{" "}
                  <strong className="text-foreground">Stage 5 (National Finals)</strong> on February
                  20–21, 2027, bypassing Eliminations, Qualifiers, Quarter-Finals, and Semi-Finals.
                </div>
              </div>

              {/* Tier 2 Box */}
              <div className="rounded-sm border border-border bg-surface/60 p-6 sm:p-8">
                <div className="inline-flex items-center gap-1.5 rounded-sm bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border">
                  Tier 2 Exemption
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                  2026 APOAI Honorable Mentions
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Regional Tournament Citation
                </p>

                <div className="mt-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                  Advance directly to{" "}
                  <strong className="text-foreground">Stage 4 (Semi-Finals)</strong> on January 30,
                  2027, bypassing Eliminations, Qualifiers, and Quarter-Finals. Tier 2 candidates
                  must compete in Stage 4 and earn qualification into the Top 24 on raw contest
                  score.
                </div>
              </div>

              {/* Additive Quota Allocation (+N Principle) */}
              <div className="rounded-sm border border-border bg-surface/50 p-6 sm:p-8 md:col-span-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-primary font-bold">
                    // rule.mechanics
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Additive Quota Allocation (+N Principle)
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Direct exemptions do not displace open qualifiers at any stage of the competition:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-sm border border-border/70 bg-background/60 p-5">
                    <div className="font-mono text-xs text-primary font-semibold">
                      Stage 4 (Semi-Finals) Composition
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold text-foreground">
                      Top 40 + Tier 2 Seeds
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Composed of the Top 40 open contestants advancing from the Quarter-Finals plus
                      eligible returning Tier 2 awardees.
                    </p>
                  </div>

                  <div className="rounded-sm border border-border/70 bg-background/60 p-5">
                    <div className="font-mono text-xs text-primary font-semibold">
                      Stage 5 (National Finals) Composition
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold text-foreground">
                      Top 24 + up to 7 Medalists
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Composed of the Top 24 contestants from the Semi-Finals plus eligible
                      returning Tier 1 medalists (up to 7 students), establishing an active on-site
                      cohort capped at 31 contestants.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4 text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Conditions of Seeding:</strong> Exemptions are
                  strictly contingent upon verified enrolment in an accredited primary or secondary
                  institution for SY 2026–2027 and formal administrative confirmation submitted by
                  November 11, 2026. Past medalists who have completed secondary education prior to
                  the contest cycle forfeit eligibility.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: NATIONAL FINALS FORMAT & HARDWARE OPERATIONS */}
          <section id="finals-format" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Laptop className="h-3.5 w-3.5" />
              <span>04 // onsite_operations.hardware</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              4. National Finals Format &amp; Hardware Operations
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Technical redundancy, dual-session contest architecture, and scoring mechanics at the
              Ateneo de Manila University CTC Build Lab.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">40 Workstations</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Venue &amp; Redundancy
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  With contestants capped at 31, at least 9 workstations remain pre-configured and
                  actively idling as hot-swap spares for instant technical failover.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">Audited BYOD</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Hardware Options
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Finalists may use provisioned desktops or Bring Your Own Device (BYOD). BYOD
                  machines must pass exhaustive software environment and security audits.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">2 × 6-Hour Days</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Contest Structure
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Features two independent 6-hour competition sessions (Saturday and Sunday),
                  directly replicating IOAI championship individual protocols.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">600 Pts Total</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Score Resets
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Six distinct tasks carry equal weight (100 pts each). Preliminary scores do not
                  carry over; all finalists commence Stage 5 at zero points.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: DUAL DELEGATION SELECTION FRAMEWORK */}
          <section id="delegations" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Users className="h-3.5 w-3.5" />
              <span>05 // team_allocation.international</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              5. Dual Delegation Selection Framework
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Final national representation is determined strictly by the aggregate leaderboard of
              the National Finals.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* Team A: IOAI Singapore */}
              <div className="rounded-sm border border-primary/40 bg-surface/80 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    Team A // World Stage
                  </span>
                  <span className="rounded-sm border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                    July 4–10, 2027
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                  IOAI Primary Delegation (Singapore)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The flagship national squad fielded at the International Olympiad in Artificial
                  Intelligence.
                </p>

                <div className="mt-6 space-y-4 border-t border-border/60 pt-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Official Roster:</strong> Overall Ranks 1
                      through 4 from the National Finals.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Cohort Eligibility:</strong> Open to all
                      registered finalists, including graduating Grade 12 seniors.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Alternates:</strong> Overall Ranks 5 and 6
                      serve as designated primary alternates.
                    </span>
                  </div>
                </div>
              </div>

              {/* Team B: APOAI Russia */}
              <div className="rounded-sm border border-border bg-surface/60 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Team B // Regional Stage
                  </span>
                  <span className="rounded-sm border border-border bg-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    Date TBD (Target: Q2)
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                  APOAI Development Delegation (Russia)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Regional talent development olympiad cultivating multi-year Philippine AI athletic
                  pipelines.
                </p>

                <div className="mt-6 space-y-4 border-t border-border/60 pt-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Official Roster:</strong> Top 4
                      non-graduating students (Kindergarten through Grade 11) from the National
                      Finals.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Dual-Qualification Policy:</strong> Dual
                      qualification is permitted. Eligible underclassmen ranking in the Top 4
                      overall earn concurrent appointment to both Team A and Team B.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-3.5 w-3.5 text-primary shrink-0" />
                    <span>
                      <strong className="text-foreground">Cascading Protocol:</strong> If graduating
                      seniors occupy Top 4 seats, APOAI spots cascade to the highest-ranking
                      underclassmen within the Top 31, and subsequently to Stage 4 standings if
                      needed.
                    </span>
                  </div>
                </div>
              </div>

              {/* Early APOAI Date Contingency */}
              <div className="rounded-sm border border-border bg-surface/40 p-6 sm:p-8 md:col-span-2">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                  <AlertCircle className="h-4 w-4" />
                  <span>Early APOAI Date Contingency</span>
                </div>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  If APOAI scheduling dictates delegation confirmation prior to the National Finals,
                  the 4-student junior roster will be selected from the top non-graduating
                  candidates from the Stage 4 (Semi-Finals) standings. Eligible non-graduating Tier
                  1 seeds who wish to be considered for early APOAI selection may sit Stage 4 as a
                  non-eliminatory benchmarking round to be ranked on the common leaderboard. The
                  national committee will make best efforts to field an onsite delegation in Russia,
                  activating a Manila-based remote center only if operational constraints require
                  it.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: TRAVEL LOGISTICS & ADMINISTRATIVE CLEARANCES */}
          <section id="logistics" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Plane className="h-3.5 w-3.5" />
              <span>06 // logistics.travel_clearances</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              6. Travel Logistics &amp; Administrative Clearances
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Protocols governing domestic transit, international documentation, and academic
              calendar coordination.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">Feb 19, 2027</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Finals Deployment
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Non-Metro Manila finalists arrive in Quezon City on Friday, February 19, 2027.
                  Technical dry runs, hardware audits, and identity checks take place Friday
                  afternoon.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">Feb 2028 Min. Validity</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Passports &amp; Visas
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  All finalists must hold a passport valid through at least February 2028. Russian
                  consular processing begins immediately upon APOAI roster finalization. Singapore
                  travel is visa-exempt for Philippine passport holders.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-6">
                <div className="font-mono text-xs text-primary">Post-Graduation Pacing</div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  Academic Alignment
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Intensive national training transitions into full-time, in-person laboratory
                  simulations only after high school graduation ceremonies and academic clearances
                  conclude in late May.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7: GRIEVANCE & APPEALS PROCEDURE */}
          <section id="appeals" className="scroll-mt-32">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              <Scale className="h-3.5 w-3.5" />
              <span>07 // due_process.appeals</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              7. Grievance &amp; Appeals Procedure
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Standardized institutional due process ensuring fair adjudication of technical and
              evaluative inquiries across all stages.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-sm border border-border bg-surface/60 p-5">
                <span className="font-mono text-xs font-semibold text-primary">48-Hour Window</span>
                <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                  Filing Protocol
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Formal petitions must be submitted in writing within 48 hours of official result
                  publication or notice of infraction. Late submissions are not entertained.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-5">
                <span className="font-mono text-xs font-semibold text-primary">
                  Scientific Committee
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                  Reviewing Authority
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Adjudicated by the IOAIPH Scientific Committee. Each panel includes at least one
                  arbiter independent of the contested preliminary decision.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-5">
                <span className="font-mono text-xs font-semibold text-primary">
                  Frozen Standing
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                  Status Pending Review
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Candidate's standing remains frozen at their pre-appeal status—neither advanced
                  nor eliminated until a formal resolution is rendered.
                </p>
              </div>

              <div className="rounded-sm border border-border bg-surface/60 p-5">
                <span className="font-mono text-xs font-semibold text-primary">
                  3-Day Turnaround
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                  Final &amp; Executory
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Petitions are resolved within 3 business days. Decisions are final and executory,
                  except upon presentation of verified new technical evidence.
                </p>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA CALLOUT */}
          <div className="rounded-sm border border-primary/30 bg-surface/50 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  // campaign.registration
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Ready to represent the Philippines?
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Open registration closes on November 11, 2026. Apply now to enter Stage 1
                  screening for Singapore (IOAI) and Russia (APOAI).
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://forms.gle/Xoiq3YQE3Z3HqATG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
                >
                  <span>Register for 2027 →</span>
                </a>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40"
                >
                  <span>Read FAQ →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
