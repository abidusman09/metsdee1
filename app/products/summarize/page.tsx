"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import summarize from "@/public/summerize.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const summarizeFeatures = [
  {
    heading: "Unlock the power of",
    headingColoured: "knowledge",
    description: `Summerize has the ability to distill vast amounts of information
    into concise summaries, providing you with valuable insights in a
    fraction of the time.`,
    descriptionColor: "text-fuchsia-700",
    background: "bg-fuchsia-100",
    headingColor: "text-fuchsia-500",
  },
  {
    heading: "Seamless and",
    headingColoured: "user-friendly interface",
    description: `Bid farewell to complexity and embrace a seamless interaction.
    With Summerize's intuitive interface, summarizing text has never
    been easier.`,
    descriptionColor: "text-sky-700",
    background: "bg-sky-100",
    headingColor: "text-sky-500",
  },
  {
    heading: "Continuity at its",
    headingColoured: "finest",
    description: `Summerize maintains a coherent flow, referencing key points from
    the original text to create a seamless summarization experience
    for both you and me.`,
    descriptionColor: "text-teal-700",
    background: "bg-teal-100",
    headingColor: "text-teal-500",
  },
  {
    heading: "Unleash the",
    headingColoured: "creativity",
    description: `Drawing from a myriad of data sources, Summerize generates unique
    and valuable summaries that stand out from the crowd.`,
    descriptionColor: "text-orange-700",
    background: "bg-orange-100",
    headingColor: "text-orange-500",
  },
  {
    heading: "Language knows",
    headingColoured: "no boundaries",
    description: `Engage in conversations in your preferred language and witness the
    magic unfold. With Summerize's grasp on 30+ languages,
    communication becomes truly limitless.`,
    descriptionColor: "text-green-700",
    background: "bg-green-100",
    headingColor: "text-green-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [450, 2820]);
  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Summarize
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Summerize harnesses the incredible capabilities of language-based
          generative AI to provide you with quick and accurate summaries of any
          given text. Whether you&apos;re dealing with lengthy articles,
          research papers, or even books, Summerize is here to save you time and
          effort.
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={summarize}
            className="w-full  rounded-lg border-black/20"
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
        {summarizeFeatures.map((feature, i) => (
          <ProductFeature
            key={feature.heading}
            {...feature}
            rightContent={
              i == 0 && (
                <motion.div
                  style={{ top: top }}
                  className="absolute z-10 hidden lg:block"
                >
                  <Image
                    height={1000}
                    width={1000}
                    src={summarize}
                    className="max-w-lg rounded-lg  shadow-lg"
                    alt="summarize"
                  />
                </motion.div>
              )
            }
          />
        ))}
      </div>

      <ProductsCTA
        title="Summerize: Your ultimate AI-powered text summarization solution for effortless summaries."
        description="Introducing Summerize! Powered by advanced language-based generative AI, Summerize is the ultimate tool to effortlessly summarize any given text!"
        buttonText="Summarize Now"
        href="/summarize"
        className="aira-chat-gradient"
      />
    </section>
  );
};

export default Page;
