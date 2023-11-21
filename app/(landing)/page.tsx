import CTA from "@/components/common/cta";
import React from "react";
import Features from "@/app/(landing)/components/features";
import WhyUs from "@/app/(landing)/components/Features2";
import MoreFeatures from "@/app/(landing)/components/more-features";
import Bullet from "@/app/(landing)/components/bullet";
import TextZoom from "@/app/(landing)/components/text-zoom";
import Hero from "@/app/(landing)/components/hero";
import Modal from "@/app/(landing)/components/modal";
import Modal2 from "@/app/(landing)/components/modals2";
import Merge from "@/app/(landing)/components/merge";

const Page = () => {
  return (
    <div>
      <Hero />
      <TextZoom />
      <WhyUs />
      <Features />
      <MoreFeatures />
      <Bullet />
      <CTA />
      <Modal />
      <Modal2 />
      <Merge />
    </div>
  );
};

export default Page;
