import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NeuralNetworkBg } from "@/components/neural-network-bg";

export const Route = createFileRoute("/_site/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — IOAI Philippines" },
      { name: "description", content: "Answers to common questions about the IOAI Philippines selection process, training, and team." },
    ],
  }),
  component: FAQ,
});

const groups = [
  {
    cat: "Eligibility",
    items: [
      { q: "Who can apply?", a: "Any Filipino citizen or permanent resident enrolled in senior high school or first-year college as of the qualifier date. There is no minimum GPA requirement — selection is based purely on the technical assessment." },
      { q: "Is there an age limit?", a: "Yes. Following IOAI international rules, contestants must be 20 years old or younger on the first day of competition (Aug 2, 2025 for the current cycle)." },
      { q: "I'm homeschooled / from a small school. Can I still compete?", a: "Absolutely. We have no school accreditation requirement. Past finalists have come from public schools, private academies, ALS programs, and homeschool co-ops." },
    ],
  },
  {
    cat: "Selection process",
    items: [
      { q: "What does the qualifier cover?", a: "Linear algebra, calculus, probability, classical machine learning, deep learning fundamentals, and short applied problems in NLP and computer vision. A topic syllabus is published two months before the test." },
      { q: "Is there an application fee?", a: "No. The program is free end-to-end. Stipends are provided to bootcamp finalists to cover transportation and lodging in Manila." },
      { q: "How is the final team of 4 chosen?", a: "After the two-week national bootcamp, contestants take a final selection exam and complete a practical project. The top 4 by combined score become Team PH; the next 2 are reserves." },
    ],
  },
  {
    cat: "Training & competition",
    items: [
      { q: "What does the training look like?", a: "Eight hours of structured instruction per day during bootcamp, including problem sets, lab sessions, and mock competitions. Post-selection, finalists receive an additional six weeks of intensive coaching." },
      { q: "Who are the coaches?", a: "Active researchers and engineers from UP Diliman, Ateneo, DLSU, plus visiting mentors from international AI labs and industry." },
      { q: "What happens at IOAI Astana?", a: "Eight days of competition split between a scientific round (theoretical and applied ML) and a practical round (build an AI system under time constraints). Medals are awarded to roughly 50% of contestants." },
    ],
  },
];

function FAQ() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <>
      <section className="relative border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// help.index</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Frequently asked, clearly answered.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-16">
          {groups.map((g, gi) => (
            <div key={g.cat}>
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">0{gi+1}</div>
                <h2 className="font-display text-2xl font-semibold">{g.cat}</h2>
              </div>
              <div className="mt-2 divide-y divide-border">
                {g.items.map((it, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
                      >
                        <span className="font-display text-lg font-medium">{it.q}</span>
                        <span className="font-mono text-xs text-primary">{isOpen ? "[ − ]" : "[ + ]"}</span>
                      </button>
                      {isOpen && (
                        <div className="pb-6 pr-12 text-muted-foreground">{it.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-sm border border-border bg-surface p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// still_stuck?</div>
          <h3 className="mt-3 font-display text-2xl font-semibold">We read every message.</h3>
          <p className="mt-2 text-muted-foreground">Reach the program team directly at <span className="text-primary font-mono">team@ioai.ph</span>.</p>
        </div>
      </section>
    </>
  );
}
