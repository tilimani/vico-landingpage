import React from "react";
import HeroSection from "./HeroSection";
import PlacesSection from "./PlacesSection";
import FieldsSection from "./FieldsSection";
import LivingSection from "./LivingSection";
import StepsSection from "./StepsSection";
import EarnMoneySection from "./EarnMoneySection";
import NeedsSection from "./NeedsSection";
import Community from "./Community";
import PartnersSection from "./PartnersSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <PlacesSection />
      <FieldsSection />
      <LivingSection />
      <StepsSection />
      <EarnMoneySection />
      <NeedsSection />
      <Community />
      <PartnersSection />
    </>
  );
};

export default LandingPage;
