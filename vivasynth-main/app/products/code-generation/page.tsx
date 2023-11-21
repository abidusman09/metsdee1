"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import codeGeneration from "@/public/code-generation.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const codeGenerationFeatures = [
  {
    heading: "The cutting-edge",
    headingColoured: "generative AI solution",
    description: `Code Generation utilizes the power of language-based AI to
    generate syntactically and logically correct code with unmatched
    precision and efficiency.`,
    descriptionColor: "text-rose-700",
    background: "bg-rose-100",
    headingColor: "text-rose-500",
  },
  {
    heading: "Streamlined and",
    headingColoured: "developer-friendly companion",
    description: `Bid farewell to coding complexities and embrace a seamless coding
    experience. Code Generation's intuitive interface ensures
    effortless interaction and boosts productivity.`,
    descriptionColor: "text-green-700",
    background: "bg-green-100",
    headingColor: "text-green-500",
  },
  {
    heading: "Master of",
    headingColoured: "code continuity",
    description: `Seamlessly carries forward the codebase, maintaining consistency
    and clarity. Referencing previous code snippets, Code Generation
    ensures a smooth and uninterrupted coding journey.`,
    descriptionColor: "text-teal-700",
    background: "bg-teal-100",
    headingColor: "text-teal-500",
  },
  {
    heading: "Unleash the coding",
    headingColoured: "genius within",
    description: `Drawing from a vast repository of knowledge and expertise, Code
    Generation unleashes its creative prowess, rapidly generating
    valuable and original code like no other.`,
    descriptionColor: "text-orange-700",
    background: "bg-orange-100",
    headingColor: "text-orange-500",
  },
  {
    heading: "Multilingual",
    headingColoured: "coding assistant",
    description: `Communicate in your preferred programming language, and witness
    the magic unfold. With fluency in 30+ programming languages, Code
    Generation breaks language barriers and empowers developers
    worldwide!`,
    descriptionColor: "text-sky-700",
    background: "bg-sky-100",
    headingColor: "text-sky-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [450, 2850]);
  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Code Generation
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Code Generation takes your programming endeavors to new heights by
          harnessing the power of language-based generative AI. With our
          innovative technology, we bring you an exceptional coding assistant
          that generates syntactically and logically correct code effortlessly.
          Say goodbye to tedious manual coding and embrace the efficiency and
          precision of Code Generation. Let your programming ideas come to life
          with ease and confidence.
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={codeGeneration}
            className="w-full rounded-lg border-black/20"
            alt="aira-chat"
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
          {...codeGenerationFeatures[0]}
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={codeGeneration}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="code generation"
              />
            </motion.div>
          }
        />
        {codeGenerationFeatures.slice(1, 5).map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Harness the Power of Language-Based generative AI to Generate Accurate and Efficient Code"
        description="Elevate your coding experience with Code Generation: where language-based generative AI creates syntactically and logically correct code!"
        buttonText="Generate Code"
        href="/code"
      />
    </section>
  );
};

export default Page;
