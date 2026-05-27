import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/resources")({
  head: () => ({
    meta: [
      { title: "Resources — IOAI Philippines" },
      {
        name: "description",
        content:
          "Curated study materials, syllabus references, and training resources for aspiring IOAI Philippines contestants.",
      },
      { property: "og:title", content: "Resources — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Curated study materials, syllabus references, and training resources for aspiring IOAI Philippines contestants.",
      },
    ],
  }),
  component: ResourcesPage,
});

const sections = [
  {
    tag: "01 / Foundations",
    title: "Math & Probability",
    desc: "Linear algebra, calculus, probability, and statistics — the bedrock of every IOAI round.",
    links: [
      { label: "3Blue1Brown — Essence of Linear Algebra", href: "https://www.3blue1brown.com/topics/linear-algebra" },
      {
        label: "MIT 18.06 — Linear Algebra (OCW)",
        href: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      },
      { label: "Harvard Stat 110 — Probability", href: "https://projects.iq.harvard.edu/stat110" },
    ],
  },
  {
    tag: "02 / Classical ML",
    title: "Machine Learning",
    desc: "Supervised and unsupervised methods, evaluation, and feature engineering.",
    links: [
      {
        label: "Andrew Ng — Machine Learning Specialization",
        href: "https://www.coursera.org/specializations/machine-learning-introduction",
      },
      { label: "scikit-learn — User Guide", href: "https://scikit-learn.org/stable/user_guide.html" },
      { label: "StatQuest — ML Playlist", href: "https://www.youtube.com/@statquest" },
    ],
  },
  {
    tag: "03 / Deep Learning",
    title: "Neural Networks & Transformers",
    desc: "From backprop to modern transformer architectures and training dynamics.",
    links: [
      { label: "Karpathy — Neural Networks: Zero to Hero", href: "https://karpathy.ai/zero-to-hero.html" },
      { label: "fast.ai — Practical Deep Learning", href: "https://course.fast.ai/" },
      { label: "Dive into Deep Learning (d2l.ai)", href: "https://d2l.ai/" },
    ],
  },
  {
    tag: "04 / NLP & CV",
    title: "Language & Vision",
    desc: "Tokenization, embeddings, attention, and vision pipelines from CNNs to ViTs.",
    links: [
      { label: "Hugging Face — NLP Course", href: "https://huggingface.co/learn/nlp-course" },
      { label: "Stanford CS231n — CNNs for Visual Recognition", href: "https://cs231n.stanford.edu/" },
      { label: "Stanford CS224n — NLP with Deep Learning", href: "https://web.stanford.edu/class/cs224n/" },
    ],
  },
  {
    tag: "05 / Competition",
    title: "IOAI & Olympiad Prep",
    desc: "Official syllabus, past tasks, and competition-style practice.",
    links: [
      { label: "IOAI — Official Website", href: "https://ioai-official.org/" },
      { label: "IOAI Tasks & Solutions GitHub Repo", href: "https://github.com/IOAI-official" },
      { label: "Kaggle — Learn", href: "https://www.kaggle.com/learn" },
    ],
  },
  {
    tag: "06 / Tooling",
    title: "Environments & Compute",
    desc: "Free notebooks, datasets, and GPU resources to practice on real workloads.",
    links: [
      { label: "Google Colab", href: "https://colab.research.google.com/" },
      { label: "Kaggle Notebooks", href: "https://www.kaggle.com/code" },
      { label: "Hugging Face — Datasets", href: "https://huggingface.co/datasets" },
    ],
  },
];

function ResourcesPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-32">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// training.index</div>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
        Resources for the road to Astana.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A living list of curated study material — the same references our mentors point trainees to throughout the IOAI
        Philippines cycle. Free, public, and aligned with the official IOAI syllabus.
      </p>

      <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <article key={s.title} className="flex flex-col bg-surface p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{s.tag}</div>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">{s.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 space-y-2 border-t border-border/60 pt-4">
              {s.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-sm border border-primary/30 bg-gradient-to-br from-surface to-background p-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// contribute</div>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Have a resource to suggest?
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          We keep this list lean and high-signal. If you've found something exceptional, email{" "}
          <a href="mailto:info@ioaiph.org" className="text-primary hover:underline">
            info@ioaiph.org
          </a>{" "}
          with the link and a short note on why.
        </p>
      </div>
    </section>
  );
}
