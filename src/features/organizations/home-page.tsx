import {
  AboutSection,
  CapabilitySection,
  ContactSection,
  HeroSection,
  InsightsSection,
  ServicesSection,
  TeamSection,
  WhyUsSection,
  WorkSection,
} from "./home-page-sections";

export function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <ServicesSection />
      <CapabilitySection />
      <WorkSection />
      <AboutSection />
      <TeamSection />
      <WhyUsSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}
