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
    title: "E-commerce",
    description:
      "Generate product descriptions based on given specifications, helping businesses create compelling and unique content for their online stores.",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Marketing and Advertising",
    description:
      "Generate engaging social media posts, blog articles, and ad copy.",
    icon: Megaphone,
  },
  {
    id: 3,
    title: "Entertainment",
    description:
      "Generate scripts for movies, TV shows, and video games, providing content creators with a starting point for their creative projects.",
    icon: Clapperboard,
  },
  {
    id: 4,
    title: "Education",
    description:
      "Generate interactive and informative course materials, lesson plans, and study guides, assisting educators in creating engaging content for students.",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Customer Support",
    description:
      "Generate personalized responses to customer queries, helping businesses automate their support systems and provide timely and accurate assistance to their customers.",
    icon: MessagesSquare,
  },
  {
    id: 6,
    title: "Content Creation",
    description:
      "MetaDee offers AI-powered content curation, allowing businesses to discover and curate relevant and high-quality content from various sources, saving time and effort in content creation and research.",
    icon: FileVideo,
  },
];

const Features = () => {
  return (
    <section className="padding container">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
        {featuresList.map((features) => (
          <FeatureCard key={features.id} {...features} />
        ))}
      </div>
    </section>
  );
};

export default Features;
