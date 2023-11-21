"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import airaChat from "@/public/aira-chat.gif";
import { useScroll, motion, useTransform, MotionProps } from "framer-motion";
import ProductFeature from "../components/product-feature";

const airaChatFeatures = [
  {
    heading: "Sleek and user friendly",
    headingColoured: "companian",
    description: `Say goodbye to complexity and hello to effortless interaction.
    Experience the joy of simplicity with AIRA's conversational
    interface.`,
    descriptionColor: "text-orange-700",
    background: "bg-orange-100",
    headingColor: "text-orange-500",
  },
  {
    heading: "Master of",
    headingColoured: "continuity",
    description: `Keeps the storyline flowing with precision and clarity.
    Referencing past chats, creating a seamless chat experience for
    you and me.`,
    descriptionColor: "text-rose-700",
    background: "bg-rose-100",
    headingColor: "text-rose-500",
  },
  {
    heading: "Ultimate content",
    headingColoured: "generator",
    description: `Harnessing a billion data points for a unique perspective, Quickly creating valuable and original content like no other.`,
    descriptionColor: "text-purple-700",
    background: "bg-purple-100",
    headingColor: "text-purple-500",
  },
  {
    heading: "Multilingual generative",
    headingColoured: "AI assistant",
    description: `Chat in your native language, and watch the magic unfold, With 30+
    languages at its command, communication becomes bold!`,
    descriptionColor: "text-indigo-700",
    background: "bg-indigo-100",
    headingColor: "text-indigo-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [64, 2380]);

  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          AIRA Chat
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          AIRA chat brings a human touch to your conversations. Whether you need
          creative ideas, content revisions, or just a good laugh, AIRA is here
          to make your conversations come alive!
        </p>

        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={airaChat}
            className="w-full rounded-lg border-black/20"
            alt="aira-chat"
          />
        </div>
      </div>

      {/* features */}
      <div
        className="space-y-4 relative overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <ProductFeature
          heading="The Ultimate Knowledge"
          headingColoured="Powerhouse"
          description="AIRA has absorbed a vast ocean of information, enabling captivating conversations on intricate topics with unrivaled expertise."
          background="bg-yellow-100"
          descriptionColor="text-yellow-700"
          headingColor="text-yellow-500"
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={airaChat}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="aira-chat"
              />
            </motion.div>
          }
        />

        {airaChatFeatures.map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Begin talking to AIRA CHAT by either asking a question or giving it a command"
        description="As your conversation goes on, jazz it up with extra info and tweak your requests for better results!"
        buttonText="Try AIRA Chat"
        href="/conversation"
        className="aira-chat-gradient"
      />
    </section>
  );
};

export default Page;
