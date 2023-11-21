"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";
import Typewriter from "typewriter-effect";
import ractangle from "@/public/rectangle.svg";
import whiteRectangle from "@/public/white-rectangle.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const typeWriterText = [
  "Chat",
  "Image Generation",
  "Analyze",
  "Summarize",
  "Content Writing",
  "Essay Writing",
  "Email Writing",
  "Translate",
];

const Hero = () => {
  return (
    <section className="h-screen gradient-background flex items-center justify-center padding text-center">
      <div className="fixed inset-0 origin-center">
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 isolate"
          transition={{ duration: 0.75 }}
        >
          <Image height={1000} width={1000} src={ractangle} alt="rectangle" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 isolate"
          transition={{ delay: 0.5, duration: 0.75 }}
        >
          <Image
            height={1000}
            width={1000}
            src={whiteRectangle}
            alt="rectangle"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 isolate"
          transition={{ duration: 0.75, delay: 1 }}
        >
          <Image height={1000} width={1000} src={ractangle} alt="rectangle" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 isolate"
          transition={{ duration: 0.75, delay: 1.5 }}
        >
          <Image
            height={1000}
            width={1000}
            src={whiteRectangle}
            alt="rectangle"
          />
        </motion.div> */}
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
          Your Ultimate AI Companian for
        </h1>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-gray-900 pb-2 bg-gradient-to-br from-[#ff2975] via-[#f222ff] to-[#8c1eff] text-transparent bg-clip-text">
          <Typewriter
            options={{
              autoStart: true,
              strings: typeWriterText,
              loop: true,
              cursor: "",
            }}
          />
        </div>
        <a href="https://app.MetaDee.com" target="_blank">
          <Button
            className="text-base group w-40 font-medium bg-gray-900 text-white shadow-black/20 mt-8 rounded-full shadow-lg"
            size="lg"
          >
            Try Now
            <ChevronRight
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
