import AnimatedText from "@/components/animated-text";
import { cn } from "@/lib/utils";
import React from "react";

const featuresList = [
  {
    image: "",
    title: "Your Data is Secure",
    description:
      "At MetaDee, we know how crucial it is for businesses to have trustworthy data security. With our services, you can concentrate on achieving your project objectives, knowing that we will safeguard your sensitive information with utmost care and protection. So, leave the security worries to us and stay focused on your goals!",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    descriptionColor: "text-yellow-700",
  },
  {
    image: "",
    title: "We Use the best Language Model",
    description: `With MetaDee, we use cutting-edge generative AI models to create content that helps your business thrive. It's like having a team that's always improving and using the smartest strategies to ensure your content is top-notch and gets the job done. So, you can count on us to deliver high-quality and impactful content every time.`,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    descriptionColor: "text-orange-700",
  },
  {
    image: "",
    title: "Content that sounds like you",
    description:
      'Your unique way of speaking defines who you are. It helps you stand out and create genuine relationships with your customers. By having a consistent "tone of voice," you can maintain a strong brand identity in all your content, every single time.',
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    descriptionColor: "text-pink-700",
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
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2  text-center",
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
                "md:text-lg text-muted-foreground max-w-4xl text-center mx-auto",
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
