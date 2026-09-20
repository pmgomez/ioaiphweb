import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass } from "lucide-react";

interface PathwayOption {
  prompt: string;
  label: string;
  href: string;
  badge: string;
  description: string;
}

interface VolunteerPathwaySwitcherProps {
  currentPathway: "ambassadors" | "fellows" | "coaches";
}

export function VolunteerPathwaySwitcher({ currentPathway }: VolunteerPathwaySwitcherProps) {
  const allPathways: Record<"ambassadors" | "fellows" | "coaches", PathwayOption> = {
    ambassadors: {
      prompt: "Looking for high school student outreach and campus leadership?",
      label: "High School Ambassadors",
      href: "/volunteer/ambassador",
      badge: "Grades 7–12",
      description:
        "Establish campus AI clubs, host local study circles, and mobilize secondary students for national selection.",
    },
    fellows: {
      prompt: "Are you an undergraduate or graduate student majoring in CS, Math, or Engineering?",
      label: "Collegiate Fellows Program",
      href: "/volunteer/fellow",
      badge: "University & Graduate",
      description:
        "Deliver regional ML workshops, benchmark Olympiad tasks, and mentor high school AI clubs.",
    },
    coaches: {
      prompt: "Are you an experienced ML researcher, engineer, or Olympiad veteran?",
      label: "National Team Coaches & Problem Setters",
      href: "/volunteer/coach",
      badge: "Scientific Leadership",
      description:
        "Author official selection problems, peer-review task suites, and train Team Philippines for the world stage.",
    },
  };

  const otherPathways = (
    Object.keys(allPathways) as Array<"ambassadors" | "fellows" | "coaches">
  ).filter((key) => key !== currentPathway);

  return (
    <section className="border-t border-border/60 bg-surface/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          <Compass className="h-3.5 w-3.5" />
          <span>// volunteer.pathways</span>
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Explore Other Volunteer Pathways
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          IOAI Philippines operates distinct leadership pipelines tailored to secondary students,
          university fellows, and scientific researchers.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {otherPathways.map((key) => {
            const p = allPathways[key];
            return (
              <Link
                key={key}
                to={p.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-surface/60 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-surface/90 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex rounded-sm bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      {p.badge}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {p.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-border/60 pt-3 font-mono text-xs text-primary">
                  <span>Explore this pathway →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
