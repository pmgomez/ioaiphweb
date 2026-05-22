import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/results", label: "Results" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground font-mono text-sm font-bold">
            AI
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-tight">IOAI Philippines</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Team PH · Astana 2025</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="#apply"
          className="hidden rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground md:inline-flex"
        >
          Apply →
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-lg font-semibold">IOAI Philippines</div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              The national selection and training program for the International Olympiad in Artificial Intelligence. Building the next generation of Filipino AI researchers.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Program</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/results" className="hover:text-primary">Results</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>team@ioai.ph</li>
              <li>Manila, Philippines</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <div className="font-mono">© {new Date().getFullYear()} IOAI Philippines · Operated under the National AI Education Initiative</div>
          <div className="font-mono">v2.025 · build.astana</div>
        </div>
      </div>
    </footer>
  );
}
