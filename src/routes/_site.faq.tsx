import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NeuralNetworkBg } from "@/components/neural-network-bg";

export const Route = createFileRoute("/_site/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — IOAI Philippines" },
      {
        name: "description",
        content:
          "Answers to common questions about IOAI Philippines: eligibility, selection, competition mechanics, sponsorship, and media.",
      },
    ],
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
        a: "The International Olympiad in Artificial Intelligence (IOAI) is an elite global competition for high school students designed to challenge skills in mainstream AI concepts, machine learning, and data science. Ateneo BUILD serves as the accredited, sole Philippine Country Coordinator responsible for national selection and delegation management.",
      },
      {
        q: "When and where are the Global Finals?",
        a: "The 2026 IOAI Global Finals will take place from August 2 to August 8, 2026, in Astana, Kazakhstan. The 2027 IOAI Global Finals will take place from July 4 to July 10, 2027 in Singapore.",
      },
      {
        q: "Has the Philippine team already been selected for the current cycle?",
        a: "Yes. Following the conclusion of the National Eliminations, Semi-Finals, National Finals, and the Team Selection Bootcamp in March 2026, the official national delegation representing the Philippines has been finalized.",
      },
      {
        q: "When will applications open for the next national selection cycle?",
        a: "The registration portal for the 2027 selection cycle will officially open in November 2026. Sign up for updates on our main page to receive immediate notification when the portal goes live.",
      },
    ],
  },
  {
    cat: "Qualifications, Eligibility, & National Pool",
    items: [
      {
        q: "Who is eligible to compete in the national selection rounds?",
        a: "For the 2027 cycle, any Filipino high school student, whether residing within the Philippines or living and studying abroad, is eligible to compete.",
      },
      {
        q: "I am a Filipino citizen living and studying overseas. Am I eligible to join Team Philippines?",
        a: "Yes. Under the updated IOAI and APOAI Rules and Regulations, students are permitted to represent their country of citizenship. Consequently, starting with the 2027 selection cycle (opening November 2026), Filipino students residing or enrolled in institutions abroad can formally enter the IOAIPH qualification track.",
      },
      {
        q: "Are homeschooled students eligible to join?",
        a: "Yes. Homeschooled Filipino students, whether based domestically or internationally, are fully qualified to participate under standard competition regulations.",
      },
      {
        q: "Is this a team or individual competition?",
        a: "The initial national selection phases are strictly individual contests. The final four-student national team selected during the Bootcamp phase will collaborate, train, and compete as a unified unit during the Global Finals.",
      },
      {
        q: "Are there other international opportunities if I make the National Training Pool but am not chosen for the final IOAI four-student team?",
        a: "Yes. While securing gold at the IOAI remains the ultimate objective, IOAI Philippines extends accredited international opportunities to the broader National Training Pool. Members of the pool will be fielded to represent Team Philippines in other recognized continental, regional, and specialized tournaments, including the Northern Eurasia Olympiad in Artificial Intelligence (NEOAI), the Asia-Pacific Olympiad in Artificial Intelligence (APOAI), and other global fixtures requiring official national delegations.",
      },
      {
        q: "Are there any registration or participation fees?",
        a: "No. Participation across all domestic selection stages organized by IOAI Philippines is entirely free of charge.",
      },
      {
        q: "Can I participate in both the IOAI and other International Science Olympiads (e.g., NOI/IOI, IMO, IPhO)?",
        a: "Yes. IOAI Philippines permits and welcomes students to qualify across multiple international frameworks. Participants must independently verify schedule conflicts, rules, and eligibility regulations with the other respective organizing committees.",
      },
    ],
  },
  {
    cat: "Competition Mechanics & Preparation",
    items: [
      {
        q: "What knowledge and technical skills are required to participate?",
        a: "The foundational rounds prioritize logical reasoning, algorithmic thinking, and baseline technical literacy. Success in advanced selection stages requires familiarity with the official IOAI Syllabus, which covers core machine learning architectures, data processing frameworks, and evaluation metrics.",
      },
      {
        q: "Where can I find the official syllabus?",
        a: (
          <>
            The comprehensive scope of topics is delineated in the{" "}
            <a
              href="https://ioai-official.org/wp-content/uploads/2025/10/Syllabus.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Official IOAI Syllabus
            </a>
            .
          </>
        ),
      },
      {
        q: "What hardware or software configuration do I need for the online rounds?",
        a: "Participants require a standard computational device with a reliable web browser and internet connectivity. Early rounds are optimized to allow asynchronous submission, accommodating potential local power, connectivity, or time-zone variations.",
      },
      {
        q: "Who produces the competition problems?",
        a: "National selection rounds leverage the official testing infrastructures and problem sets curated by the IOAI International Scientific Committee. The final Team Selection Bootcamp phase utilizes problems engineered by the Philippine Scientific Committee, which is composed of domestic industry experts and artificial intelligence researchers.",
      },
      {
        q: "Will participants receive documentation of their performance?",
        a: "Yes. Official Certificates of Participation are issued to all students who validly complete and submit responses during the qualification phases.",
      },
    ],
  },
  {
    cat: "Support, Sponsorship, & Media",
    items: [
      {
        q: "How can our organization sponsor the Philippine National Team?",
        a: (
          <>
            Corporate entities, academic institutions, and individual patrons looking to provide financial or
            infrastructural support can coordinate directly with leadership by emailing{" "}
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
            All media inquiries, press packet requests, and official interview coordination must be routed through{" "}
            <a href="mailto:press@ioaiph.org" className="font-mono text-primary">
              press@ioaiph.org
            </a>
            .
          </>
        ),
      },
      {
        q: "I have an administrative query not addressed in this FAQ. Where do I send it?",
        a: (
          <>
            For all general programmatic or operational questions, contact the secretariat at{" "}
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
          <p className="mt-6 font-mono text-xs text-muted-foreground">Updated 28 May 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-16">
          {groups.map((g, gi) => (
            <div key={g.cat}>
              <div className="flex items-baseline gap-4 border-b border-border pb-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">0{gi + 1}</div>
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
                      {isOpen && <div className="pb-6 pr-12 text-muted-foreground">{it.a}</div>}
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
