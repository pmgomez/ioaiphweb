import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/_site/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — IOAI Philippines" },
      {
        name: "description",
        content:
          "Answers to common questions about IOAI Philippines: eligibility, the 2027 national selection pipeline, direct seeding, competition mechanics, and sponsorship.",
      },
      { property: "og:title", content: "FAQ — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Answers to common questions about IOAI Philippines: eligibility, the 2027 national selection pipeline, direct seeding, competition mechanics, and sponsorship.",
      },
    ],
    links: [canonical("/faq")],
  }),
  component: FAQ,
});

type QA = { q: string; a: React.ReactNode };
type Group = { cat: string; items: QA[] };

const groups: Group[] = [
  {
    cat: "General & Global Finals",
    items: [
      {
        q: "What is the IOAI, and who oversees the Philippine delegation?",
        a: "The International Olympiad in Artificial Intelligence (IOAI) is the premier global championship challenging young minds in machine learning, deep learning architectures, computer vision, natural language processing, and AI ethics. Ateneo BUILD serves as the accredited, sole Philippine Country Coordinator responsible for managing national talent scouting, testing infrastructure, and team training.",
      },
      {
        q: "When and where are the 2027 international competitions?",
        a: "Team Philippines will field delegations across two major tournaments in 2027: the flagship IOAI 2027 Global Finals in Singapore (July 4–10, 2027) and the Asia-Pacific Olympiad in Artificial Intelligence (APOAI 2027) in Russia (April–June 2027 window).",
      },
      {
        q: "When does the 2027 national selection cycle run?",
        a: "The 2027 cycle opens for nationwide public registration on September 12, 2026, and closes on November 11, 2026. Selection testing runs sequentially from Stage 1 Eliminations (November 16–22, 2026) through the onsite National Finals (February 20–21, 2027).",
      },
      {
        q: "How does the dual-delegation selection work for Singapore and Russia?",
        a: "The official delegations are selected directly from the aggregate standings of the Stage 5 National Finals. Ranks 1 through 4 earn seats on the primary IOAI Singapore delegation (open to all students, including graduating Grade 12 seniors). The top 4 non-graduating students (Kindergarten through Grade 11) earn seats on the APOAI Russia junior development delegation.",
      },
    ],
  },
  {
    cat: "Qualifications, Eligibility, & National Pool",
    items: [
      {
        q: "Who is eligible to compete in the 2027 national selection cycle?",
        a: "The 2027 cycle is open to all Filipino K-12 students worldwide who are enrolled in an accredited primary or secondary institution (Kindergarten through Grade 12, or equivalent) on or after December 1, 2026, across public, private, science high schools, or homeschool programs. Contestants must be born on or after July 1, 2007.",
      },
      {
        q: "Are overseas Filipino students eligible to join Team Philippines?",
        a: "Yes. Filipino citizens enrolled in primary or secondary schools abroad are fully eligible to compete. Overseas qualifiers participate remotely through Stage 4 (Semi-Finals) under synchronized online proctoring. Contestants who advance to Stage 5 (National Finals) must compete in person in Metro Manila.",
      },
      {
        q: "Are homeschooled students eligible to join?",
        a: "Yes. Homeschooled Filipino K-12 students, whether based in the Philippines or abroad, are fully eligible under standard competition regulations.",
      },
      {
        q: "Is this an individual or team competition?",
        a: "The national selection pipeline is strictly an individual competition across all five stages. Once selected at the National Finals, delegates train collaboratively during the Pre-Departure Boot Camp and compete as unified national teams representing the Philippines.",
      },
      {
        q: "How does the 2027 multi-stage selection funnel work?",
        a: "The pipeline consists of five progressive stages: Stage 1 Eliminations (7-day asynchronous online screening, Open Pool to Top 300); Stage 2 Qualifiers (timed online proctored sprint, 300 to 80); Stage 3 Quarter-Finals (5-hour online proctored contest, 80 to 40); Stage 4 Semi-Finals (hybrid sprint, 40 to 24); and Stage 5 National Finals (two 6-hour onsite contest days at the Ateneo CTC Build Lab, crowning the national delegations).",
      },
      {
        q: "Are returning 2026 international medalists exempt from early rounds?",
        a: "Yes, under our additive direct-seeding policy (+N principle). Returning 2026 IOAI and APOAI medalists advance directly to Stage 5 (National Finals) without displacing any open qualifiers. Returning 2026 APOAI Honorable Mentions advance directly to Stage 4 (Semi-Finals). All direct seeds must be enrolled K-12 students for SY 2026–2027 and complete registration by November 11, 2026.",
      },
      {
        q: "Are there any registration or examination fees?",
        a: "No. Participation across every domestic round of the IOAI Philippines selection cycle is entirely free of charge.",
      },
      {
        q: "Can I participate in IOAI alongside other International Science Olympiads?",
        a: "Yes. Students are welcome to compete in informatics (NOI/IOI), mathematics (IMO), physics (IPhO), chemistry (IChO), linguistics (IOL), among others. Our master calendar is scheduled around major examination blocks and international fixtures.",
      },
    ],
  },
  {
    cat: "Competition Mechanics, Hardware, & Preparation",
    items: [
      {
        q: "What technical competencies are tested across the selection rounds?",
        a: "Early rounds emphasize algorithmic logic, linear algebra, probability, and introductory machine learning. Advanced stages require implementing and evaluating deep neural networks, computer vision models, NLP architectures, audio processing pipelines, and AI ethics frameworks in Python.",
      },
      {
        q: "Where can I find the official syllabus?",
        a: (
          <>
            The topics align with the{" "}
            <a
              href="https://ioai-official.org/wp-content/uploads/2025/10/Syllabus.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Official IOAI Syllabus
            </a>
            , covering supervised/unsupervised machine learning, deep learning architectures,
            generative models, and evaluation methodologies.
          </>
        ),
      },
      {
        q: "What hardware and connectivity do I need for the online stages?",
        a: "Participants need a computer with reliable internet access and Python development tooling. Stages 2, 3, and 4 require a functional webcam, screen-sharing, and screen-recording setup for proctored validation.",
      },
      {
        q: "What is the hardware and BYOD policy for the onsite National Finals?",
        a: "The National Finals are hosted at the Ateneo CTC Build Lab with dedicated, high-performance desktop workstations and idling hot-swap spares. Finalists may also opt to Bring Your Own Device (BYOD), subject to pre-contest environment inspection.",
      },
      {
        q: "How does the contest appeals and grievance procedure work?",
        a: "Contestants may submit written appeals regarding grading results, proctoring flags, or environment checks within 48 hours of official posting. Appeals are independently evaluated by the IOAIPH Scientific Committee and resolved within 3 business days.",
      },
      {
        q: "Will participants receive performance certificates?",
        a: "Yes. Verifiable digital certificates are awarded to all students who submit valid work in the qualification rounds, with tiered credentials awarded to Stage Qualifiers, Quarter-Finalists, Semi-Finalists, and National Finalists.",
      },
    ],
  },
  {
    cat: "Support, Sponsorship, & Media",
    items: [
      {
        q: "How can corporate or institutional partners sponsor the 2027 season?",
        a: (
          <>
            Organizations can sponsor compute infrastructure, training boot camps, and delegate
            travel for Singapore and Russia. For partnership tiers and prospectus inquiries, visit
            our{" "}
            <a
              href="/partnerships"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Partnerships page
            </a>{" "}
            or contact{" "}
            <a href="mailto:info@ioaiph.org" className="font-mono text-primary">
              info@ioaiph.org
            </a>
            .
          </>
        ),
      },
      {
        q: "Who should members of the press contact for media assets and interview requests?",
        a: (
          <>
            Direct all press inquiries, high-resolution media requests, and interview coordination
            to{" "}
            <a href="mailto:press@ioaiph.org" className="font-mono text-primary">
              press@ioaiph.org
            </a>
            .
          </>
        ),
      },
      {
        q: "Where can I ask a question not answered here?",
        a: (
          <>
            Reach out to our secretariat directly at{" "}
            <a href="mailto:info@ioaiph.org" className="font-mono text-primary">
              info@ioaiph.org
            </a>
            .
          </>
        ),
      },
    ],
  },
];

