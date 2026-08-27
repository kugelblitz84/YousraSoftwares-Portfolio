export const siteConfig = {
  name: "YusraSoftwares",
  description:
    "Designing and engineering digital products for modern businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/#hero", section: "hero" },
    { label: "Services", href: "/#services", section: "services" },
    { label: "Works", href: "/#work", section: "work" },
    { label: "About", href: "/#about", section: "about" },
    // { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/#contact", section: "contact" },
  ],
} as const;
