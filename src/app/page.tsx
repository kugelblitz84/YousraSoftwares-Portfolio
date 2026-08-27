import { AboutSection } from "./_sections/about-section";
import { CapabilitySection } from "./_sections/capability-section";
import { ContactSection } from "./_sections/contact-section";
import { HeroSection } from "./_sections/hero-section";
import { ServicesSection } from "./_sections/services-section";
import { WhyUsSection } from "./_sections/why-us-section";
import { WorkSection } from "./_sections/work-section";

export default function Page() {
  return (
    <main id="main">
      <HeroSection />
      <ServicesSection />
      <CapabilitySection />
      <WorkSection />
      <AboutSection />
      {/* <TeamSection /> — ./_sections/team-section, awaiting verified names and photos */}
      <WhyUsSection />
      {/* <InsightsSection /> — ./_sections/insights-section, awaiting published articles */}
      <ContactSection />
    </main>
  );
}
