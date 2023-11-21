"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/config/animations";

import light3 from "@/public/light3.jpg";

export const metadata = {
  title: "Modal",
};

const Modal = () => {
  return (
    <div className="">
      <div className="h-screen bg-gray-50 flex items-center justify-center flex-col space-y-8 text-center px-4 md:px-8 relative">
        <h3 className="text-2xl md:text-3xl font-bold max-w-screen-lg text-center text-gray-800  ">
          MetaDee's{" "}
          <span className="bg-gradient-to-br from-[#ff2975] via-[#f222ff] to-[#8c1eff] text-transparent bg-clip-text">
            Generative AI&nbsp;
          </span>
          Enterprise Business Solution
        </h3>
        <video width="1000" height="1000" controls loop>
          <source src="/modalenterprise.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Link
          href="https://metadeegroup.com/enterprise-solutions/"
          target="_blank"
        >
          <Button
            className="font-semibold text-white bg-blue-700 w-40"
            variant="shadow"
            size="lg"
            radius="full"
            color="secondary"
          >
            Explore
          </Button>
        </Link>
      </div>
      <div className="padding">
        <section className="container text-purple-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden">
          <Image
            className="absolute inset-0 select-none"
            fill
            src={light3}
            placeholder="blur"
            alt="light"
            draggable={false}
          />
          <motion.h2
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-blue-700 max-w-l text-center leading-tight isolate font-bold"
          >
            Executable AI
          </motion.h2>
          <motion.div
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-blue-700 max-w-l text-center leading-tight isolate "
          >
            We are building an Generative AI system to not only make predictions
            or provide insights but also to take action or execute tasks based
            on those predictions.
          </motion.div>

          <motion.div {...animations.slideIn}>
            <Link
              href="https://metadeegroup.com/executable-ai/"
              target="_blank"
            >
              <Button
                className="font-semibold text-white bg-blue-500 w-40"
                variant="shadow"
                size="lg"
                radius="full"
                color="secondary"
              >
                KNOW MORE
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
