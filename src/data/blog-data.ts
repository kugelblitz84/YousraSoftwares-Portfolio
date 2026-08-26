export type BlogBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: readonly string[] };

export type BlogPost = {
  slug: string;
  slot: string;
  category: string;
  title: string;
  summary: string;
  publishedLabel: string;
  readTime: string;
  hero: { eyebrow: string; statement: string };
  body: readonly BlogBlock[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "building-software-that-is-ready-to-evolve",
    slot: "STARTER INSIGHT 01",
    category: "Engineering",
    title: "Building software that is ready to evolve",
    summary:
      "Architecture choices for a focused first release and a maintainable path forward.",
    publishedLabel: "[PUBLICATION DATE]",
    readTime: "6 min read",
    hero: {
      eyebrow: "Engineering insight",
      statement:
        "Build for the next useful change—not every imaginable future.",
    },
    body: [
      {
        kind: "paragraph",
        text: "Good product architecture is not about predicting every feature a business might need. It is about creating clear boundaries, choosing dependable tools, and keeping important decisions easy to revisit as real usage teaches the team more.",
      },
      { kind: "heading", text: "Start with the product's pressure points" },
      {
        kind: "paragraph",
        text: "Before selecting patterns or infrastructure, identify the parts of the product most likely to change: permissions, pricing, integrations, workflows, or data volume. Those pressure points deserve deliberate interfaces. Stable, ordinary parts can remain simple.",
      },
      { kind: "heading", text: "Keep the first release understandable" },
      {
        kind: "paragraph",
        text: "A focused codebase with explicit modules is often more valuable than a distributed system introduced too early. Clear naming, automated checks, documented decisions, and predictable deployment reduce the cost of every later feature.",
      },
      { kind: "heading", text: "Design boundaries around responsibilities" },
      {
        kind: "list",
        items: [
          "Keep presentation logic separate from business rules.",
          "Give external integrations a narrow, replaceable interface.",
          "Model permissions and data ownership explicitly.",
          "Measure the behavior that matters before optimizing it.",
        ],
      },
      { kind: "heading", text: "Scale from evidence" },
      {
        kind: "paragraph",
        text: "Performance work should follow measurement. When a real bottleneck appears, a clear architecture makes it possible to cache, queue, isolate, or replace the affected part without rewriting the entire product.",
      },
      { kind: "heading", text: "The practical takeaway" },
      {
        kind: "paragraph",
        text: "The strongest foundation is one the current team can understand and operate. Build the smallest coherent system that serves today's product, then evolve it with evidence from users and production.",
      },
    ],
  },
  {
    slug: "from-business-problem-to-product-scope",
    slot: "STARTER INSIGHT 02",
    category: "Product",
    title: "From business problem to product scope",
    summary:
      "A practical discovery approach for defining priorities before development begins.",
    publishedLabel: "[PUBLICATION DATE]",
    readTime: "[READ TIME]",
    hero: {
      eyebrow: "Product insight",
      statement: "[ADD THE CENTRAL ARGUMENT OF THIS ARTICLE]",
    },
    body: [
      {
        kind: "paragraph",
        text: "[Open with the business situation this article addresses and why scoping decisions made here shape everything downstream.]",
      },
      { kind: "heading", text: "[FIRST SECTION HEADING]" },
      {
        kind: "paragraph",
        text: "[Describe the discovery activities that turn a broad business problem into a defined product scope.]",
      },
      { kind: "heading", text: "[SECOND SECTION HEADING]" },
      {
        kind: "list",
        items: [
          "[KEY DISCOVERY ACTIVITY]",
          "[PRIORITISATION CRITERION]",
          "[SCOPE BOUNDARY DECISION]",
        ],
      },
      { kind: "heading", text: "The practical takeaway" },
      {
        kind: "paragraph",
        text: "[Close with the decision a reader should be able to make after reading this article.]",
      },
    ],
  },
  {
    slug: "where-ai-integration-creates-real-value",
    slot: "STARTER INSIGHT 03",
    category: "AI",
    title: "Where AI integration creates real value",
    summary:
      "How to evaluate AI opportunities by workflow impact instead of novelty.",
    publishedLabel: "[PUBLICATION DATE]",
    readTime: "[READ TIME]",
    hero: {
      eyebrow: "AI insight",
      statement: "[ADD THE CENTRAL ARGUMENT OF THIS ARTICLE]",
    },
    body: [
      {
        kind: "paragraph",
        text: "[Open with the difference between AI features that change a workflow and AI features that only demonstrate capability.]",
      },
      { kind: "heading", text: "[FIRST SECTION HEADING]" },
      {
        kind: "paragraph",
        text: "[Explain how to locate the workflows where automation or generation removes genuine effort.]",
      },
      { kind: "heading", text: "[SECOND SECTION HEADING]" },
      {
        kind: "list",
        items: [
          "[WORKFLOW WITH MEASURABLE COST]",
          "[QUALITY BAR THE OUTPUT MUST MEET]",
          "[FALLBACK WHEN THE MODEL IS WRONG]",
        ],
      },
      { kind: "heading", text: "The practical takeaway" },
      {
        kind: "paragraph",
        text: "[Close with the evaluation question a team should ask before committing to an AI feature.]",
      },
    ],
  },
] as const;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string) {
  return blogPosts.filter((post) => post.slug !== slug);
}
