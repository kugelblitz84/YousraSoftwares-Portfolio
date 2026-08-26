import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { CursorFollower } from "@/components/ui/cursor-follower";

export const metadata: Metadata = {
  title: {
    default: "YusraSoftwares — Web, Mobile & AI Product Development",
    template: "%s | YusraSoftwares",
  },
  description:
    "YusraSoftwares designs and develops modern web platforms, mobile applications, UI/UX experiences, and AI-powered solutions for businesses.",
  icons: { icon: "/assets/icons/favicon.svg" },
  openGraph: {
    type: "website",
    images: ["/assets/logos/thumbnail.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white">
        <Script id="theme-init" strategy="beforeInteractive">
          {
            "document.documentElement.classList.toggle('dark',localStorage.theme==='dark'||(!('theme' in localStorage)&&matchMedia('(prefers-color-scheme:dark)').matches));"
          }
        </Script>
        <SmoothScroll />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
