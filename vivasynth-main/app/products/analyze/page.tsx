"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import analyze from "@/public/Analyse.gif";
import { useScroll, useTransform, motion } from "framer-motion";
import ProductFeature from "../components/product-feature";

const analyzeFeatures = [
  {
    heading: "Seamless And",
    headingColoured: "User-Friendly Interface",
    description: `Say goodbye to complicated analysis processes and hello to effortless interaction. Analyze makes document analysis a breeze, allowing you to navigate through complex information with ease.`,
    descriptionColor: "text-pink-700",
    background: "bg-pink-100",
    headingColor: "text-pink-500",
  },
  {
    heading: "Master Of",
    headingColoured: "Comprehension",
    description: `With its ability to understand and interpret documents, Analyze ensures a smooth flow of information. By referencing previous analyses, it creates a cohesive and coherent experience for you.`,
    descriptionColor: "text-emerald-700",
    background: "bg-emerald-100",
    headingColor: "text-emerald-500",
  },
  {
    heading: "Unleash Creativity With",
    headingColoured: "Original Insights",
    description: `Drawing from billions of data points, Analyze generates valuable and unique perspectives on your documents. It goes beyond mere analysis, providing you with fresh and original content like no other.`,
    descriptionColor: "text-indigo-700",
    background: "bg-indigo-100",
    headingColor: "text-indigo-500",
  },
  {
    heading: "Multilingual ",
    headingColoured: "Prowess",
    description: `Language is no barrier for Analyze. With its command over 30+ languages, communication becomes seamless and effortless. Analyze in your native language and witness the magic unfold.`,
    descriptionColor: "text-purple-700",
    background: "bg-purple-100",
    headingColor: "text-purple-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [450, 2270]);
  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 ">
          Analyze
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Introducing Analyze! As our conversation progresses, get ready to be
          amazed by its ability to thoroughly analyze any document and provide
          accurate answers to your related questions. And that’s not all, feel
          free to jazz up the conversation and make specific requests for even
          better results! Get ready to experience the power of Analyze!
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={analyze}
            className="w-full  rounded-lg border-black/20"
            alt="analyze"
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
          {...analyzeFeatures[0]}
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={analyze}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="analyze"
              />
            </motion.div>
          }
        />
        {analyzeFeatures.slice(1, 4).map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Unleash document potential with Analyze, the ultimate language-based AI assistant."
        description="The intelligent solution for document analysis, Analyze utilizes advanced generative AI algorithms to delve deep into your documents and provide insightful answers to your questions."
        buttonText="Analyze Now"
        href="/analyze"
        className="aira-chat-gradient"
      />
    </section>
  );
};

export default Page;
