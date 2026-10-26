export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date, used for sorting and upcoming/past bucketing
  dateLabel: string; // human-readable date/time shown on the card
  // ISO 8601 start/end, with America/Vancouver UTC offset, for Event JSON-LD.
  // Date-only (no time) when no specific start/end time is confirmed.
  startDateTime: string;
  endDateTime?: string;
  location: string;
  isOnline?: boolean;
  description: string;
  image: string;
  imageWidth: number; // real pixel width of `image`, so it renders uncropped
  imageHeight: number; // real pixel height of `image`, so it renders uncropped
  photos?: string[]; // additional photos for a slideshow, if available
  externalUrl?: string;
};

export const events: EventItem[] = [
  {
    slug: "leading-in-the-age-of-ai-symposium",
    title: "Leading in the Age of AI: Hybrid Symposium",
    date: "2026-10-31",
    dateLabel: "October 31, 2026 · 9:30 AM – 12:30 PM",
    startDateTime: "2026-10-31T09:30:00-07:00",
    endDateTime: "2026-10-31T12:30:00-07:00",
    location: "Robert H. Lee Alumni Centre, UBC, Vancouver, BC",
    description:
      "A hybrid symposium on leading through AI, plus the official launch of the SelfEducation AI Institute. Free seating, registration required.",
    image: "/images/banners/leading-in-the-age-of-ai-symposium.jpeg",
    imageWidth: 1008,
    imageHeight: 1250,
    externalUrl: "https://selfeducation.ca/reg",
  },
  {
    slug: "ai-speaker-series-clay-cohort",
    title: "AI Speaker Series: Clay Cohort",
    date: "2026-05-21",
    dateLabel: "May 21, 2026 · 10:00 – 10:45 AM EST",
    startDateTime: "2026-05-21T10:00:00-07:00",
    endDateTime: "2026-05-21T10:45:00-07:00",
    location: "Online (Zoom)",
    isOnline: true,
    description:
      "A Clay Cohort speaker session with Maureen Osauzo, Founder of The Pioneer Lounge and former AI Pioneer at HeyGen.",
    image: "/images/banners/ai-speaker-series-clay-cohort.jpeg",
    imageWidth: 1206,
    imageHeight: 1190,
  },
  {
    slug: "ai-innovation-sprint-vancouver",
    title: "AI Innovation Sprint: Build the Future Together",
    date: "2026-02-04",
    dateLabel: "February 4–6, 2026",
    startDateTime: "2026-02-04",
    endDateTime: "2026-02-06",
    location: "Vancouver, BC",
    description:
      "A multi-day AI innovation sprint presented by The Pioneer Lounge, facilitated by founder Maureen Osauzo.",
    image: "/images/banners/ai-innovation-sprint-vancouver.jpeg",
    imageWidth: 1206,
    imageHeight: 1206,
  },
  {
    slug: "career-journeys-dress-for-success",
    title: "Career Journeys with Dress for Success Vancouver",
    date: "2026-06-19",
    dateLabel: "June 19 · 6:30 – 8:00 PM",
    startDateTime: "2026-06-19T18:30:00-07:00",
    endDateTime: "2026-06-19T20:00:00-07:00",
    location: "Vancouver, BC",
    description:
      "A panel on career journeys with Dress for Success Vancouver ambassadors.",
    image: "/images/banners/career-journeys-dress-for-success.jpeg",
    imageWidth: 1206,
    imageHeight: 1169,
  },
  {
    slug: "heygen-hackathon",
    title: "HeyGen Hack-Sprint",
    date: "2025-10-04",
    dateLabel: "October 4, 2025",
    startDateTime: "2025-10-04",
    location: "BrainStation, Vancouver, BC",
    description:
      "Builders, volunteers, and judges came together for Vancouver's first HeyGen hack sprint, reviewing and shipping creative AI video projects in a day.",
    image: "/images/events/heygen-hackathon/heygen-hackathon-01.jpg",
    imageWidth: 1206,
    imageHeight: 1765,
    photos: Array.from(
      { length: 18 },
      (_, i) =>
        `/images/events/heygen-hackathon/heygen-hackathon-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
];

export function getUpcomingEvents(from: Date = new Date()): EventItem[] {
  return events
    .filter((e) => new Date(e.date) >= from)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(from: Date = new Date()): EventItem[] {
  return events
    .filter((e) => new Date(e.date) < from)
    .sort((a, b) => b.date.localeCompare(a.date));
}

// Builds Event JSON-LD for one event. isPast is passed explicitly (rather
// than recomputed from `new Date()`) so a past event is never mismarked as
// scheduled/upcoming due to a stale server render.
export function eventJsonLd(event: EventItem, isPast: boolean, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.startDateTime,
    ...(event.endDateTime ? { endDate: event.endDateTime } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: event.isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: event.isOnline
      ? { "@type": "VirtualLocation", url: siteUrl }
      : {
          "@type": "Place",
          name: event.location,
          address: event.location,
        },
    image: `${siteUrl}${event.image}`,
    organizer: {
      "@type": "Organization",
      name: "The Pioneer Lounge",
      url: siteUrl,
    },
    ...(isPast ? {} : event.externalUrl ? { url: event.externalUrl } : {}),
  };
}
