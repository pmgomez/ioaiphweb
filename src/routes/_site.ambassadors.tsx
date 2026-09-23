import { useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { VolunteerPathwaySwitcher } from "@/components/volunteer-pathway-switcher";
import ambassadorsData from "@/data/ambassadors.json";
import { Users, Building2, BookOpen, ArrowRight, UserCheck, Sparkles } from "lucide-react";

// Legacy URL; the page is served at /volunteer/ambassador
export const Route = createFileRoute("/_site/ambassadors")({
  beforeLoad: () => {
    throw redirect({ to: "/volunteer/ambassador", statusCode: 301 });
  },
});

type Ambassador = {
  id: string;
  isPlaceholder?: boolean;
  name: string;
  school: string;
  location: string;
  region: string;
  cohort: string;
  photoUrl?: string;
  profileUrl?: string;
  bio?: string;
};

const REGIONS = ["All", "NCR", "Luzon", "Visayas", "Mindanao"] as const;

export function AmbassadorsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const ambassadors = (ambassadorsData as Ambassador[]) || [];

  const filteredAmbassadors =
    selectedRegion === "All"
      ? ambassadors
      : ambassadors.filter((item) => item.region === selectedRegion);

  return (
    <div className="relative min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative -mt-24 overflow-hidden border-b border-border/60 bg-background pt-28 pb-16 md:pt-36 md:pb-24">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[780px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <span>// volunteer.ambassadors</span>
            <span>·</span>
            <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-medium">
              Student Leadership (Grades 7–12)
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            IOAI Philippines <span className="text-primary">High School Ambassadors</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Empowering Filipino secondary school students to champion artificial intelligence
            education, establish campus AI and coding clubs, and mobilize peers for the official
            IOAI Philippines National Selection.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              <span>Apply as an Ambassador</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#directory"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface/60 px-5 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/40 hover:bg-surface"
            >
              <span>Explore Open Slots</span>
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-4">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Grades 7–12</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Eligible Levels
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">All Regions</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Luzon, Visayas, Mindanao
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">2–4 hrs/mo</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Time Commitment
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Official</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                DepEd &amp; IOAI Recognition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="border-b border-border/60 bg-surface/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // ambassador.role
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Core Responsibilities
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ambassadors act as the primary catalysts for artificial intelligence education within
            their campuses and surrounding communities.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Found Campus Chapters
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Establish an official AI club, machine learning study group, or competitive
                programming circle at your high school.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Drive Registration
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Mobilize classmates and neighboring schools to participate in the annual IOAI
                Philippines National Selection rounds.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Organize Study Circles
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Host peer-led sessions reviewing foundational Python syntax, core machine learning
                principles, and past contest tasks.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-surface/70 p-6 transition-all hover:border-primary/40">
              <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                <UserCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Faculty Coordination
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Coordinate with school administrators, STEM heads, and computer laboratory managers
                to secure institutional backing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section
        id="directory"
        className="scroll-mt-32 border-b border-border/60 bg-background py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                // cohort.roster
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Ambassador Directory
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Inaugural Cohort slots open for secondary school leaders across the country.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`rounded-sm px-3 py-1 transition-all ${
                    selectedRegion === region
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "border border-border bg-surface/60 text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Status Banner */}
          <div className="mt-8 rounded-sm border border-dashed border-primary/40 bg-primary/5 p-4 text-center">
            <p className="font-mono text-xs font-medium text-primary sm:text-sm">
              Applications for the 2026–2027 Inaugural Cohort are currently open. Available regional
              slots are listed below.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredAmbassadors.map((slot) => (
              <div
                key={slot.id}
                className="flex flex-col justify-between rounded-sm border border-dashed border-border/80 bg-surface/60 p-6 text-center transition-all duration-200 hover:border-primary/50 hover:bg-surface"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-medium uppercase tracking-wider text-primary">
                      {slot.region}
                    </span>
                    <span className="text-muted-foreground">{slot.cohort}</span>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-border bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <Sparkles className="h-9 w-9 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-sm font-bold text-foreground">
                    {slot.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-medium text-primary">{slot.school}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{slot.bio}</p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-3">
                  <a
                    href="#apply"
                    className="font-mono text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    Apply for this slot →
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
                  // ambassador.intake
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Lead the AI Movement in Your High School
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Applications are evaluated on a rolling basis. High school students of all
                  programming experience levels are encouraged to apply.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://forms.gle/CYiHnr8i2owtnRKi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:opacity-90"
                >
                  <span>Submit Application →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAY SWITCHER */}
      <VolunteerPathwaySwitcher currentPathway="ambassadors" />
    </div>
  );
}
