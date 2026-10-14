import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: AI Enablement for Teams That Build`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI training",
    "AI workshops",
    "AI consultant",
    "AI enablement",
    "AI hack sprint",
    "enterprise AI training",
    "AI upskilling",
    "The Pioneer Lounge",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name}: AI Enablement for Teams That Build`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: AI Enablement for Teams That Build`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo/icon-mark-orange.png`,
  image: `${site.url}/brand/logo/icon-mark-orange.png`,
  description: site.description,
  email: site.email,
  areaServed: "Worldwide",
  knowsAbout: [
    "Artificial intelligence training",
    "AI workshops",
    "AI strategy consulting",
    "Enterprise AI enablement",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="theme-color" content="#faf8f3" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-ink-950 font-sans text-paper">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
