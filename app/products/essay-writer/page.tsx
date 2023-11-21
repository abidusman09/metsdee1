"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import essayWriter from "@/public/essay-writer.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const essayWriterFeatures = [
  {
    heading: "Unleash your",
    headingColoured: "creativity",
    description: `Say goodbye to writer's block and hello to a world of inspiration.
    Essay Writer's language-based generative AI is designed to spark
    your imagination and help you express your thoughts with
    eloquence.`,
    descriptionColor: "text-cyan-700",
    background: "bg-cyan-100",
    headingColor: "text-cyan-500",
  },
  {
    heading: "The guardian of",
    headingColoured: "coherence",
    description: `Seamlessly weaving ideas together, Essay Writer ensures a logical
    flow in your essays. It references previous sections, creating a
    cohesive masterpiece that captivates readers.`,
    descriptionColor: "text-violet-700",
    background: "bg-violet-100",
    headingColor: "text-violet-500",
  },
  {
    heading: "A treasure trove of",
    headingColoured: "knowledge",
    description: `Drawing from a vast repository of information, Essay Writer offers
    a unique perspective on any topic. It combines the power of
    language and data to create insightful and original content.`,
    descriptionColor: "text-amber-700",
    background: "bg-amber-100",
    headingColor: "text-amber-500",
  },
  {
    heading: "Language knows",
    headingColoured: "no bounds",
    description: `Essay Writer breaks language barriers with its multilingual
    capabilities. Communicate your ideas effortlessly in over 30
    languages, and witness the magic of language-based generative AI
    unfold before your eyes.`,
    descriptionColor: "text-lime-700",
    background: "bg-lime-100",
    headingColor: "text-lime-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [360, 2200]);
  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Essay Writer
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Unlock the Power of Language-Based generative AI for Your Essays
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={essayWriter}
            className="w-full rounded-lg border-black/20"
            alt="essay-writer"
          />
        </div>
      </div>

      {/* features */}
      <div
        className="space-y-4 overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <ProductFeature
          {...essayWriterFeatures[0]}
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={essayWriter}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="aira-chat"
              />
            </motion.div>
          }
        />
        {essayWriterFeatures.slice(1, 4).map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Maximize writing potential with AI-powered Essay Writer for exceptional essays."
        description="Empowering Academic Excellence with generative AI-Powered Essay Writing"
        buttonText="Write Essay"
        href="/essay-writer"
        className="essay-gradient"
      />
    </section>
  );
};

export default Page;
