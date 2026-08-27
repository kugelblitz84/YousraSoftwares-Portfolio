import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy slug-less article URL — the article now lives under /blog/[slug].
      {
        source: "/blog-article",
        destination: "/blog/building-software-that-is-ready-to-evolve",
        permanent: true,
      },
      // Case-study index paths are not pages; send them to the matching project list.
      {
        source: "/case-study",
        destination: "/projects/web",
        permanent: false,
      },
      {
        source: "/case-study/mobile",
        destination: "/projects/mobile",
        permanent: false,
      },
      {
        source: "/case-study/ui-ux",
        destination: "/projects/ui-ux",
        permanent: false,
      },
      // The web case study used to be slug-less; it is now one project among many.
      {
        source: "/case-study/web",
        destination: "/case-study/web/fastgo-travel",
        permanent: true,
      },
      // Project categories live at /projects/[category]; the bare path has no page.
      {
        source: "/projects",
        destination: "/#work",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
