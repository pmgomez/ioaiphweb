import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/resources/problems")({
  beforeLoad: () => {
    throw redirect({ to: "/resources" });
  },
});
