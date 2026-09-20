import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/apply")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
