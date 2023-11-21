"use client";

import { cn } from "@/lib/utils";
import React from "react";
import ProductsCTA from "../components/products-cta";
import Image from "next/image";
import translate from "@/public/translate.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const translateFeatures = [
  {
    heading: "Your linguistic",
    headingColoured: "genie",
    description: `Translate is your ultimate language companion, helping you bridge
    communication gaps effortlessly. Say goodbye to language barriers
    and hello to seamless understanding.`,
    descriptionColor: "text-violet-700",
    background: "bg-violet-100",
    headingColor: "text-violet-500",
  },
  {
    heading: "Master of linguistic",
    headingColoured: "continuity",
    description: `Seamlessly preserving the essence of your conversations, Translate
    ensures a smooth flow of translated text. It remembers past
    translations, creating a cohesive and connected experience.`,
    descriptionColor: "text-teal-700",
    background: "bg-teal-100",
    headingColor: "text-teal-500",
  },
  {
    heading: "Unleashing the",
    headingColoured: "world of words",
    description: `With its vast repertoire of language knowledge, Translate
    generates accurate and original translations like no other. It
    harnesses the power of language-based generative AI to provide you
    with valuable content that resonates.`,
    descriptionColor: "text-sky-700",
    background: "bg-sky-100",
    headingColor: "text-sky-500",
  },
  {
    heading: "Multilingual",
    headingColoured: "marvel",
    description: `Communicate in any language, and witness the magic unfold. With
    over 30 languages at its fingertips, Translate empowers you to
    explore the world of communication with confidence.`,
    descriptionColor: "text-green-700",
    background: "bg-green-100",
    headingColor: "text-green-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [464, 2100]);
  return (
    <section className={cn("container padding")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Translate
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Translate is a language-based generative AI that bridges the gap
          between languages, bringing people together through seamless
          translation. Whether you&apos;re exploring new cultures, facilitating
          international communication, or simply trying to understand the world
          around you, Translate is here to break down language barriers and
          foster global understanding. With Translate, you can effortlessly
          translate text, enabling meaningful conversations and expanding your
          horizons. Experience the power of language and embark on a journey of
          connection with Translate.
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={translate}
            className="w-full aspect-square object-cover object-top rounded-lg border-black/20"
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
        {translateFeatures.map((feature, i) => (
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
                    src={translate}
                    className="max-w-lg rounded-lg  shadow-lg aspect-square object-cover object-top"
                    alt="aira-chat"
                  />
                </motion.div>
              )
            }
          />
        ))}
      </div>
      <ProductsCTA
        title="Discover the AI magic of Translate: Effortless, precise text translation."
        description="Elevate Your Conversations with Intelligent Translation"
        buttonText="Translate"
        href="/translate"
      />
    </section>
  );
};

export default Page;
