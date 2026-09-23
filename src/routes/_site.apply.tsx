import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/apply")({
  beforeLoad: () => {
    throw redirect({ href: "https://forms.gle/Xoiq3YQE3Z3HqATG7" });
  },
});
