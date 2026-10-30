export const site = {
  name: "The Pioneer Lounge",
  shortName: "TPL",
  url: "https://thepioneerlounge.com",
  tagline: "AI enablement for teams that intend to lead.",
  description:
    "The Pioneer Lounge is an AI strategy, workforce enablement, and innovation business helping organizations adopt AI through practical advice, hands-on workshops, and build sprints.",
  email: "info@thepioneerlounge.com",
  // Free, 15-minute discovery call. The only booking path on the main site;
  // paid 1:1 consultations are handled separately via Topmate, off-site.
  calendarUrl: "https://calendly.com/osauzomaureen/consultations",
  discoveryCopy:
    "Book a free 15-minute discovery call to help us understand your context and map the right engagement.",
  slackUrl:
    "https://join.slack.com/t/thepioneerlounge/shared_invite/zt-4ea1cil74-fuC0xSCnRNuyjdCG3PVNxg",
  facebookUrl: "https://www.facebook.com/share/g/1FDdkUaQvA/?mibextid=wwXIfr",
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

// The three core service categories, used consistently across nav, homepage
// cards, service pages, and FAQs.
export const serviceNav: NavItem[] = [
  {
    label: "AI Consulting",
    href: "/consultations",
    description:
      "Business-first AI strategy, use cases, tool selection, and adoption, including Fractional AI Lead support.",
  },
  {
    label: "AI Hack Sprints",
    href: "/ai-hack-sprints",
    description: "Facilitated sessions to build a practical AI prototype.",
  },
  {
    label: "AI Workshops",
    href: "/workshops",
    description:
      "Practical team training, from a single workshop to a tailored enterprise program.",
  },
];

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Book a Call", href: "/book-a-call" },
];

export const footerNav = {
  Services: serviceNav,
  Company: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/case-studies" },
    { label: "Events", href: "/events" },
    { label: "Community", href: "/community" },
    { label: "Partner With Us", href: "/partner-with-us" },
    { label: "Book a Call", href: "/book-a-call" },
  ] as NavItem[],
};
