"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import contentWriter from "@/public/content-creator.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const contentWriterFeatures = [
  {
    heading: "The ultimate",
    headingColoured: "content creation tool",
    description: `Content Writer harnesses the intelligence of language-based
    generative AI to generate high-quality content on any subject, in
    any style.`,
    descriptionColor: "text-lime-700",
    background: "bg-lime-100",
    headingColor: "text-lime-500",
  },
  {
    heading: "Effortless and",
    headingColoured: "versatile companion",
    description: `Say goodbye to writer's block and hello to limitless creativity.
    Experience the convenience of Content Writer's intuitive
    interface.`,
    descriptionColor: "text-blue-700",
    background: "bg-blue-100",
    headingColor: "text-blue-500",
  },
  {
    heading: "Master of",
    headingColoured: "linguistic finesse",
    description: `Craft compelling narratives with precision and eloquence. Drawing
    from a vast pool of linguistic knowledge, Content Writer ensures
    seamless flow and coherence.`,
    descriptionColor: "text-cyan-700",
    background: "bg-cyan-100",
    headingColor: "text-cyan-500",
  },
  {
    heading: "Unparalleled",
    headingColoured: "originality",
    description: `With access to a wealth of data and insights, Content Writer
    generates unique and valuable content that stands out from the
    crowd.`,
    descriptionColor: "text-violet-700",
    background: "bg-violet-100",
    headingColor: "text-violet-500",
  },
  {
    heading: "Multilingual",
    headingColoured: "brilliance",
    description: `Communicate in your preferred language and witness the magic
    unfold. With proficiency in 30+ languages, Content Writer breaks
    down language barriers with ease!`,
    descriptionColor: "text-yellow-700",
    background: "bg-yellow-100",
    headingColor: "text-yellow-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [460, 2824]);

  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Content Writer
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Unleash the power of language-based generative AI! With Content
          Writer, you have a versatile tool that can generate captivating
          content on any topic, in any style you desire. From informative
          articles to engaging stories, Content Writer brings your ideas to life
          with its exceptional writing prowess. Say goodbye to writer&apos;
          block and hello to endless possibilities with Content Writer!
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={contentWriter}
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
          {...contentWriterFeatures[0]}
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={contentWriter}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="content writer"
              />
            </motion.div>
          }
        />

        {contentWriterFeatures.slice(1, 5).map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Unleash the Power of Language-based generative AI to Create Captivating Content on Any Subject!"
        description="Introducing Content Writer, a revolutionary platform powered by language-based generative AI to create engaging and compelling content"
        buttonText="Write Content"
        href="/content-writer"
        className="aira-chat-gradient"
      />
    </section>
  );
};

export default Page;
