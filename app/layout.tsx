import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://john-rey-portfolio-wsj7.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Rey Baliguat | Technical, Admin & Customer Support",
    template: "%s | John Rey Baliguat",
  },
  description:
    "John Rey Baliguat supports customers, administrative operations, business systems, websites, hardware and printer installation, maintenance, and technical workflows for remote teams.",
  keywords: [
    "Technical Support",
    "Application Support",
    "Customer Support",
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
  ],
  authors: [{ name: "John Rey Baliguat" }],
  creator: "John Rey Baliguat",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "John Rey Baliguat | Technical, Admin & Customer Support",
    description:
      "Customer support, administrative operations, business-system familiarization, website support, hardware installation, maintenance, and technical troubleshooting.",
    siteName: "John Rey Baliguat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Rey Baliguat | Technical, Admin & Customer Support",
    description:
      "Customer support, administrative operations, business-system familiarization, website support, hardware installation, maintenance, and technical troubleshooting.",
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
