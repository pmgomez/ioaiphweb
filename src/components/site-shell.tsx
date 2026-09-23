import { useState, useRef, useEffect, type FocusEvent, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import ioaiphLogo from "@/assets/ioaiph-logo.png";
import phFlag from "@/assets/ph-flag.svg";
import { useTheme } from "@/components/theme-provider";

interface NavChild {
  title: string;
  href: string;
  description: string;
}

interface NavItemDropdown {
  title: string;
  type: "dropdown";
  children: NavChild[];
}

interface NavItemLink {
  title: string;
  type: "link";
  href: string;
}

type NavEntry = NavItemDropdown | NavItemLink;

const NAV_CONFIG: NavEntry[] = [
  {
    title: "About",
    type: "dropdown",
    children: [
      {
        title: "About & Leadership",
        href: "/about",
        description: "Mandate, mission, executive leadership, and academic committee.",
      },
      {
        title: "2027 Teams",
        href: "/team",
        description: "Official 2027 delegations for IOAI and APOAI (coming soon).",
      },
      {
        title: "Press & Media",
        href: "/press",
        description: "Press releases, official coverage, and announcements.",
      },
    ],
  },
  {
    title: "Selection",
    type: "link",
    href: "/selection-2027",
  },
  {
    title: "Resources",
    type: "dropdown",
    children: [
      {
        title: "Syllabus & Guides",
        href: "/resources",
        description: "Curriculum topics, recommended reading, and study roadmaps.",
      },
      {
        title: "Applicant FAQ",
        href: "/faq",
        description: "Common questions regarding eligibility, dates, and testing format.",
      },
    ],
  },
  {
    title: "Results",
    type: "link",
    href: "/results",
  },
  {
    title: "Archive",
    type: "dropdown",
    children: [
      {
        title: "2026 Overview",
        href: "/2026",
        description: "Recap of the inaugural 2026 IOAI national campaign.",
      },
      {
        title: "2026 Team",
        href: "/2026/team",
        description: "The 2026 Philippine delegation and mentors in Bulgaria.",
      },
      {
        title: "2026 Results",
        href: "/2026/results",
        description: "Scores, leaderboards, and international medalists.",
      },
      {
        title: "2026 FAQ",
        href: "/2026/faq",
        description: "Archived selection rules and process guidelines.",
      },
    ],
  },
  {
    title: "Volunteer",
    type: "dropdown",
    children: [
      {
        title: "Ambassador",
        href: "/volunteer/ambassador",
        description: "Represent IOAI Philippines in your school, university, or region.",
      },
      {
        title: "Fellow",
        href: "/volunteer/fellow",
        description: "Support curriculum design, dataset curation, and research initiatives.",
      },
      {
        title: "Coach",
        href: "/volunteer/coach",
        description: "Train national pool candidates in competitive machine learning and AI.",
      },
    ],
  },
  {
    title: "Sponsor",
    type: "link",
    href: "/partnerships",
  },
];

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({});

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleDropdown = (title: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  // Close the desktop dropdown once keyboard focus moves outside of it
  const handleDropdownBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileAccordion = (title: string) => {
    setMobileAccordions((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isChildActive = (childHref: string) => {
    if (pathname === childHref || pathname.startsWith(`${childHref}/`)) return true;
    if (
      childHref === "/volunteer/ambassador" &&
      (pathname === "/ambassadors" || pathname.startsWith("/ambassadors/"))
    )
      return true;
    if (
      childHref === "/volunteer/fellow" &&
      (pathname === "/fellows" || pathname.startsWith("/fellows/"))
    )
      return true;
    if (
      childHref === "/volunteer/coach" &&
      (pathname === "/coaches" || pathname.startsWith("/coaches/"))
    )
      return true;
    return false;
  };

  const showArchiveBanner = pathname.startsWith("/2026");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-600 selection:text-white">
      {showArchiveBanner && (
        <aside
          aria-label="Archive notice"
          className="bg-amber-500/10 border-b border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs md:text-sm px-4 py-2 text-center flex items-center justify-center gap-2"
        >
          <span>You are viewing archived content from the 2026 season.</span>
          <Link
            to="/"
            className="underline hover:text-amber-950 dark:hover:text-amber-200 font-medium"
          >
            Return to 2027 Home &rarr;
          </Link>
        </aside>
      )}

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/85 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <img src={ioaiphLogo} alt="IOAI Philippines" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wide text-slate-900 dark:text-white flex items-center gap-1.5">
                IOAI Philippines
                <img
                  src={phFlag}
                  alt=""
                  className="inline-block h-3.5 w-auto rounded-xs"
                  aria-hidden="true"
                />
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 font-mono">
                TEAM PH · SINGAPORE 2027
              </span>
            </div>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {NAV_CONFIG.map((item) => {
              if (item.type === "link") {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-slate-950 dark:text-white bg-slate-200/70 dark:bg-slate-800/60 font-semibold"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              }

              const isOpen = activeDropdown === item.title;
              const hasActiveChild = item.children.some((child) => isChildActive(child.href));

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                  onBlur={handleDropdownBlur}
                >
                  <button
                    type="button"
                    // Keyboard activation (detail === 0) toggles; mouse clicks keep the hover-opened menu open
                    onClick={(e) =>
                      e.detail === 0 ? toggleDropdown(item.title) : handleMouseEnter(item.title)
                    }
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                      hasActiveChild || isOpen
                        ? "text-slate-950 dark:text-white bg-slate-200/70 dark:bg-slate-800/60 font-semibold"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-150 ${
                        isOpen
                          ? "rotate-180 text-slate-900 dark:text-white"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 mt-1 w-72 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border border-slate-200 dark:border-slate-800 p-2 shadow-xl dark:shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-100">
                      {item.children.map((child) => {
                        const isSelected = isChildActive(child.href);
                        return (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block p-2.5 rounded-lg transition-colors group focus-visible:ring-2 focus-visible:ring-blue-500 ${
                              isSelected
                                ? "bg-slate-100 dark:bg-slate-800/80"
                                : "hover:bg-slate-100 dark:hover:bg-slate-800/80"
                            }`}
                          >
                            <div
                              className={`text-sm font-semibold transition-colors ${
                                isSelected
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-slate-800 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400"
                              }`}
                            >
                              {child.title}
                            </div>
                            {child.description && (
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-colors"
            >
              APPLY &rarr;
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="p-2 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {NAV_CONFIG.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      {item.title}
                    </Link>
                  );
                }

                const isExpanded = !!mobileAccordions[item.title];

                return (
                  <div
                    key={item.title}
                    className="border-b border-slate-100 dark:border-slate-900 pb-1"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.title)}
                      aria-expanded={isExpanded}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-150 ${
                          isExpanded
                            ? "rotate-180 text-slate-900 dark:text-white"
                            : "text-slate-400"
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 pr-2 py-1.5 space-y-1">
                        {item.children.map((child) => {
                          const isSelected = isChildActive(child.href);
                          return (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                                isSelected
                                  ? "text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-900 font-medium"
                                  : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
                              }`}
                            >
                              <div
                                className={`font-medium ${
                                  isSelected
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-slate-800 dark:text-slate-200"
                                }`}
                              >
                                {child.title}
                              </div>
                              {child.description && (
                                <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <Link
                  to="/apply"
                  className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center transition-colors shadow-md shadow-blue-600/20"
                >
                  APPLY &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-950/80 text-slate-600 dark:text-slate-400 text-sm py-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-slate-900 dark:text-white mb-2">IOAI Philippines</div>
            <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
              Official national committee overseeing delegation selection, training, and
              participation in the International Olympiad in Artificial Intelligence.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
              Organization
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-slate-950 dark:hover:text-white">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-slate-950 dark:hover:text-white">
                  2027 Teams
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-slate-950 dark:hover:text-white">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-slate-950 dark:hover:text-white">
                  Partnerships & Sponsors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
              Participation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/selection-2027" className="hover:text-slate-950 dark:hover:text-white">
                  Selection Process
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-slate-950 dark:hover:text-white">
                  Syllabus & Guides
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-slate-950 dark:hover:text-white">
                  2027 Results
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-slate-950 dark:hover:text-white">
                  Applicant FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
              Volunteer & Archive
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/volunteer/ambassador"
                  className="hover:text-slate-950 dark:hover:text-white"
                >
                  Ambassadors
                </Link>
              </li>
              <li>
                <Link to="/volunteer/fellow" className="hover:text-slate-950 dark:hover:text-white">
                  Fellows
                </Link>
              </li>
              <li>
                <Link to="/volunteer/coach" className="hover:text-slate-950 dark:hover:text-white">
                  Coaches
                </Link>
              </li>
              <li>
                <Link to="/2026" className="hover:text-slate-950 dark:hover:text-white">
                  2026 Campaign Archive
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-slate-950 dark:hover:text-white">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-xs text-slate-500 dark:text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} IOAI Philippines. All rights reserved.</p>
          <p>Representing Team Philippines at IOAI 2027 in Singapore.</p>
        </div>
      </footer>
    </div>
  );
}

// Backward-compatible exports for any legacy imports
export function SiteHeader() {
  return null;
}

export function SiteFooter() {
  return null;
}
