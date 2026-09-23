import { createFileRoute, redirect } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { VolunteerPathwaySwitcher } from "@/components/volunteer-pathway-switcher";
import coachesData from "@/data/coaches.json";
import {
  Binary,
  GraduationCap,
  FlaskConical,
  ShieldAlert,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

// Legacy URL; the page is served at /volunteer/coach
export const Route = createFileRoute("/_site/coaches")({
  beforeLoad: () => {
    throw redirect({ to: "/volunteer/coach", statusCode: 301 });
  },
});

type Coach = {
  id: string;
  isPlaceholder?: boolean;
  name: string;
  role: string;
  affiliation: string;
  specialization: string;
  status?: string;
  photoUrl?: string;
  linkedinUrl?: string;
  bio?: string;
};

export function CoachesPage() {
  const coaches = (coachesData as Coach[]) || [];

  return (
    <div className="relative min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative -mt-24 overflow-hidden border-b border-border/60 bg-background pt-28 pb-16 md:pt-36 md:pb-24">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[780px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span>// volunteer.coaches</span>
            <span>·</span>
            <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-medium">
              Scientific Committee &amp; Team Training
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            IOAI Philippines <span className="text-primary">Coaches &amp; Problem Setters</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Join the scientific leadership responsible for designing rigorous national selection
            tasks and preparing the Philippine National Delegation for the International Olympiad in
            Artificial Intelligence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              <span>Apply as a Coach</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#roster"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface/60 px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:bg-surface"
            >
              <span>View Open Roles</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-4">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Scientific Body</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Problem Setting Committee
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">
                PyTorch &amp; ML
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Official Benchmark Stack
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Team PH</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                National Training Pool
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">International</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                IOAI &amp; APOAI Delegation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="border-b border-border/60 bg-surface/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // coaches.duties
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How Coaches Contribute
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Coaches drive the core competitive and scientific integrity of the national selection
            pipeline and international training camp.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Binary className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Author Contest Problems
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Design original theoretical questions and end-to-end practical machine learning
                tasks with curated datasets and automated scoring scripts.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                National Training Camps
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Train the top national finalists in intensive bootcamps, covering modern transformer
                architectures, vision backbones, and contest heuristics.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Task Verification
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Peer-review candidate tasks, implement baseline solutions, check GPU runtime
                constraints, and eliminate dataset leaks.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                International Mentorship
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Accompany Team Philippines as team leaders and scientific observers during the
                international Olympiad rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROSTER SECTION */}
      <section id="roster" className="scroll-mt-32 border-b border-border/60 bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                // scientific_committee.roster
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Scientific Committee &amp; Coaching Staff
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Problem setters, validators, and national team trainers.
              </p>
            </div>

            <div className="font-mono text-xs text-muted-foreground">
              Cycle: <span className="text-primary font-semibold">2026–2027</span>
            </div>
          </div>

          {/* Status Notice */}
          <div className="mt-8 rounded-sm border border-dashed border-primary/40 bg-primary/5 p-4 text-center">
            <p className="font-mono text-xs font-medium text-primary sm:text-sm">
              The Scientific Committee is evaluating volunteer applications for task authors,
              validators, and team trainers.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((slot) => (
              <div
                key={slot.id}
                className="flex flex-col justify-between rounded-sm border border-dashed border-border/80 bg-surface/60 p-6 text-center transition-all duration-200 hover:border-primary/50 hover:bg-surface"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-medium uppercase tracking-wider text-primary">
                      {slot.role}
                    </span>
                    <span className="text-muted-foreground">Open Role</span>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-border bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <BrainCircuit className="h-9 w-9 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-sm font-bold text-foreground">
                    {slot.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-medium text-primary">
                    {slot.specialization}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {slot.affiliation}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{slot.bio}</p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-3">
                  <a
                    href="#apply"
                    className="font-mono text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    Join Coaching Staff →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section id="apply" className="scroll-mt-32 border-b border-border/60 bg-surface/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-sm border border-primary/30 bg-surface/50 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  // coaches.intake
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Train the Philippine National AI Team
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  We welcome machine learning engineers, academic researchers, and competitive
                  programming alumni committed to mentoring national talent.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://forms.gle/CYiHnr8i2owtnRKi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
                >
                  <span>Apply as a Coach →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAY SWITCHER */}
      <VolunteerPathwaySwitcher currentPathway="coaches" />
    </div>
  );
}
