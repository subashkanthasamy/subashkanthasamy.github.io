import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://subashkanthasamy.github.io";
const DESCRIPTION =
  "Subash K — Android SDK Developer with 3+ years building scalable Android SDKs, Kotlin Multiplatform solutions, and reliable mobile developer tools at Zoho Corporation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Subash K — Android SDK Developer",
    template: "%s — Subash K",
  },
  description: DESCRIPTION,
  keywords: [
    "Subash K",
    "Android SDK Developer",
    "Kotlin",
    "Kotlin Multiplatform",
    "KMP",
    "Jetpack Compose",
    "Android Engineer",
    "Mobile Developer",
    "Zoho",
  ],
  authors: [{ name: "Subash K", url: SITE_URL }],
  creator: "Subash K",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Subash K — Android SDK Developer",
    description: DESCRIPTION,
    siteName: "Subash K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subash K — Android SDK Developer",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Subash K",
  jobTitle: "Android SDK Developer",
  worksFor: { "@type": "Organization", name: "Zoho Corporation" },
  url: SITE_URL,
  email: "mailto:subashktsmpi@gmail.com",
  telephone: "+91-7010373172",
  sameAs: [
    "https://github.com/subashkanthasamy",
    "https://www.linkedin.com/in/subash-kanthasamy/",
  ],
  knowsAbout: [
    "Android SDK",
    "Kotlin",
    "Kotlin Multiplatform",
    "Jetpack Compose",
    "MVVM",
    "Clean Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
