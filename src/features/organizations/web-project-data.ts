import type { Project } from "./project-data";

export type WebProject = Project & {
  caseStudy: {
    tagline: string;
    eyebrow: string;
    facts: readonly (readonly [string, string])[];
    tags: readonly string[];
    overview: readonly string[];
    challenge: string;
    approach: string;
    featureGroups: readonly { title: string; description: string }[];
    productFoundations: readonly { title: string; description: string }[];
    audience: readonly string[];
    outcome: string;
    gallery: readonly { src: string; alt: string; caption: string }[];
  };
};

const fastGo = {
  cover: "/assets/projects/web/fastgo_travel/Fastgo Travel.png",
  discovery: "/assets/projects/web/fastgo_travel/2nd page.png",
  booking: "/assets/projects/web/fastgo_travel/3rd page.png",
  checkout: "/assets/projects/web/fastgo_travel/4th page.png",
} as const;

export const webProjects: readonly WebProject[] = [{
  id: "fastgo-travel",
  name: "FastGo Travel",
  description: "A responsive travel platform connecting destination discovery, flight and hotel search, visa support, tours, insurance, and secure checkout.",
  services: "Product design ? Responsive web ? Booking UX ? Checkout",
  cover: fastGo.cover,
  gallery: [fastGo.discovery, fastGo.booking, fastGo.checkout],
  detailHref: "/case-study/web",
  caseStudy: {
    tagline: "From dream to departure, one connected travel experience.",
    eyebrow: "Travel booking platform",
    facts: [
      ["Platform", "Responsive web"],
      ["Industry", "Travel & tourism"],
      ["Scope", "Discovery to checkout"],
      ["Services", "Flights, hotels & more"],
    ],
    tags: ["Travel platform", "Responsive product", "Booking UX", "Secure checkout"],
    overview: [
      "FastGo Travel brings flight search, hotel discovery, visa assistance, tours, and travel insurance into one cohesive interface. It supports the journey from finding inspiration and comparing options to choosing a seat, reviewing an order, and paying securely.",
      "The product maintains continuity across desktop, tablet, and mobile. Discovery pages introduce destinations and travel categories, while transactional screens use structured results and focused calls to action to move travellers toward a booking.",
    ],
    challenge: "Travel planning combines products with different search inputs, inventory, pricing, and decision points. FastGo needed to make that complexity approachable while maintaining clarity and trust from open-ended exploration through payment.",
    approach: "The experience is organized around recognizable travel services and a prominent search path. Progressive steps reveal the right information for inspiration, comparison, seat selection, order review, and payment.",
    featureGroups: [
      { title: "Service-first discovery", description: "Flights, hotels, visas, tours, and insurance are presented as one connected offer with a clear starting point." },
      { title: "Flexible flight search", description: "One-way, round-trip, and multi-city search includes route, date, passenger, and cabin controls." },
      { title: "Focused comparison", description: "Filters sit beside scannable itinerary, timing, airline, and fare information." },
      { title: "Travel inspiration", description: "Destinations, themed categories, packages, and visa consultation connect planning with booking." },
      { title: "Responsive booking flow", description: "Core journeys adapt across laptop, tablet, and phone layouts without losing key actions." },
      { title: "Guided checkout", description: "Seat selection, payment methods, order summaries, and confirmation create a clear final path." },
    ],
    productFoundations: [
      { title: "Consistent interface system", description: "Shared navigation, cards, controls, and actions connect discovery and transaction-heavy screens." },
      { title: "Journey-aware information", description: "The hierarchy shifts from broad inspiration to detailed comparison and a focused checkout." },
      { title: "Trust at purchase", description: "Familiar payment options, order details, security messaging, and confirmation support the final commitment." },
    ],
    audience: ["Leisure travellers", "Business travellers", "Families and groups", "Tour customers", "Visa-assistance customers", "Mobile-first bookers"],
    outcome: "FastGo Travel turns separate travel tasks into one branded, end-to-end journey. It balances inspiration with utility and creates a coherent path from the first search to a confirmed purchase.",
    gallery: [
      { src: fastGo.cover, alt: "FastGo Travel website shown across laptop, tablet, and mobile devices beside the brand identity", caption: "A responsive experience built around five travel services" },
      { src: fastGo.discovery, alt: "FastGo Travel homepage and supporting service pages in a campaign composition", caption: "Destination discovery, categories, and service content" },
      { src: fastGo.booking, alt: "FastGo Travel flight results on a laptop with package and hotel pages behind it", caption: "Search, comparison, packages, and accommodation" },
      { src: fastGo.checkout, alt: "FastGo Travel mobile screens for seat selection, payment, and order summary", caption: "A mobile-ready path from seat selection to payment" },
    ],
  },
}] as const;
