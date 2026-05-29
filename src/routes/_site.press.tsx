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
  excerpt?: string;
};

const articles: Article[] = [
  // Add press articles here as they come in.
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

      {articles.length === 0 ? (
        <div className="mt-16 rounded-sm border border-border bg-surface p-10 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// coming.soon</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Press coverage will be linked here as it's published. For media inquiries, email{" "}
            <a href="mailto:press@ioaiph.org" className="text-primary hover:underline">
              press@ioaiph.org
            </a>
            .
          </p>
        </div>
      ) : (
        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.href} className="bg-surface">
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col p-8 transition-colors hover:bg-background"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  <span>{a.outlet}</span>
                  {a.date ? <span className="text-muted-foreground">{a.date}</span> : null}
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight group-hover:text-primary">
                  {a.title}
                </h2>
                {a.excerpt ? <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p> : null}
                <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground group-hover:text-primary">
                  Read article <span aria-hidden>↗</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
