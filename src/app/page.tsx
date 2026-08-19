import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { HomePage } from "@/features/organizations/home-page";

export default function Page() {
  return <><SiteHeader /><HomePage /><SiteFooter /></>;
}
