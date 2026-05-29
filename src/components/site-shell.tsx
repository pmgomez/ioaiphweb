import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import phFlag from "@/assets/ph-flag.svg";
import ioaiphLogo from "@/assets/ioaiph-logo.png";
import ioaiAccreditation from "@/assets/ioai-accreditation.png";
import { ThemeToggle } from "@/components/theme-toggle";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.59 14.59 0 0 0-.69 1.418 18.27 18.27 0 0 0-5.487 0A14.59 14.59 0 0 0 9.69 3a19.79 19.79 0 0 0-3.76 1.369C2.13 9.86 1.078 15.213 1.604 20.49a19.94 19.94 0 0 0 6.073 3.058c.49-.67.927-1.382 1.302-2.13a13.01 13.01 0 0 1-2.05-.98c.172-.126.34-.258.502-.392a14.18 14.18 0 0 0 12.94 0c.163.134.33.266.502.392-.654.39-1.34.718-2.05.98.375.748.811 1.46 1.302 2.13a19.93 19.93 0 0 0 6.073-3.058c.59-6.083-.972-11.39-4.078-16.121ZM8.68 16.43c-1.21 0-2.21-1.108-2.21-2.474 0-1.366.98-2.474 2.21-2.474 1.23 0 2.23 1.108 2.21 2.474 0 1.366-.98 2.474-2.21 2.474Zm6.64 0c-1.21 0-2.21-1.108-2.21-2.474 0-1.366.98-2.474 2.21-2.474 1.23 0 2.23 1.108 2.21 2.474 0 1.366-.98 2.474-2.21 2.474Z" />
  </svg>
);

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/results", label: "Results" },
  { to: "/resources", label: "Resources" },
  { to: "/press", label: "Press" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto flex w-full items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-3 py-2 pl-4 shadow-2xl backdrop-blur-xl sm:px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={ioaiphLogo} alt="IOAI Philippines" className="h-9 w-9 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-tight">IOAI Philippines</div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Team PH · Astana 2026
            </div>
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
          <ThemeToggle />
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
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">

            <div className="font-display text-lg font-semibold">IOAI Philippines</div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              The Philippines' national selection and training program for the International Olympiad in Artificial
              Intelligence. Building the next generation of Filipino AI researchers.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={phFlag} alt="Flag of the Philippines" className="h-14 w-auto rounded-sm shadow-sm" />
            <div className="mt-3 font-mono text-sm font-semibold tracking-wide text-foreground">#ParaSaBayan</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Accredited by</div>
            <img
              src={ioaiAccreditation}
              alt="International Olympiad in Artificial Intelligence"
              className="mt-3 h-14 w-auto object-contain"
            />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@ioaiph.org" className="hover:text-primary">
                  info@ioaiph.org
                </a>
              </li>
              <li>Manila, Philippines</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/ioaiph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://discord.gg/pBktCwHNkJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <DiscordIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <div className="font-mono">
            © {new Date().getFullYear()} IOAI Philippines · Hosted by Ateneo BUILD, JGSOM, Ateneo de Manila University
          </div>
          <div className="font-mono">v2.025 · build.astana</div>
        </div>
      </div>
    </footer>
  );
}
