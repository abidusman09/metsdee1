"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextZoom = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div ref={targetRef} className="h-[300vh]">
      <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden padding">
        <motion.h2
          style={{ scale, opacity, lineHeight: 1.2 }}
          className="text-xl md:text-2xl max-w-2xl font-extrabold text-center"
        >
          We specialize in developing Generative AI models and technologies. Our
          primary focus is on creating innovative and intelligent systems that
          can understand and respond to human queries and tasks.
        </motion.h2>
      </div>
    </div>
  );
};

export default TextZoom;
