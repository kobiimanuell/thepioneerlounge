export const site = {
  name: "The Pioneer Lounge",
  shortName: "TPL",
  // TODO: swap to the production domain once it's live, e.g. https://thepioneerlounge.com
  url: "https://thepioneerlounge.vercel.app",
  tagline: "AI enablement for teams that intend to lead.",
  description:
    "The Pioneer Lounge delivers consultations, workshops, AI hack sprints, and enterprise training programs that turn AI curiosity into shipped work.",
  email: "hello@thepioneerlounge.com",
  calendarUrl: "https://calendly.com/osauzomaureen/consultations",
  // Paid 1:1 consultation event type, once set up in the Calendly dashboard.
  calendarPaidUrl: process.env.NEXT_PUBLIC_CALENDLY_PAID_URL,
  // Stripe Payment Link for the AI Foundations self-serve checkout.
  // Falls back to the discovery call until the real link is set.
  stripeFoundationsUrl:
    process.env.NEXT_PUBLIC_STRIPE_FOUNDATIONS_URL || "/book-a-call",
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const serviceNav: NavItem[] = [
  {
    label: "Consultations",
    href: "/consultations",
    description: "1:1 strategic AI guidance for leaders and teams.",
  },
  {
    label: "Workshops",
    href: "/workshops",
    description: "Hands-on sessions that build real AI fluency.",
  },
  {
    label: "AI Hack Sprints",
    href: "/ai-hack-sprints",
    description: "A focused week to ship a working AI project.",
  },
  {
    label: "Enterprise Program",
    href: "/enterprise-program",
    description: "Team-wide AI training for up to 100 employees.",
  },
];

export const mainNav: NavItem[] = [
  ...serviceNav,
  { label: "Speaking & Media", href: "/speaking-media" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  Services: serviceNav,
  Company: [
    { label: "About", href: "/about" },
    { label: "Speaking & Media", href: "/speaking-media" },
    { label: "Events", href: "/events" },
    { label: "Community", href: "/community" },
    { label: "Book a Call", href: "/book-a-call" },
  ] as NavItem[],
};
