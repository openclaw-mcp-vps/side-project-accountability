import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Side Project Accountability — Stay on Track",
  description: "Weekly check-ins, progress tracking, and peer accountability for your side projects. Gentle social pressure to keep you shipping."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1c1afae9-8323-4b7b-92b5-ecd86ddf1b2f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
