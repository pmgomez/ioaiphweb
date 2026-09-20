import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/selection")({
  beforeLoad: () => {
    throw redirect({ to: "/selection-2027" });
  },
});
