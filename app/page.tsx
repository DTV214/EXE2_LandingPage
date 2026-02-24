
import CTA from "@/components/sections/CTA";
import DataLineBanner from "@/components/sections/DataLineBanner";
import EnhancedAICoach from "@/components/sections/EnhancedAICoach";
import FeatureGrid from "@/components/sections/Features";
import HeroBanner from "@/components/sections/Hero";
import InspirationBanner from "@/components/sections/InspirationBanner";
import ProductShowcase from "@/components/sections/ProductShowcase";
import TheWhyBanner from "@/components/sections/TheWhyBanner";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroBanner />
      <InspirationBanner />
      <ProductShowcase />
      <DataLineBanner />
      <TheWhyBanner />
      <EnhancedAICoach />
      <FeatureGrid />
      <CTA />
    </div>
  );
}
