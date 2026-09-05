import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Rey Baliguat | Technical Virtual Assistant | Web Support & Automation",
    template: "%s | John Rey Baliguat",
  },
  description:
    "Remote Technical Virtual Assistant focused on website support, troubleshooting, QA, business systems, database-backed tasks, and practical automation.",
  keywords: [
    "Technical Virtual Assistant",
    "Remote Technical VA",
    "Website Support",
    "QA Testing",
    "Website Maintenance",
    "Technical Support",
    "Business Systems",
    "Automation",
    "Remote Web Support",
  ],
  authors: [{ name: "John Rey Baliguat" }],
  creator: "John Rey Baliguat",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "John Rey Baliguat | Technical Virtual Assistant | Web Support & Automation",
    description:
      "Technical VA support, website maintenance, troubleshooting, QA, business systems, and practical automation for growing businesses.",
    siteName: "John Rey Baliguat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Rey Baliguat | Technical Virtual Assistant | Web Support & Automation",
    description:
      "Technical VA support, website maintenance, troubleshooting, QA, business systems, and practical automation for growing businesses.",
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
