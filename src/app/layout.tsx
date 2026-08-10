import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/content";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.brand} - GTM & Business Development`,
    template: `%s · ${site.brand}`,
  },
  description:
    "GTM strategy, outbound systems, and MVP builds for early-stage startups. Led by Mihaela Vacari - Berlin-based business development & key account management.",
  openGraph: {
    title: `${site.brand} - GTM & Business Development`,
    description:
      "Pipeline and outbound systems for early-stage startups. Consulting by Mihaela Vacari.",
    url: site.domain,
    siteName: site.brand,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} - GTM & Business Development`,
    description:
      "Pipeline and outbound systems for early-stage startups. Consulting by Mihaela Vacari.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
