import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook, ChevronDown } from "lucide-react";
import phFlag from "@/assets/ph-flag.svg";
import ioaiphLogo from "@/assets/ioaiph-logo.png";
import ioaiAccreditation from "@/assets/ioai-accreditation.png";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.59 14.59 0 0 0-.69 1.418 18.27 18.27 0 0 0-5.487 0A14.59 14.59 0 0 0 9.69 3a19.79 19.79 0 0 0-3.76 1.369C2.13 9.86 1.078 15.213 1.604 20.49a19.94 19.94 0 0 0 6.073 3.058c.49-.67.927-1.382 1.302-2.13a13.01 13.01 0 0 1-2.05-.98c.172-.126.34-.258.502-.392a14.18 14.18 0 0 0 12.94 0c.163.134.33.266.502.392-.654.39-1.34.718-2.05.98.375.748.811 1.46 1.302 2.13a19.93 19.93 0 0 0 6.073-3.058c.59-6.083-.972-11.39-4.078-16.121ZM8.68 16.43c-1.21 0-2.21-1.108-2.21-2.474 0-1.366.98-2.474 2.21-2.474 1.23 0 2.23 1.108 2.21 2.474 0 1.366-.98 2.474-2.21 2.474Zm6.64 0c-1.21 0-2.21-1.108-2.21-2.474 0-1.366.98-2.474 2.21-2.474 1.23 0 2.23 1.108 2.21 2.474 0 1.366-.98 2.474-2.21 2.474Z" />
  </svg>
);

