import AnimatedText from "@/components/animated-text";
import { cn } from "@/lib/utils";
import React from "react";

const featuresList = [
  {
    image: "",
    title: "Our own proprietary language model",
    description:
      " Embrace the superiority of Our own proprietary language model (LLM) offers numerous benefits, such as enhanced understanding and generation of natural language.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    descriptionColor: "text-blue-700",
  },
];
const bulletPoints = [
  {
    title: "Building a robust foundation for Generative AI",
    description:
      "We are passionate about pushing the boundaries of Generative AI technology to create intelligent systems that can understand, learn, and adapt.",
  },
  {
    title: "Expertise in Diverse Technologies",
    description:
      "Whether it's natural language processing, machine learning, computer vision, or data analytics, we have the expertise to tackle the most complex challenges and provide tailor-made solutions.",
  },
  {
    title: "Agile Approach to Innovation",
    description:
      "Our agile approach ensures that we stay ahead of the curve, constantly evolving and refining our Generative AI models to meet the ever-changing demands of the industry.",
  },
];

const MoreFeatures = () => {
  return (
    <div className="padding container space-y-12">
      {featuresList.map(
        ({ description, image, title, color, bg, descriptionColor }, i) => (
          <div
            className={cn(
              "flex-1 space-y-4 md:space-y-6 px-6 py-8 md:p-12 lg:p-16 rounded-[2rem] lg:rounded-[3rem] ",
              bg
            )}
          >
            <h3
              className={cn(
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2 justify-center  text-center",
                color
              )}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <p className="md:hidden">{title}</p>
              <div className="hidden md:block">
                <AnimatedText text={title} />
              </div>
              {/* {title} */}
            </h3>
            <p
              className={cn(
                "md:text-lg text-muted-foreground max-w-4xl text-center mx-auto justify-center",
                descriptionColor
              )}
            >
              {description}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default MoreFeatures;
