"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import imageGeneration from "@/public/image-generation.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const imageGenerationFeatures = [
  {
    heading: "Seamless and intuitive",
    headingColoured: "interface",
    description: `Say goodbye to complicated editing tools and hello to effortless
    image creation. Experience the joy of simplicity as you
    effortlessly craft stunning visuals.`,
    descriptionColor: "text-rose-700",
    background: "bg-rose-100",
    headingColor: "text-rose-500",
  },
  {
    heading: "Master of visual",
    headingColoured: "continuity",
    description: `Seamlessly blend and transform images to create captivating
    narratives. Maintain visual coherence and tell a story that
    captivates and inspires.`,
    descriptionColor: "text-lime-700",
    background: "bg-lime-100",
    headingColor: "text-lime-500",
  },
  {
    heading: "Limitless image",
    headingColoured: "possibilities",
    description: `With access to a vast collection of data and algorithms, our image
    generation tool opens up a world of endless possibilities. Create
    unique and captivating visuals like never before.`,
    descriptionColor: "text-blue-700",
    background: "bg-blue-100",
    headingColor: "text-blue-500",
  },
  {
    heading: "Multifaceted",
    headingColoured: "image creation",
    description: `From landscapes to portraits, abstract art to photorealistic
    renderings, our generative AI assistant is fluent in the language
    of visual expression. Let your creativity soar in any style or
    genre.`,
    descriptionColor: "text-cyan-700",
    background: "bg-cyan-100",
    headingColor: "text-cyan-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [424, 2250]);
  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Image Generation
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Whether it's generating realistic visuals for virtual worlds or
          enhancing digital content with stunning visuals, generative AI-driven
          image generation revolutionizes the way we create and experience
          visual content, pushing the boundaries of imagination and artistic
          expression.
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={imageGeneration}
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
        <ProductFeature
          {...imageGenerationFeatures[0]}
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={imageGeneration}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="image generation"
              />
            </motion.div>
          }
        />
        {imageGenerationFeatures.slice(1, 4).map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Unleash your imagination with Image Generation's immersive visuals."
        description="From stunning landscapes to imaginative artwork, image generation powered by generative AI unlocks boundless creativity and visual possibilities."
        buttonText="Generate Image Now"
        href="/image-generation"
        className="aira-chat-gradient"
      />
    </section>
  );
};

export default Page;
