import { createFileRoute } from "@tanstack/react-router";
import { CoachesPage } from "./_site.coaches";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/_site/volunteer/coach")({
  head: () => ({
    meta: [
      { title: "Coaches & Problem Setters — IOAI Philippines" },
      {
        name: "description",
        content:
          "Scientific committee members, task authors, and competition trainers preparing Team Philippines for the International Olympiad in Artificial Intelligence.",
      },
      { property: "og:title", content: "Coaches & Problem Setters — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Scientific committee members, task authors, and competition trainers preparing Team Philippines for the International Olympiad in Artificial Intelligence.",
      },
    ],
    links: [canonical("/volunteer/coach")],
  }),
  component: CoachesPage,
});
