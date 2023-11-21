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
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center  mb-2">
        Products
      </h1>
      <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden padding">
        <motion.h2
          style={{ scale, opacity, lineHeight: 1.2 }}
          className="max-w-4xl mx-auto text-center md:text-lg text-muted-foreground  -mt-40"
        >
          Discover a revolutionary solution that is set to transform the way you
          work and create. Our product offers a powerful and intuitive platform
          designed to enhance your creative process and elevate your
          productivity. Whether you're a professional looking to streamline your
          workflow or an enthusiast seeking new ways to express yourself, our
          product empowers you to achieve your goals with ease. Join a community
          of innovators who are embracing the future of creativity and
          experience the difference today.
        </motion.h2>
      </div>
    </div>
  );
};

export default TextZoom;
