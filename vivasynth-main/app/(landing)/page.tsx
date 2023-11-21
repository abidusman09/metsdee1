import CTA from "@/components/common/cta";
import React from "react";
import Features from "@/app/(landing)/components/features";
import WhyUs from "@/app/(landing)/components/Features2";
import MoreFeatures from "@/app/(landing)/components/more-features";
import TextZoom from "@/app/(landing)/components/text-zoom";
import Hero from "@/app/(landing)/components/hero";

const Page = () => {
  return (
    <div>
      <Hero />
      <TextZoom />
      <WhyUs />
      <Features />
      <MoreFeatures />
      <CTA />
    </div>
  );
};

export default Page;
