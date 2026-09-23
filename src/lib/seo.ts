export const SITE_URL = "https://ioaiph.org";

/** `<link rel="canonical">` entry for a route's `head().links`. */
export function canonical(path: string) {
  return { rel: "canonical", href: `${SITE_URL}${path}` };
}
