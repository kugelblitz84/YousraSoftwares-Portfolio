import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Mobile Development Case Studies",
  description: "Explore cross-platform mobile products built by YusraSoftwares.",
};

export default function Page() {
  redirect("/projects/mobile");
}