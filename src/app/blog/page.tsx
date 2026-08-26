import type { Metadata } from "next";
import { BlogIndex } from "./_components/blog-index";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical ideas on software engineering, product development, design, mobile applications, AI, and building technology for businesses.",
};

export default function Page() {
  return <BlogIndex />;
}
