import { createFileRoute } from "@tanstack/react-router";
import { AmbassadorsPage } from "./_site.ambassadors";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/_site/volunteer/ambassador")({
  head: () => ({
    meta: [
      { title: "High School Ambassadors — IOAI Philippines" },
      {
        name: "description",
        content:
          "Empowering Filipino secondary school students to champion AI education, launch campus AI clubs, and mobilize peers for the IOAI Philippines National Selection.",
      },
      { property: "og:title", content: "High School Ambassadors — IOAI Philippines" },
      {
        property: "og:description",
        content:
          "Empowering Filipino secondary school students to champion AI education, launch campus AI clubs, and mobilize peers for the IOAI Philippines National Selection.",
      },
    ],
    links: [canonical("/volunteer/ambassador")],
  }),
  component: AmbassadorsPage,
});
