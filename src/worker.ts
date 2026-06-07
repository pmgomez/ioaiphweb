import handler from "@tanstack/react-start/server-entry";

export default {
  async fetch(request: Request, env: any, ctx: any) {
    return handler.fetch(request, env, ctx);
  },
};
