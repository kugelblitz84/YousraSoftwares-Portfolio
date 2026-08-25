import type { Project } from "./project-data";

export type MobileCaseStudy = {
  tagline: string;
  eyebrow: string;
  facts: readonly (readonly [string, string])[];
  tags: readonly string[];
  overview: readonly string[];
  challenge: string;
  approach: string;
  featureGroups: readonly { title: string; description: string }[];
  engineering: readonly { title: string; description: string }[];
  audience: readonly string[];
  outcome: string;
  gallery: readonly { src: string; alt: string; caption: string }[];
};

export type MobileProject = Project & { caseStudy: MobileCaseStudy };

const kickscore = {
  cover: "/assets/projects/mobile/kickscore/4k kicscore.png",
  league: "/assets/projects/mobile/kickscore/kicscore 1.png",
  matches: "/assets/projects/mobile/kickscore/matches.png",
  statistics: "/assets/projects/mobile/kickscore/CR7.png",
} as const;

const landguru = {
  cover: "/assets/projects/mobile/landguru/land.png",
  marketplace: "/assets/projects/mobile/landguru/landguru mockup1.png",
  payment: "/assets/projects/mobile/landguru/land payment.png",
  dashboard: "/assets/projects/mobile/landguru/land iph.png",
} as const;

export const mobileProjects: readonly MobileProject[] = [
  {
    id: "landguru",
    name: "LandGuru",
    description: "A Bangladesh-focused PropTech marketplace connecting property discovery, verification, appointments, payments, and deal management.",
    services: "Flutter · Dart · REST APIs · Firebase · SSLCommerz",
    cover: landguru.cover,
    gallery: [landguru.marketplace, landguru.payment, landguru.dashboard],
    detailHref: "/case-study/mobile/landguru",
    caseStudy: {
      tagline: "Discover, verify, and transact property with confidence.",
      eyebrow: "PropTech marketplace",
      facts: [["Platforms", "iOS & Android"], ["Market", "Bangladesh"], ["Product", "Multi-role marketplace"], ["Users", "Buyers, sellers & field agents"]],
      tags: ["Flutter", "Dart", "REST APIs", "Firebase", "SSLCommerz"],
      overview: [
        "LandGuru is a digital marketplace for buying, selling, verifying, and managing land and property in Bangladesh. It connects property owners, buyers, investors, and field verification agents in one mobile product.",
        "The application goes beyond property listings. It supports buyer requirements, seller offers, professional land services, appointments, secure payments, identity verification, and a dedicated operational experience for field agents.",
      ],
      challenge: "Land transactions are typically fragmented across listings, documents, verification providers, site visits, negotiations, and payments. The product needed to make a legally and operationally complex journey easier to follow without hiding the detail users need for due diligence.",
      approach: "We shaped the experience as a modular, role-aware workflow. Customer journeys guide buyers and sellers from discovery or listing creation through documents, quotations, appointments, payments, and completed deals, while a separate field-agent experience turns verification work into trackable assignments.",
      featureGroups: [
        { title: "Marketplace & matching", description: "Searchable property listings sit alongside a wanted marketplace where buyers publish requirements and sellers respond with matching active or newly submitted properties." },
        { title: "Verification & land services", description: "Structured services cover ownership history, maps, physical measurement, document organization, registration support, record updates, disputes, acquisition risk, and court-case checks." },
        { title: "Offers, visits & payments", description: "Quotation, requotation, offer acceptance, appointment scheduling, SSLCommerz payments, and status management create a traceable path from interest to transaction." },
        { title: "Field operations", description: "Agents receive location-aware task queues, schedules, work logs, file uploads, and review stages for new, active, in-review, and completed assignments." },
        { title: "Property intelligence", description: "Property pages combine price and location data with ownership history, legal documents, verification results, and Mouza or Pentagraph maps, with privacy-controlled premium access." },
        { title: "Local-first experience", description: "BDT pricing, Bangladeshi phone and address formats, NID and TIN workflows, and conversion across Katha, Bigha, Decimal, Acre, and square feet reflect the market’s needs." },
      ],
      engineering: [
        { title: "Modular Flutter architecture", description: "A feature-first structure and reusable design system support a large application with distinct customer and field-agent journeys across Android and iOS." },
        { title: "Secure services & data", description: "REST APIs power marketplace and workflow data, while OTP onboarding, token-based sessions, identity-document verification, and pre-signed cloud uploads protect sensitive interactions." },
        { title: "Payments & engagement", description: "SSLCommerz is embedded for quotations and premium access, and Firebase Cloud Messaging supplies real-time updates across appointments, offers, services, and agent tasks." },
      ],
      audience: ["Landowners and property sellers", "Home and land buyers", "Property investors", "Real-estate agencies", "Surveyors and verification agents", "Registration and documentation providers"],
      outcome: "LandGuru turns a scattered property journey into one traceable product experience. Buyers gain stronger discovery and due-diligence tools, sellers can market and manage property systematically, and the operating team gains a scalable foundation for coordinating customers, agents, services, payments, and transaction records.",
      gallery: [
        { src: landguru.cover, alt: "LandGuru property listing screens arranged across a blue campaign visual", caption: "Smart listings and guided selling" },
        { src: landguru.marketplace, alt: "LandGuru marketplace screens presented in an angled product composition", caption: "A connected property marketplace" },
        { src: landguru.payment, alt: "LandGuru secure payment interface shown on a mobile device", caption: "Secure payment and instant activation" },
        { src: landguru.dashboard, alt: "LandGuru dashboard screens displayed across three mobile devices", caption: "Property management in one dashboard" },
      ],
    },
  },
  {
    id: "kicscore",
    name: "KICSCORE",
    description: "A feature-rich football companion for live matches, fixtures, detailed statistics, competition data, news, and personalized updates.",
    services: "Flutter · Dart · REST APIs · Firebase · Mobile ads",
    cover: kickscore.cover,
    gallery: [kickscore.league, kickscore.matches, kickscore.statistics],
    detailHref: "/case-study/mobile/kicscore",
    caseStudy: {
      tagline: "Every match. Every moment.",
      eyebrow: "Football companion app",
      facts: [["Platforms", "iOS & Android"], ["Product", "Sports data & news"], ["Experience", "Live & personalized"], ["Audience", "Football supporters"]],
      tags: ["Flutter", "Dart", "REST APIs", "Firebase", "Mobile advertising"],
      overview: [
        "KICSCORE is a football information and fan-engagement application that combines live match activity, competition data, detailed statistics, football news, and personalized updates in one mobile experience.",
        "It serves quick score-checking and deeper exploration equally well. Fans can move from a fixture into events, formations, player performance, head-to-head history, standings, knockout brackets, club profiles, and career records without switching between specialist apps.",
      ],
      challenge: "Football products must present large, fast-changing datasets without overwhelming the user. KICSCORE needed to make live and asynchronous states resilient, keep dense match and competition data readable on small screens, and help every supporter find the clubs, players, and tournaments they care about.",
      approach: "We organized the product around familiar fan behaviors: browse by date, open a match center, explore the wider competition, search the football ecosystem, and follow favourites. Progressive loading, cached imagery, pagination, pull-to-refresh, and defensive network states keep those journeys responsive across light and dark themes.",
      featureGroups: [
        { title: "Live match centers", description: "Live, upcoming, and completed fixtures open into previews, events, statistics, lineups, venues, knockout context, and head-to-head records." },
        { title: "Competitions in depth", description: "League and tournament hubs include season selection, standings, fixtures, knockout brackets, top scorers, assists, player rankings, and team statistics." },
        { title: "Teams, players & coaches", description: "Rich profiles connect recent form, squads, venues, traits, match histories, season statistics, career records, rankings, honours, and trophies." },
        { title: "Personalized following", description: "Supporters can follow favourite clubs, competitions, players, and coaches, then receive relevant push updates in an organized notification centre." },
        { title: "Search & football news", description: "Unified search spans teams, leagues, and players, while a dedicated news feed and article experience adds editorial context to the data." },
        { title: "Account & display controls", description: "Registration, email verification, password recovery, profile editing, photo uploads, and light or dark display modes create a complete consumer experience." },
      ],
      engineering: [
        { title: "Data-driven architecture", description: "A modular Flutter and Dart codebase maps complex REST datasets into reusable match, competition, team, player, coach, news, search, and account features." },
        { title: "Responsive performance", description: "Image caching, skeleton states, pagination, pull-to-refresh, and resilient error handling keep information moving while large or unreliable responses resolve." },
        { title: "Engagement & monetization", description: "Firebase Cloud Messaging and native notifications power follow-based engagement, while integrated mobile advertising supports a sustainable product model." },
      ],
      audience: ["Everyday football supporters", "Live-score and fixture followers", "Statistics-focused fans", "Fantasy football players", "Sports journalists and analysts", "Football communities and creators"],
      outcome: "KICSCORE provides a single, scalable destination for football discovery and following. It balances immediate match updates with deep sports intelligence, gives fans control over what they follow, and establishes a maintainable foundation for more competitions, content, and future sports experiences.",
      gallery: [
        { src: kickscore.cover, alt: "KICSCORE football screens arranged in a dark green campaign visual", caption: "Every match, every moment" },
        { src: kickscore.league, alt: "KICSCORE competition screens displayed across three mobile devices", caption: "Major leagues at your fingertips" },
        { src: kickscore.matches, alt: "KICSCORE match center interfaces shown across mobile devices", caption: "Live match centers and following" },
        { src: kickscore.statistics, alt: "KICSCORE player statistics interface displayed on a phone", caption: "The numbers behind the performance" },
      ],
    },
  },
] as const;

export function getMobileProject(slug: string) {
  return mobileProjects.find((project) => project.id === slug);
}