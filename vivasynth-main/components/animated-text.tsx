"use client";
import { Variants, motion } from "framer-motion";
import React, { FC } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const headingVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const textVariant: Variants = {
  initial: {
    y: 50,
  },
  animate: { y: 0 },
};

const AnimatedText: FC<AnimatedTextProps> = ({ text, className }) => {
  const charctersArray = text.split("");
  return (
    <motion.div
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ amount: "all", once: true }}
      variants={headingVariants}
      style={{ lineHeight: 0.9 }}
    >
      {charctersArray.map((char, i) => (
        <motion.div
          style={{ display: char === " " ? "inline" : "inline-block" }}
          variants={textVariant}
          transition={{ ease: [0.215, 0.61, 0.355, 1] }}
        >
          {char}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