function reactNodeToText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToText).join(" ");
  if (typeof node === "object" && "props" in (node as object)) {
    // @ts-expect-error - children may not exist on all element types
    return reactNodeToText((node as React.ReactElement).props?.children);
  }
  return "";
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig"));
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-primary/20 text-foreground">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

function FAQ() {
  const [open, setOpen] = useState<string | null>("0-0");
  const [query, setQuery] = useState("");
  const q = query.trim();

  const filtered = q
    ? groups
        .map((g) => ({
          ...g,
          items: g.items.filter((it) => {
            const hay = `${it.q} ${reactNodeToText(it.a)}`.toLowerCase();
            return hay.includes(q.toLowerCase());
          }),
        }))
        .filter((g) => g.items.length > 0)
    : groups;

  const totalMatches = filtered.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-background">
        <NeuralNetworkBg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // help.index · cycle_2027
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Frequently asked, clearly answered.
          </h1>
          <p className="mt-6 font-mono text-xs text-muted-foreground">Updated 7 September 2026</p>

          <div className="relative mt-10 max-w-2xl">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-primary">
              ⌕
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions and answers…"
              aria-label="Search FAQ"
              className="w-full rounded-sm border border-border bg-surface/60 py-4 pl-10 pr-32 font-mono text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none"
            />
            {q && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:border-primary/40 hover:text-primary"
              >
                Clear
              </button>
            )}
            {q && (
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {totalMatches} match{totalMatches === 1 ? "" : "es"}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-16">
          {filtered.length === 0 ? (
            <div className="rounded-sm border border-dashed border-border p-10 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                // no_results
              </div>
              <p className="mt-3 text-muted-foreground">
                Nothing matches "{q}". Try a different keyword or email{" "}
                <a href="mailto:info@ioaiph.org" className="font-mono text-primary">
                  info@ioaiph.org
                </a>
                .
              </p>
            </div>
          ) : (
            filtered.map((g) => {
              const gi = groups.indexOf(groups.find((og) => og.cat === g.cat)!);
              return (
                <div key={g.cat}>
                  <div className="flex items-baseline gap-4 border-b border-border pb-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      0{gi + 1}
                    </div>
                    <h2 className="font-display text-2xl font-semibold">{g.cat}</h2>
                  </div>
                  <div className="mt-2 divide-y divide-border">
                    {g.items.map((it) => {
                      const ii = groups[gi].items.indexOf(it);
                      const key = `${gi}-${ii}`;
                      const isOpen = q ? true : open === key;
                      return (
                        <div key={key}>
                          <button
                            type="button"
                            onClick={() => setOpen(isOpen && !q ? null : key)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
                          >
                            <span className="font-display text-lg font-medium">
                              {highlight(it.q, q)}
                            </span>
                            <span className="font-mono text-xs text-primary">
                              {isOpen ? "[ − ]" : "[ + ]"}
                            </span>
                          </button>
                          {isOpen && <div className="pb-6 pr-12 text-muted-foreground">{it.a}</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-20 rounded-sm border border-border bg-surface p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            // still_stuck?
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold">We read every message.</h3>
          <p className="mt-2 text-muted-foreground">
            Reach the program team directly at{" "}
            <a href="mailto:info@ioaiph.org" className="font-mono text-primary">
              info@ioaiph.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
