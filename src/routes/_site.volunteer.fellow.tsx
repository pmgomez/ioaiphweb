import { createFileRoute } from "@tanstack/react-router";
import { FellowsPage } from "./_site.fellows";

export const Route = createFileRoute("/_site/volunteer/fellow")({
  head: () => ({
    meta: [
      { title: "Collegiate Fellows — IOAI Philippines" },
      {
        name: "description",
        content:
          "A technical fellowship for university students to deliver regional machine learning workshops, mentor high school clubs, test Olympiad problem sets, and support national selection logistics.",
      },
      { property: "og:title", content: "Collegiate Fellows — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "A technical fellowship for university students to deliver regional machine learning workshops, mentor high school clubs, test Olympiad problem sets, and support national selection logistics.",
      },
    ],
  }),
  component: FellowsPage,
});
