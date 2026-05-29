import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/press")({
  head: () => ({
    meta: [
      { title: "Press — IOAI Philippines" },
      {
        name: "description",
        content:
          "Press coverage and featured articles about IOAI Philippines and Team PH at international AI olympiads.",
      },
      { property: "og:title", content: "Press — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Press coverage and featured articles about IOAI Philippines and Team PH at international AI olympiads.",
      },
    ],
  }),
  component: PressPage,
});

type Article = {
  title: string;
  outlet: string;
  date?: string;
  href: string;
};

const articles: Article[] = [
  {
    outlet: "The Manila Times",
    date: "Jan 17, 2026",
    title: "Search is on for PH first AI Olympiad team",
    href: "https://www.manilatimes.net/2026/01/17/business/science-technology/search-is-on-for-ph-first-ai-olympiad-team/2260251",
  },
  {
    outlet: "Malaya Business Insight",
    title: "Open call for Pinoy high school students to compete in World AI Olympiad",
    href: "https://malaya.com.ph/business/marketing-board/open-call-for-pinoy-high-school-students-to-compete-in-world-ai-olympiad/",
  },
  {
    outlet: "SunStar Davao",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://www.sunstar.com.ph/davao/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad",
  },
  {
    outlet: "MSN Philippines",
    title: "Search is on for PH first AI Olympiad team",
    href: "https://www.msn.com/en-ph/news/money/search-is-on-for-ph-first-ai-olympiad-team/ar-AA1UmeS1",
  },
  {
    outlet: "Journal News Online",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://journal.com.ph/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad/",
  },
  {
    outlet: "Daily Guardian",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://www.dailyguardian.com.ph/blog/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad",
  },
  {
    outlet: "MindaNews",
    date: "Jan 11, 2026",
    title: "Open call for Pinoy HS students to compete in world AI olympiad",
    href: "https://mindanews.com.ph/press-release/2026/01/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad/",
  },
  {
    outlet: "Philippines Graphic",
    date: "Jan 11, 2026",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://philippinesgraphic.com.ph/2026/01/11/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad/",
  },
  {
    outlet: "Aksyon Sa Balita",
    title: "News Update",
    href: "https://www.facebook.com/AksyonSaBalita/posts/pfbid02ZzopqSSttcKjXqoksV41GPcReZCDDEu9pGde3MqQDiD8gQnrbppGFr4zmBKeyTzEl",
  },
  {
    outlet: "Asia Research News",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://www.asiaresearchnews.com/content/open-call-pinoy-hs-students-compete-world-ai-olympiad-0",
  },
];

function PressPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-32">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// press.index</div>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
        IOAI Philippines in the press.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Featured articles, interviews, and coverage of Team PH and the national AI olympiad program from publications
        across the Philippines and abroad.
      </p>

      <div className="mt-20">
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Press &amp; Media Coverage
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {articles.length} features
          </span>
        </div>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.href} className="flex flex-col bg-surface p-8 transition-colors hover:bg-background">
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="font-bold text-primary">{a.outlet}</span>
                {a.date ? <span className="text-muted-foreground">{a.date}</span> : null}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                {a.title}
              </h3>
              <div className="mt-6 flex-1" />
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                Read Article <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 rounded-sm border border-border bg-surface p-8 text-center">
        <p className="text-sm text-muted-foreground">
          For media inquiries, email{" "}
          <a href="mailto:press@ioaiph.org" className="text-primary hover:underline">
            press@ioaiph.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}
