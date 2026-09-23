import { createFileRoute, redirect } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { VolunteerPathwaySwitcher } from "@/components/volunteer-pathway-switcher";
import fellowsData from "@/data/fellows.json";
import {
  Code,
  GraduationCap,
  Terminal,
  ShieldCheck,
  Award,
  FileCheck2,
  Users2,
  FileText,
  ArrowRight,
  Cpu,
} from "lucide-react";

// Legacy URL; the page is served at /volunteer/fellow
export const Route = createFileRoute("/_site/fellows")({
  beforeLoad: () => {
    throw redirect({ to: "/volunteer/fellow", statusCode: 301 });
  },
});

type Fellow = {
  id: string;
  isPlaceholder?: boolean;
  name: string;
  university: string;
  degree: string;
  location: string;
  cohort: string;
  photoUrl?: string;
  focusAreas?: string[];
  status?: string;
  bio?: string;
};

export function FellowsPage() {
  const fellows = (fellowsData as Fellow[]) || [];

  return (
    <div className="relative min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative -mt-24 overflow-hidden border-b border-border/60 bg-background pt-28 pb-16 md:pt-36 md:pb-24">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[780px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span>// volunteer.fellows</span>
            <span>·</span>
            <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-medium">
              University &amp; Graduate Leadership
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            IOAI Philippines <span className="text-primary">Collegiate Fellows</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A technical fellowship for university students to deliver regional machine learning
            workshops, mentor high school clubs, test Olympiad problem sets, and support national
            selection logistics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              <span>Apply for Fellowship</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#directory"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface/60 px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:bg-surface"
            >
              <span>Explore Tracks</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-4">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">
                Undergrad &amp; Grad
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Eligible Levels
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">
                Python &amp; PyTorch
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Technical Stack
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Academic Term</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Cohort Cadence
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Attribution</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Curriculum Authorship
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="border-b border-border/60 bg-surface/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // fellowship.responsibilities
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Core Fellowship Responsibilities
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Fellows bridge university AI research with secondary school grassroots, training young
            Olympiad aspirants while stress-testing national competition infrastructure.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Technical Workshops
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Run hands-on bootcamps covering linear algebra, calculus for ML, PyTorch pipelines,
                computer vision, and NLP for secondary students.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                High School Mentorship
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Act as dedicated academic advisors to high school AI clubs, guiding student leaders
                through Olympiad syllabus topics and technical roadblocks.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Task Benchmarking
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Implement baseline models and stress-test candidate problems for the National
                Selection exam to ensure fair GPU time limits and dataset hygiene.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Proctoring &amp; Operations
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Serve as certified technical proctors during online and on-site national selection
                rounds, overseeing submission pipelines and system integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="border-b border-border/60 bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // fellow.perks
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Fellow Incentives &amp; Recognition
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We invest deeply in our fellows, offering academic, professional, and research
            credentials that accelerate careers in artificial intelligence.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-sm border border-border bg-surface/60 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Certificate of Fellowship
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Official institutional citation endorsed by Ateneo BUILD and the IOAI Philippines
                Executive Committee recognizing specialized service.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/60 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Curriculum Co-Authorship
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Public co-authorship credit on open-source training modules, practice problem
                repositories, and technical guides published by IOAI-PH.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/60 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Users2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Scientific Collaboration
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Direct working relationships with national coaches, university professors, and
                leading industry practitioners across the Philippine AI ecosystem.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/60 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Recommendation Letters
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Personalized letters from the Executive Director and Senior Coaches for graduate
                school admissions, research fellowships, and industry roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section
        id="directory"
        className="scroll-mt-32 border-b border-border/60 bg-surface/20 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                // active_cohort.fellows
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Collegiate Fellow Directory
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Technical mentorship and task validation tracks open for university and graduate
                students.
              </p>
            </div>

            <div className="font-mono text-xs text-muted-foreground">
              Cohort: <span className="text-primary font-semibold">Inaugural (2026–2027)</span>
            </div>
          </div>

          {/* Status Notice Banner */}
          <div className="mt-8 rounded-sm border border-dashed border-primary/40 bg-primary/5 p-4 text-center">
            <p className="font-mono text-xs font-medium text-primary sm:text-sm">
              Applications for the 2026–2027 Inaugural Cohort are currently open. Available track
              assignments are listed below.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fellows.map((slot) => (
              <div
                key={slot.id}
                className="flex flex-col justify-between rounded-sm border border-dashed border-border/80 bg-surface/60 p-6 text-center transition-all duration-200 hover:border-primary/50 hover:bg-surface"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-medium uppercase tracking-wider text-primary">
                      {slot.location || "Philippines"}
                    </span>
                    <span className="text-muted-foreground">{slot.cohort || "2026–2027"}</span>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-border bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <GraduationCap className="h-9 w-9 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-sm font-bold text-foreground">
                    {slot.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-medium text-primary">{slot.degree}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {slot.university}
                  </p>

                  {(slot.focusAreas || []).length > 0 && (
                    <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                      {(slot.focusAreas || []).map((area) => (
                        <span
                          key={area}
                          className="inline-flex items-center gap-1 rounded-sm border border-border/70 bg-background/70 px-2 py-0.5 font-mono text-[10px] text-foreground"
                        >
                          <Cpu className="h-2.5 w-2.5 text-primary" />
                          {area}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{slot.bio}</p>
                </div>

                <div className="mt-5 border-t border-border/60 pt-3">
                  <a
                    href="#apply"
                    className="font-mono text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    Submit Application →
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
                  // fellowship.intake
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Shape the Next Generation of Filipino AI Talent
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Applications are reviewed on a rolling semester basis. Fellowships offer flexible
                  hybrid hours coordinated around your university exam calendar.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://forms.gle/CYiHnr8i2owtnRKi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
                >
                  <span>Apply for Fellowship →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAY SWITCHER */}
      <VolunteerPathwaySwitcher currentPathway="fellows" />
    </div>
  );
}
