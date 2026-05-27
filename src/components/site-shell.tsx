import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/results", label: "Results" },
  { to: "/resources", label: "Resources" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto flex w-full items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-3 py-2 pl-4 shadow-2xl backdrop-blur-xl sm:px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-mono text-xs font-bold">
            AI
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-tight">IOAI Philippines</div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">Team PH · Astana 2026</div>
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
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#apply"
            className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            Apply →
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-foreground transition-colors hover:border-primary/40 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto mt-2 w-full rounded-2xl border border-border/60 bg-background/90 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex justify-center rounded-md border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-primary"
            >
              Apply →
            </a>
          </nav>
        </div>
      )}
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
