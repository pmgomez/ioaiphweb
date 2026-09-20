export interface NavChild {
  title: string;
  href: string;
  description?: string;
}

export interface NavEntry {
  title: string;
  href?: string;
  children?: NavChild[];
}

export const NAV_CONFIG: NavEntry[] = [
  {
    title: "About",
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
    href: "/selection",
  },
  {
    title: "Resources",
    children: [
      {
        title: "Syllabus & Guides",
        href: "/resources",
        description: "Curriculum topics, recommended reading, and study roadmaps.",
      },
      {
        title: "Problem Sets & Tasks",
        href: "/resources/problems",
        description: "Practice tasks, sample datasets, and benchmark problems.",
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
    href: "/results",
  },
  {
    title: "Archive",
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
    href: "/partnerships",
  },
];

export type NavItem = NavEntry;
export const NAV_ITEMS = NAV_CONFIG;
