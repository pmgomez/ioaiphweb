import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

const volunteerSearchSchema = z.object({
  role: z.enum(["ambassador", "fellow", "coach"]).optional(),
});

export const Route = createFileRoute("/_site/volunteer/")({
  validateSearch: (search: Record<string, unknown>) => volunteerSearchSchema.parse(search),
  beforeLoad: ({ search }) => {
    if (search?.role === "fellow") {
      throw redirect({ to: "/volunteer/fellow" });
    }
    if (search?.role === "coach") {
      throw redirect({ to: "/volunteer/coach" });
    }
    throw redirect({ to: "/volunteer/ambassador" });
  },
});

