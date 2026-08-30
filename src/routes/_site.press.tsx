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
    outlet: "The Manila Bulletin",
    date: "Aug 30, 2026",
    title: "Filipino students win 1 silver, 3 bronze medals in international AI olympiad",
    href: "https://mb.com.ph/2026/08/30/filipino-students-win-1-silver-3-bronze-medals-in-international-ai-olympiad",
  },
  {
    outlet: "Inquirer.net",
    date: "Aug 29, 2026",
    title: "Filipino teens win 4 medals in int’l AI Olympiad",
    href: "https://technology.inquirer.net/148875/filipino-teens-win-4-medals-in-intl-ai-olympiad",
  },
  {
    outlet: "The Manila Times",
    date: "Aug 28, 2026",
    title: "Team PH wins big at AI olympiad",
    href: "https://www.manilatimes.net/2026/07/04/business/science-technology/team-ph-wins-bigat-ai-olympiad/2378008/",
  },
  {
    outlet: "Philippines Graphic",
    date: "Aug 28, 2026",
    title: "Philippine teens win int’l AI Olympiad debut",
    href: "https://philippinesgraphic.com.ph/2026/08/28/philippine-teens-win-intl-ai-olympiad-debut/",
  },
  {
    outlet: "Journal Online",
    date: "Aug 28, 2026",
    title: "Philippine teens win int’l AI Olympiad debut",
    href: "https://journal.com.ph/philippine-teens-win-intl-ai-olympiad-debut/",
  },
  {
    outlet: "Daily Tribune",
    date: "Aug 28, 2026",
    title: "Philippine teens sweep medals in AI Olympiad debut",
    href: "https://tribune.net.ph/2026/08/28/philippine-teens-sweep-medals-in-ai-olympiad-debut",
  },
  {
    outlet: "Ateneo News",
    date: "Aug 28, 2026",
    title: "BUILD mentees bag silver, bronze medals in int’l AI Olympiad debut",
    href: "https://www.ateneo.edu/news/2026/08/build-mentees-bag-silver-bronze-medals-intl-ai-olympiad-debut",
  },
  {
    outlet: "The Manila Times",
    date: "Jul 4, 2026",
    title: "Team PH wins big at AI olympiad",
    href: "https://www.manilatimes.net/2026/07/04/business/science-technology/team-ph-wins-bigat-ai-olympiad/2378008/",
  },
  {
    outlet: "Philippines Graphic",
    date: "Jul 3, 2026",
    title: "Team Philippines wins gold, places 6th overall at first Asia-Pacific AI Olympiad",
    href: "https://philippinesgraphic.com.ph/2026/07/06/team-philippines-wins-gold-places-6th-overall-at-first-asia-pacific-ai-olympiad/",
  },
  {
    outlet: "News Light",
    date: "Jul 3, 2026",
    title: "Umani ng medalya ang Team Pilipinas sa kauna-unahang Asia-Pacific Olympiad in Artificial Intelligence (APOAI) 2026",
    href: "https://www.facebook.com/watch/?v=1604345714442678",
  },
  {
    outlet: "NewsBytes.ph",
    date: "Jul 3, 2026",
    title: "PH bags gold, finishes 6th in first Asia-Pacific AI Olympiad",
    href: "https://newsbytes.ph/2026/07/03/ph-bags-gold-finishes-6th-in-first-asia-pacific-ai-olympiad/",
  },
  {
    outlet: "Inquirer.net",
    date: "Jul 3, 2026",
    title: "Filipino students win 4 medals in Asia-Pacific AI Olympiad",
    href: "https://technology.inquirer.net/147741/filipino-students-win-4-medals-in-asia-pacific-ai-olympiad",
  },
  {
    outlet: "Astig PH",
    date: "Jul 3, 2026",
    title: "Pinoy high schoolers just beat over 100 students at the first Asia-Pacific AI Olympiad",
    href: "https://astig.ph/team-philippines-asia-pacific-ai-olympiad-apoai-2026/",
  },
  {
    outlet: "ABS-CBN News",
    date: "Jul 3, 2026",
    title: "PH places 6th overall at first Asia-Pacific AI Olympiad",
    href: "https://www.abs-cbn.com/lifestyle/people-culture-events/2026/7/3/ph-places-6th-overall-at-first-asia-pacific-ai-olympiad-1523",
  },
  {
    outlet: "Journal News Online",
    date: "Jul 2, 2026",
    title: "Team Philippines wins gold, places 6th overall at first Asia-Pacific AI Olympiad",
    href: "https://journal.com.ph/team-philippines-wins-gold-places-6th-overall-at-first-asia-pacific-ai-olympiad/",
  },
  {
    outlet: "BusinessWorld",
    date: "Jul 2, 2026",
    title: "Team Philippines wins gold, places 6th overall at first Asia-Pacific AI Olympiad led by BUILD",
    href: "https://www.facebook.com/100064329023551/posts/1476039291217024/",
  },
  {
    outlet: "Ateneo News",
    date: "Jul 2, 2026",
    title: "Team Philippines wins gold, places 6th overall at first Asia-Pacific AI Olympiad led by BUILD",
    href: "https://www.ateneo.edu/news/2026/07/team-philippines-wins-gold-places-6th-overall-first-asia-pacific-ai-olympiad-led-build",
  },
  {
    outlet: "Asia Research News",
    date: "Jul 2, 2026",
    title: "Team Philippines wins gold, places 6th overall at first Asia-Pacific AI Olympiad",
    href: "https://www.asiaresearchnews.com/content/team-philippines-wins-gold-places-6th-overall-first-asia-pacific-ai-olympiad",
  },
  {
    outlet: "The Manila Times",
    date: "Jun 5, 2026",
    title: "PH finishes third in AI Olympiad",
    href: "https://www.manilatimes.net/2026/06/05/news/national/ph-finishes-third-in-ai-olympiad/2359018",
  },
  {
    outlet: "Journal Online",
    date: "Jun 3, 2026",
    title: "Philippines among top 3 nations in AI Olympiad",
    href: "https://journal.com.ph/philippines-among-top-3-nations-in-ai-olympiad/",
  },
  {
    outlet: "Ateneo News",
    date: "Jun 3, 2026",
    title: "Philippines among top 3 nations in AI Olympiad hosted by Ateneo BUILD",
    href: "https://www.ateneo.edu/news/2026/06/philippines-among-top-3-nations-ai-olympiad",
  },
  {
    outlet: "Asia Research News",
    date: "Jun 3, 2026",
    title: "Philippines among top 3 nations in AI Olympiad",
    href: "https://www.asiaresearchnews.com/content/philippines-among-top-3-nations-ai-olympiad",
  },
  {
    outlet: "The Manila Times",
    date: "Jan 17, 2026",
    title: "Search is on for PH first AI Olympiad team",
    href: "https://www.manilatimes.net/2026/01/17/business/science-technology/search-is-on-for-ph-first-ai-olympiad-team/2260251",
  },
  {
    outlet: "Philippines Graphic",
    date: "Jan 11, 2026",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://philippinesgraphic.com.ph/2026/01/11/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad/",
  },
  {
    outlet: "MindaNews",
    date: "Jan 11, 2026",
    title: "Open call for Pinoy HS students to compete in world AI olympiad",
    href: "https://mindanews.com.ph/press-release/2026/01/open-call-for-pinoy-hs-students-to-compete-in-world-ai-olympiad/",
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
    outlet: "Malaya Business Insight",
    title: "Open call for Pinoy high school students to compete in World AI Olympiad",
    href: "https://malaya.com.ph/business/marketing-board/open-call-for-pinoy-high-school-students-to-compete-in-world-ai-olympiad/",
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
    outlet: "Asia Research News",
    title: "Open call for Pinoy HS students to compete in World AI Olympiad",
    href: "https://www.asiaresearchnews.com/content/open-call-pinoy-hs-students-compete-world-ai-olympiad-0",
  },
  {
    outlet: "Aksyon Sa Balita",
    title: "News Update",
    href: "https://www.facebook.com/AksyonSaBalita/posts/pfbid02ZzopqSSttcKjXqoksV41GPcReZCDDEu9pGde3MqQDiD8gQnrbppGFr4zmBKeyTzEl",
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
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Press &amp; Media Coverage</h2>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {articles.length} features
          </span>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {articles.map((a, i) => (
            <li
              key={`${a.outlet}-${a.href}-${i}`}
              className="group flex h-full flex-col rounded-sm border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{a.outlet}</div>
              {a.date ? (
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {a.date}
                </div>
              ) : null}
              <h3 className="mt-3 line-clamp-3 font-display text-base font-semibold leading-snug tracking-tight text-foreground">
                {a.title}
              </h3>
              <div className="flex-1" />
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-sm border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-foreground transition-all group-hover:border-primary/50 group-hover:text-primary"
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
