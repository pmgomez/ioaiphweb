import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/archive")({
  beforeLoad: () => {
    throw redirect({ to: "/2026" });
  },
});
