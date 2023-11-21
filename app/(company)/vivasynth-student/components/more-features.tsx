"use client";
import { cn } from "@/lib/utils";
// import { Slide } from "react-reveal";
import React from "react";

const featuresList = [
  {
    image: "",
    title: "MetaDee Study - Enhancing Learning with AI",
    description:
      "MetaDee Study is an innovative AI platform designed to support students in their academic journey. With a range of powerful AI creation tools, students can harness the power of artificial intelligence to enhance their learning experience. Whether it's seeking assistance from an AI chatbot, analyzing documents, getting subject-based home help, creating flowcharts, or practicing coding, MetaDee Study has got it covered.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    descriptionColor: "text-pink-700",
  },
  {
    image: "",
    title: "Aira Chat - Your AI Study Companion ",
    description: ` Aira Chat is an AI chatbot specially developed to assist students. It provides instant responses to queries related to various subjects. Students can engage in natural language conversations, ask questions, and receive accurate answers. Aira Chat is constantly learning and adapting, ensuring that students have a reliable study companion whenever they need it.`,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    descriptionColor: "text-orange-700",
  },
  {
    image: "",
    title: " Analyze - Document Analysis Made Easy",
    description:
      "Analyze is a powerful tool within MetaDee Study that enables students to analyze documents effectively. By simply uploading a document, students can extract key information, summarize content, and gain valuable insights. This feature saves time and enhances productivity, allowing students to focus on understanding and assimilating information more efficiently.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    descriptionColor: "text-teal-700",
  },
  {
    image: "",
    title: "My Subjects - Personalized AI Home Helper",
    description:
      "My Subjects is an AI-powered home helping tool tailored to specific subjects. Students can ask questions related to a particular topic, and the AI will provide detailed and accurate answers. This personalized assistance ensures that students receive the specific guidance they need to excel in their studies. My Subjects acts as a knowledgeable companion, always ready to provide valuable insights and explanations.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    descriptionColor: "text-amber-700",
  },
  {
    image: "",
    title: "Flowchart - Simplify Complex Concepts",
    description:
      " Flowchart is an AI-powered tool that simplifies the creation of flowcharts. Students can visualize complex concepts and processes by simply inputting the necessary information. The AI algorithms automatically generate a clear and organized flowchart, making it easier for students to understand and communicate their ideas effectively.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    descriptionColor: "text-purple-700",
  },
  {
    image: "",
    title: "Code Practice - Master Coding Skills",
    description:
      " Code Practice is an AI-powered coding practice tool designed to help students improve their programming skills. Students can enter their code and receive instant feedback and corrections if errors are detected. The AI provides suggestions, highlights mistakes, and even offers rewritten code to demonstrate correct implementation. This tool empowers students to learn from their mistakes and become more proficient in coding.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    descriptionColor: "text-indigo-700",
  },
];

const MoreFeatures = () => {
  return (
    <div className="padding container space-y-12">
      {featuresList.map(
        ({ description, image, title, color, bg, descriptionColor }, i) => (
          <div className={cn("flex flex-col md:flex-row")} key={title}>
            <div
              className={cn(
                "flex-1 space-y-4 md:space-y-6 p-6 md:p-12 lg:p-16 rounded-[3rem]",
                bg
              )}
            >
              <h3
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center",
                  color
                )}
              >
                {title}
              </h3>
              <p
                className={cn(
                  "md:text-lg text-muted-foreground max-w-4xl text-center mx-auto",
                  descriptionColor
                )}
              >
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MoreFeatures;
