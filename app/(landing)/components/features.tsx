"use client";
import React from "react";
import {
  BookOpen,
  Clapperboard,
  FileVideo,
  Megaphone,
  MessagesSquare,
  ShoppingBag,
} from "lucide-react";
import FeatureCard from "./feature-card";

const featuresList = [
  {
    id: 1,
    title: "Our Products",
    description:
      "Our most recent models and materials that offer advice on safety best practices are accessible through our API platform.",
  },
  {
    id: 2,
    title: "Data Security",
    description:
      "Discover how we're revolutionizing Generative AI development with advanced encryption, robust authentication protocols, and proactive defense mechanisms.",
    icon: Megaphone,
  },
  {
    id: 3,
    title: "Vision",
    description:
      "We aim to make our Generative AI executable, meaning it can effectively perform a wide range of tasks and problem-solving activities.",
    icon: Clapperboard,
  },
  {
    id: 4,
    title: "Secure AI",
    description:
      "Discover how we're revolutionizing Generative AI development with advanced encryption, robust authentication protocols, and proactive defense mechanisms.",
    icon: BookOpen,
  },
];

const Features = () => {
  return (
    <section className="padding container">
      <div className=" flex items-center justify-center flex-col space-y-8 text-center px-4 md:px-8 relative">
        <h3 className="text-2xl md:text-3xl font-bold max-w-screen-lg text-center text-gray-800 mb-20 ">
          Our agile approach ensures that we stay ahead of the curve, constantly
          evolving and refining our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text mb-4 ">
            Generative AI&nbsp;
          </span>
          models to meet the ever-changing demands of the industry.
        </h3>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 grid grid-cols-2 gap-4">
        {featuresList.map((features) => (
          <FeatureCard key={features.id} {...features} />
        ))}
      </div>
    </section>
  );
};

export default Features;
