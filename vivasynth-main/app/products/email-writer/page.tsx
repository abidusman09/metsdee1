"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ProductsCTA from "../components/products-cta";
import emailWriter from "@/public/email-writer.gif";
import { useScroll, motion, useTransform } from "framer-motion";
import ProductFeature from "../components/product-feature";

const emailWriterFeatures = [
  {
    heading: "Effortless",
    headingColoured: "Composition",
    description: `Say goodbye to writer's block and hello to seamless email
    creation. Our Email Writer's intuitive interface makes crafting
    emails a breeze, allowing you to focus on your message rather than
    the technicalities.`,
    descriptionColor: "text-purple-700",
    background: "bg-purple-100",
    headingColor: "text-purple-500",
  },
  {
    heading: "Master of",
    headingColoured: "Persuasion",
    description: `With a deep understanding of language and human psychology, the
    Email Writer helps you convey your ideas persuasively. It
    effortlessly tailors your message to resonate with your
    recipients, ensuring maximum impact.`,
    descriptionColor: "text-violet-700",
    background: "bg-violet-100",
    headingColor: "text-violet-500",
  },
  {
    heading: "Continuity at",
    headingColoured: "its Best",
    description: `Seamlessly referencing previous emails and conversations, our
    Email Writer ensures a coherent and consistent flow of
    communication. It keeps track of your email history, allowing for
    a truly personalized and engaging conversation.`,
    descriptionColor: "text-indigo-700",
    background: "bg-indigo-100",
    headingColor: "text-indigo-500",
  },
  {
    heading: "Unleash",
    headingColoured: "Creativity",
    description: `With access to a vast repository of information and insights, the
    Email Writer generates original and valuable content like no
    other. It infuses your emails with fresh perspectives, making each
    message unique and captivating.`,
    descriptionColor: "text-fuchsia-700",
    background: "bg-fuchsia-100",
    headingColor: "text-fuchsia-500",
  },
  {
    heading: "Multilingual",
    headingColoured: "Mastery",
    description: `Break language barriers effortlessly. The Email Writer supports
    over 30 languages, enabling you to communicate confidently in your
    native tongue. Watch as it effortlessly translates and Learning
    Algorithmpts your message, ensuring effective communication across
    borders.`,
    descriptionColor: "text-blue-700",
    background: "bg-blue-100",
    headingColor: "text-blue-500",
  },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 0.7], [464, 2880]);

  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Email Writer
        </h1>
        <p className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground">
          Introducing Email Writer, the ultimate companion for crafting
          impeccable emails. Powered by cutting-edge language-based generative
          AI, Email Writer is designed to assist you in effortlessly composing
          emails on any given topic. With its advanced capabilities, you can
          expect articulate and persuasive content that resonates with your
          recipients. Say goodbye to writer&apos;s block and let Email Writer
          unleash your email-writing potential!
        </p>
        <div className="p-4 border bg-black/10 rounded-xl border-black/10 mt-12 lg:hidden">
          <Image
            height={1000}
            width={1000}
            src={emailWriter}
            className="w-full rounded-lg border-black/20"
            alt="email-writer"
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
          {...emailWriterFeatures[0]}
          rightContent={
            <motion.div
              style={{ top: top }}
              className="absolute z-10 hidden lg:block"
            >
              <Image
                height={1000}
                width={1000}
                src={emailWriter}
                className="max-w-lg rounded-lg  shadow-lg"
                alt="aira-chat"
              />
            </motion.div>
          }
        />
        {emailWriterFeatures.slice(1, 5).map((feature) => (
          <ProductFeature key={feature.heading} {...feature} />
        ))}
      </div>

      <ProductsCTA
        title="Unlock the Email Writer's AI brilliance for unforgettable, powerful email communication."
        description="Empowered by the language-based generative AI, our Email Writer is the ultimate solution for crafting compelling emails effortlessly."
        buttonText="Write Email"
        href="/email-writer"
        className="aira-chat-gradient"
      />
    </section>
  );
};

export default Page;
