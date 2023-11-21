"use client";
import AnimatedText from "@/components/animated-text";
import { cn } from "@/lib/utils";
import React from "react";

const featuresList = [
  {
    image: "",
    title: "Our Vision: Redefining Content Creation",
    description:
      "At MetaDee, our vision is to redefine the landscape of content creation by harnessing the power of artificial intelligence and natural language processing. We believe that technology should not only enhance productivity but also inspire creativity. With MetaDee, we aim to empower individuals and businesses to effortlessly generate engaging, unique, and impactful content.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    descriptionColor: "text-green-700",
  },
  {
    image: "",
    title: "The Power of Language AI: Unleashing \n Creativity",
    description: `MetaDee utilizes state-of-the-art language AI algorithms to unleash the full potential of your content creation process. Our advanced models are trained on a vast corpus of data, enabling them to understand context, generate relevant content, and provide valuable suggestions. Whether you need assistance in writing articles, blog posts, social media captions, or any other form of written content, MetaDee is your ultimate companion.`,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    descriptionColor: "text-rose-700",
  },
  {
    image: "",
    title:
      "Seamless Integration with metalground \n AI: Unmatched Capabilities",
    description:
      "As a proud member of the Metadee, MetaDee leverages the API from metalground AI, our trusted partner in delivering exceptional generative  AI-driven solutions. The integration ensures that MetaDee remains at the forefront of technological advancements, constantly evolving to meet the ever-changing needs of our users. Together, we strive to provide you with an unparalleled content creation experience.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    descriptionColor: "text-teal-700",
  },
  {
    image: "",
    title: "Our Commitment: Excellence and Our new\n Innovation",
    description:
      "At MetaDee, we are committed to excellence and innovation. We continuously refine our algorithms, update our models, and incorporate user feedback to enhance the performance and capabilities of our platform. We believe in the power of collaboration and welcome suggestions from our users to make MetaDee even more powerful, intuitive, and user-friendly.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    descriptionColor: "text-purple-700",
  },
  {
    image: "",
    title: "Join the MetaDee Community:Unlock \n your Creative Potential",
    description:
      "Whether you are an individual content creator, a marketing professional, or a business owner, MetaDee is here to unlock your creative potential. Say goodbye to writer’s block and tedious content creation processes. Experience the convenience, efficiency, and creativity that MetaDee offers.Join the MetaDee community today and witness the future of generative  AI-powered content creation! Let your ideas flow and watch as MetaDee transforms them into captivating content that captivates your audience. Together, let’s redefine the way content is created and shared.",
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10",
    descriptionColor: "text-fuchsia-700",
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
              <h2
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2  text-center",
                  color
                )}
              >
                {title}
              </h2>
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
