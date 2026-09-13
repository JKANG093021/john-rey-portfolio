import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://john-rey-portfolio-wsj7.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Rey Baliguat | Technical VA & Web Support",
    template: "%s | John Rey Baliguat",
  },
  description:
    "John Rey Baliguat provides Technical VA, web, e-commerce, customer, and admin support, with hardware experience and light real-estate experience as a licensed salesperson.",
  keywords: [
    "Technical Support",
    "Technical Virtual Assistant",
    "Application Support",
    "Customer Support",
    "E-commerce Support",
    "E-commerce Virtual Assistant",
    "Email and Chat Support",
    "Administrative Support",
    "Operations Assistant",
    "Business Systems",
    "Website Support",
    "Hardware Installation",
    "Printer Support",
    "System Maintenance",
    "QA Testing",
    "Junior IT Support",
    "Remote Web Support",
    "Licensed Real Estate Salesperson",
    "Real Estate Support",
  ],
  authors: [{ name: "John Rey Baliguat" }],
  creator: "John Rey Baliguat",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "John Rey Baliguat | Technical VA & Web Support",
    description:
      "Technical VA, web, e-commerce, customer, and admin support with practical hardware experience and a licensed real-estate background.",
    siteName: "John Rey Baliguat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Rey Baliguat | Technical VA & Web Support",
    description:
      "Technical VA, web, e-commerce, customer, and admin support with practical hardware experience and a licensed real-estate background.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050b13",
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("johnrey-portfolio-theme");
    var theme = saved === "light" || saved === "dark" ? saved : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
