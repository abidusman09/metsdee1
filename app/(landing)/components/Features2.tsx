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
import FeatureCard from "./feature-card2";

const featuresList = [
  {
    id: 1,
    title: "Analyze",
    description:
      "Our advanced analytics empower businesses to extract insights from vast datasets, enabling data-driven decisions, growth opportunities, and process optimization.	",
  },
  {
    id: 2,
    title: "Predict",
    description:
      "Metalground AI predicts future outcomes and trends, helping  businesses strategise and gain a competitive edge.	",
  },
  {
    id: 3,
    title: "Create",
    description:
      "Metalground AI fosters creativity and innovation, using Generative AI  to generate novel solutions and designs for faster market impact.	",
  },
  {
    id: 4,
    title: "Customize",
    description:
      "Metalground AI enables businesses to deliver personalized experiences,  deepen customer engagement, and create meaningful connections for long-term success.	",
  },
];

const Features = () => {
  return (
    <section className="padding container">
      <div className=" flex items-center justify-center flex-col space-y-8 text-center px-4 md:px-8 relative">
        <h3 className="text-2xl md:text-3xl font-bold max-w-screen-lg text-center text-gray-800 mb-20 ">
          Advancing{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text mb-4 ">
            secure&nbsp;
          </span>
          Gen-AI for a brighter & more prosperous future.
        </h3>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 grid grid-cols-2 gap-4 mb-4 ">
        {featuresList.map((features) => (
          <FeatureCard key={features.id} {...features} />
        ))}
      </div>
    </section>
  );
};

export default Features;