const archive2026Links = [
  { to: "/2026", label: "OVERVIEW", exact: true },
  { to: "/2026/team", label: "TEAM", exact: false },
  { to: "/2026/results", label: "RESULTS", exact: false },
  { to: "/2026/faq", label: "FAQ", exact: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isArchive = pathname.startsWith("/2026");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Archive Banner */}
      {isArchive && (
        <aside
          aria-label="Archive Notice"
          className="pointer-events-auto border-b border-border/60 bg-surface/90 px-4 py-2 text-center font-mono text-xs text-muted-foreground backdrop-blur-xl transition-all"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 text-[11px] sm:text-xs">
            <span>You are viewing the archived 2026 IOAI Philippines season.</span>{" "}
            <Link
              to="/"
              className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              Return to current home.
            </Link>
          </div>
        </aside>
      )}

      <div className={cn("px-4 sm:px-6", isArchive ? "pt-2.5 sm:pt-3" : "pt-4 sm:pt-6")}>
        <div className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-3 py-2 pl-4 shadow-2xl backdrop-blur-xl sm:px-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={ioaiphLogo}
              alt="IOAI Philippines"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-tight">
                IOAI Philippines
              </div>
              <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Team PH · Singapore 2027
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/about"
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/selection-2027"
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              Selection
            </Link>

            {/* Desktop Team Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors outline-none",
                  pathname.includes("/team")
                    ? "font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span>Team</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48 rounded-xl border border-border/60 bg-background/95 p-1.5 shadow-2xl backdrop-blur-xl"
              >
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link
                    to="/team"
                    activeProps={{ className: "text-primary font-medium bg-primary/10" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="flex h-8 w-full items-center justify-between rounded-lg px-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
                  >
                    <span>2027 Squad</span>
                    <span className="text-[9px] text-primary">Active</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link
                    to="/2026/team"
                    activeProps={{ className: "text-primary font-medium bg-primary/10" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="flex h-8 w-full items-center justify-between rounded-lg px-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
                  >
                    <span>2026 Teams</span>
                    <span className="text-[9px] text-muted-foreground">Astana</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/partnerships"
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              Partnerships
            </Link>

            {/* Desktop Results Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors outline-none",
                  pathname.includes("/results")
                    ? "font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span>Results</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-52 rounded-xl border border-border/60 bg-background/95 p-1.5 shadow-2xl backdrop-blur-xl"
              >
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link
                    to="/results"
                    activeProps={{ className: "text-primary font-medium bg-primary/10" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="flex h-8 w-full items-center justify-between rounded-lg px-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
                  >
                    <span>2027 Cycle</span>
                    <span className="text-[9px] text-primary">Pipeline</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link
                    to="/2026/results"
                    activeProps={{ className: "text-primary font-medium bg-primary/10" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="flex h-8 w-full items-center justify-between rounded-lg px-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
                  >
                    <span>2026 Archive</span>
                    <span className="text-[9px] text-muted-foreground">Medals 🏅</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/resources"
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <Link
              to="/press"
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              Press
            </Link>
            <Link
              to="/faq"
              activeProps={{ className: "text-primary font-medium" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
            >
              FAQ
            </Link>

            {/* Desktop Archive Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors outline-none",
                  isArchive
                    ? "font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span>ARCHIVE</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-44 rounded-xl border border-border/60 bg-background/95 p-1.5 shadow-2xl backdrop-blur-xl"
              >
                <div className="px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  // 2026 Season
                </div>
                {archive2026Links.map((item) => (
                  <DropdownMenuItem asChild className="cursor-pointer" key={item.to}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.exact }}
                      activeProps={{ className: "text-primary font-medium bg-primary/10" }}
                      inactiveProps={{ className: "text-muted-foreground" }}
                      className="flex h-8 w-full items-center rounded-lg px-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/#apply"
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

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="pointer-events-auto mx-auto mt-2 w-full max-w-7xl rounded-2xl border border-border/60 bg-background/90 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <nav className="flex flex-col space-y-0.5">
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                to="/about"
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="/selection-2027"
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                Selection
              </Link>

              {/* Mobile Team Row with Chips */}
              <div className="flex items-center justify-between rounded-md px-3 py-2">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Team
                </span>
                <div className="flex items-center gap-1.5">
                  <Link
                    to="/team"
                    onClick={() => setOpen(false)}
                    className="rounded-sm border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    activeProps={{
                      className: "border-primary/50 text-primary font-medium bg-primary/10",
                    }}
                  >
                    2027
                  </Link>
                  <Link
                    to="/2026/team"
                    onClick={() => setOpen(false)}
                    className="rounded-sm border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    activeProps={{
                      className: "border-primary/50 text-primary font-medium bg-primary/10",
                    }}
                  >
                    2026
                  </Link>
                </div>
              </div>

              <Link
                to="/partnerships"
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                Partnerships
              </Link>

              {/* Mobile Results Row with Chips */}
              <div className="flex items-center justify-between rounded-md px-3 py-2">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Results
                </span>
                <div className="flex items-center gap-1.5">
                  <Link
                    to="/results"
                    onClick={() => setOpen(false)}
                    className="rounded-sm border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    activeProps={{
                      className: "border-primary/50 text-primary font-medium bg-primary/10",
                    }}
                  >
                    2027
                  </Link>
                  <Link
                    to="/2026/results"
                    onClick={() => setOpen(false)}
                    className="rounded-sm border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    activeProps={{
                      className: "border-primary/50 text-primary font-medium bg-primary/10",
                    }}
                  >
                    2026
                  </Link>
                </div>
              </div>

              <Link
                to="/resources"
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                Resources
              </Link>
              <Link
                to="/press"
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                Press
              </Link>
              <Link
                to="/faq"
                activeProps={{ className: "text-primary font-medium" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-foreground"
              >
                FAQ
              </Link>

              {/* Mobile Collapsible Archive Section */}
              <div className="mt-2 border-t border-border/60 pt-2">
                <button
                  type="button"
                  onClick={() => setArchiveOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span>Archive (2026 Season)</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      archiveOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>

                {archiveOpen && (
                  <div className="mt-1 grid grid-cols-2 gap-1.5 px-1 pb-1">
                    {archive2026Links.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        activeOptions={{ exact: item.exact }}
                        activeProps={{ className: "text-primary font-medium bg-primary/10" }}
                        inactiveProps={{ className: "text-muted-foreground" }}
                        onClick={() => {
                          setOpen(false);
                          setArchiveOpen(false);
                        }}
                        className="flex h-8 items-center justify-center rounded-md border border-border/40 bg-surface/30 font-mono text-[10px] uppercase tracking-wider transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#apply"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex justify-center rounded-md border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Apply →
              </a>
            </nav>
          </div>
        )}
      </div>
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
              The Philippines' national selection and training program for the International
              Olympiad in Artificial Intelligence. Building the next generation of Filipino AI
              researchers.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img
              src={phFlag}
              alt="Flag of the Philippines"
              className="h-14 w-auto rounded-sm shadow-sm"
            />
            <div className="mt-3 font-mono text-sm font-semibold tracking-wide text-foreground">
              #ParaSaBayan
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Accredited by
            </div>
            <a
              href="https://ioai-official.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block transition-opacity hover:opacity-80"
            >
              <img
                src={ioaiAccreditation}
                alt="International Olympiad in Artificial Intelligence"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </div>
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
            © {new Date().getFullYear()} IOAI Philippines · Hosted by Ateneo BUILD, JGSOM, Ateneo de
            Manila University
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <span>v2.027 · build.singapore</span>
            <span className="opacity-40">·</span>
            <span>
              Last updated: <time dateTime={__LAST_UPDATED__}>{__LAST_UPDATED__}</time>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
