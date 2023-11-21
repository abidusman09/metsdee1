import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

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

const bullet = () => {
  return (
    <div className="flex padding container space-y-12">
      <div className="flex-grow space-y-12">
        {bulletPoints.map(({ title, description }, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold mb-4 text-gray-500">{title}</h3>
            <p className="text-l">{description}</p>
          </div>
        ))}
      </div>
      <div className="ml-8 mt-6">
        <Image
          className="h-130 w-fit"
          height={1700}
          width={1500}
          src="/robot.png"
          alt="robot"
        />
      </div>
    </div>
  );
};

export default bullet;
