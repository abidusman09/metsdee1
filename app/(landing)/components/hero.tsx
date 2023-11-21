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
    <section className="h-screen bg-gradient-to-r from-blue-500 to-white flex items-center justify-left padding text-center  ">
      <div className="fixed inset-0 origin-center"></div>
      <div className="">
        <h1 className="text-7xl md:text-6xl lg:text-9xl xl:text-8xl font-bold mt-60  ml-20">
          MetaDee
        </h1>
        <h2 className="text-2xl md:text-l lg:text-4xl xl:text-3xl text-gray-600 mb-2 ml-20">
          ELEVATING,INSPIRING,EMPOWERING!
        </h2>
      </div>
      <div className="mr-4">
        <Image
          className="h-screen h-200 w-fit "
          height={1000}
          width={1000}
          src="/slider.png"
          alt="slider"
        />
      </div>
    </section>
  );
};

export default Hero;
