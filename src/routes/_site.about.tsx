import { createFileRoute } from "@tanstack/react-router";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import jobenPhoto from "@/assets/joben.png";
import martinPhoto from "@/assets/martin.png";
import robertoPhoto from "@/assets/roberto.jpg";
import farrellPhoto from "@/assets/farrell.png";
import charibethPhoto from "@/assets/charibeth.jpg";
import lesterPhoto from "@/assets/lester.png";
import lorenzoPhoto from "@/assets/lorenzo.png";
import adrianPhoto from "@/assets/adrian.png";
import jamesPhoto from "@/assets/james.png";
import tjPhoto from "@/assets/tjdimacali.png";
import leonardPhoto from "@/assets/leonardang.jpg";
import paoloPhoto from "@/assets/paolorollan.png";
import hanslyPhoto from "@/assets/hanslysaw.png";
import andrewPhoto from "@/assets/andrewyu.jpg";
import kylePhoto from "@/assets/kylereynoso.png";
import gianPhoto from "@/assets/alingog.png";
import troyPhoto from "@/assets/troy.png";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — IOAI Philippines" },
      {
        name: "description",
        content:
          "How IOAI Philippines selects, trains and fields Team PH for the world stage of artificial intelligence.",
      },
    ],
  }),
  component: About,
});

const leadership = [
  {
    name: "Dr. Roberto Galang",
    role: "Honorary Chair",
    org: "Dean, John Gokongwei School of Management, Ateneo de Manila University",
    photo: robertoPhoto,
  },
  {
    name: "Joben Ilagan",
    role: "Founding Chair",
    org: "Director, Ateneo BUILD\nProgram Director, ADMU BS ITE",
    photo: jobenPhoto,
  },
  { name: "Martin Gomez", role: "Founding Executive Director", org: "", photo: martinPhoto },
  {
    name: "Farrell Eldrian Wu",
    role: "Advisory Board",
    org: "Massachusetts Institute of Technology",
    photo: farrellPhoto,
  },
  {
    name: "Dr. Charibeth Cheng",
    role: "Scientific Contributor",
    org: "Assoc Dean, College of Computer Studies, De La Salle University",
    photo: charibethPhoto,
  },
  { name: "Lester James Miranda", role: "Scientific Committee", org: "University of Cambridge", photo: lesterPhoto },
  { name: "Lorenzo Jaime Flores", role: "Scientific Committee", org: "Microsoft Research", photo: lorenzoPhoto },
  {
    name: "Adrian Dar Serapio",
    role: "Scientific Committee",
    org: "UC Berkeley, UC San Francisco",
    photo: adrianPhoto,
  },
  {
    name: "Hansly Saw",
    role: "Scientific Committee",
    org: "University of the Philippines - Diliman",
    photo: hanslyPhoto,
  },
  {
    name: "Paolo Rollan",
    role: "Scientific Committee",
    org: "University of the Philippines - Diliman",
    photo: paoloPhoto,
  },
  { name: "Hans Tan", role: "Scientific Committee", org: "Sun Yat-Sen University" },
  { name: "James Bermudo", role: "Scientific Committee", org: "Ateneo de Manila University", photo: jamesPhoto },
  { name: "Andrew Yu", role: "Scientific Committee", org: "Procter & Gamble", photo: andrewPhoto },
  { name: "Gian Alingog", role: "Scientific Committee", org: "UC Sta Barbara", photo: gianPhoto },
  {
    name: "Timothy James Dimacali",
    role: "Media and Press Relations",
    org: "Ateneo de Manila University",
    photo: tjPhoto,
  },
  { name: "Kyle Reynoso", role: "Sponsorships", org: "University of the Philippines - Diliman", photo: kylePhoto },
  { name: "Leonard Ang", role: "Partnerships", org: "University of the Philippines - Diliman", photo: leonardPhoto },
  { name: "Troy Dylan Serapio", role: "Discord Admin", org: "Philippine Science High School - Main Campus", photo: troyPhoto },
];

function About() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// about.program</div>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            We exist to put young Filipino talent on the world stage of AI — and let them
            <span className="text-primary"> create what's possible for the country and for humanity.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            IOAI Philippines is the Philippines' official route to the International Olympiad in Artificial Intelligence
            — a competition where the world's top high school AI talent is identified, mentored and put on stage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// mandate</div>
            <h2 className="mt-3 font-display text-3xl font-semibold">A national mandate</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, IOAI Philippines was established as the official body to organize the country's IOAI
              campaign. We operate under Ateneo BUILD, with academic, government, nonprofit, and private-sector
              partnerships.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our remit is simple: find the most capable young minds in the country, equip them with world-class
              training, and represent the Philippines competitively on the global stage.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-surface p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Vision</div>
            <p className="mt-4 font-display text-2xl leading-snug">
              "Every Filipino learner with the talent to compete in AI should have a path to do so — regardless of
              geography, school, or income."
            </p>
            <div className="mt-6 font-mono text-xs text-muted-foreground"></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// behind the scenes</div>
          <h2 className="mt-3 font-display text-3xl font-semibold">People</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            Everyone listed below contributes their expertise, time, and effort on a{" "}
            <span className="font-semibold text-foreground">purely voluntary</span>,{" "}
            <span className="font-semibold text-foreground">pro bono basis</span> — without compensation or anything
            sought in return. We thank them for their <span className="font-semibold text-foreground">generosity</span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">
              spirit of <em>magis</em>
            </span>
            .
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p) => (
              <div key={p.name} className="bg-surface p-6">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-primary/10">
                  {p.photo ? <img src={p.photo} alt={p.name} className="h-full w-full object-cover" /> : null}
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{p.name}</div>
                <div className="mt-1 text-sm text-primary">{p.role}</div>
                <div className="mt-1 whitespace-pre-line font-mono text-[11px] text-muted-foreground">{p.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">// values</div>
        <h2 className="mt-3 font-display text-3xl font-semibold">What we hold ourselves to</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Merit, only.",
              d: "Selection is blind to school, region, and background. The strongest scientists and engineers earn the seats.",
            },
            { t: "Free, always.", d: "No applicant pays a peso to participate." },
            {
              t: "Rigorous, open.",
              d: "We publish our curriculum, our problem sets, and our selection criteria. The program is auditable.",
            },
          ].map((v) => (
            <div key={v.t} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
