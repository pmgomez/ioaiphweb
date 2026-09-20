import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/volunteer")({
  component: VolunteerLayout,
});

function VolunteerLayout() {
  return <Outlet />;
}
