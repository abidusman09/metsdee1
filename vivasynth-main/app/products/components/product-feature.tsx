import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { MotionProps, motion } from "framer-motion";

const viewTransition: MotionProps = {
  initial: { y: 100 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { ease: [0.215, 0.61, 0.355, 1], duration: 0.75 },
  // style: { clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" },
};

interface ProductFeatureProps {
  heading: string;
  headingColoured: string;
  description: string;
  background: string;
  headingColor: string;
  descriptionColor: string;
  rightContent?: React.ReactNode;
}

const ProductFeature: FC<ProductFeatureProps> = ({
  background,
  description,
  descriptionColor,
  heading,
  headingColor,
  headingColoured,
  rightContent,
}) => {
  return (
    <div
      className={cn(
        "flex gap-8 flex-col lg:flex-row text-center lg:text-start rounded-[3rem] lg:min-h-[35rem] items-center",
        background
      )}
    >
      <div className="flex-1 px-6 md:px-8 lg:px-12 py-12 md:py-16 space-y-6">
        <motion.h2
          {...viewTransition}
          className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize"
        >
          {heading} <span className={headingColor}>{headingColoured}</span>
        </motion.h2>
        <motion.p
          {...viewTransition}
          className={cn("lg:text-lg", descriptionColor)}
        >
          {description}
        </motion.p>
      </div>
      <div className="flex-1">{rightContent ? rightContent : null}</div>
    </div>
  );
};

export default ProductFeature;
