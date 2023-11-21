"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/config/animations";
import Image from "next/image";
import light1 from "@/public/light1.jpg";
import light2 from "@/public/light2.jpg";
import light11 from "@/public/light11.jpg";
import light14 from "@/public/light14.jpg";

const CTA = () => {
  return (
    <div className="flex flex-wrap  -mx-2">
      <div className=" padding px-2 w-1/2 flex flex-col flex-1 ">
        <section className="flex-grow container text-purple-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden mb-10">
          <Image
            className="absolute inset-0 select-none "
            fill
            src={light1}
            placeholder="blur"
            alt="light"
            draggable={false}
          />
          <motion.h2
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-purple-500 max-w-l text-center leading-tight isolate font-bold"
          >
            Metalground AI
          </motion.h2>
          <motion.div
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-purple-700 max-w-l text-center leading-tight isolate "
          >
            MetaDee introduces Metalground AI, an innovative Generative AI
            solution that offers a powerful API and plugin. With this
            technology, you can automate various tasks and streamline your work
            processes efficiently.
          </motion.div>

          <motion.div {...animations.slideIn}>
            <Link href="https://metalgroundai.com/" target="_blank">
              <Button
                className="font-semibold text-white bg-purple-500 w-40"
                variant="shadow"
                size="lg"
                radius="full"
                color="secondary"
              >
                Explore
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
      <div className=" padding px-2 w-1/2 flex flex-col flex-1  ">
        <section className="flex-grow container text-red-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden mb-10">
          <Image
            className="absolute inset-0 select-none "
            fill
            src={light2}
            placeholder="blur"
            alt="light"
            draggable={false}
          />
          <motion.h2
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-red-500 max-w-l text-center leading-tight isolate font-bold"
          >
            VivaSynth
          </motion.h2>
          <motion.div
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-red-700 max-w-l text-center leading-tight isolate "
          >
            Discover the power of automation, eliminate worries about prompts.
            Experience the solution with MetaDee. Your ultimate solution for
            seamless automation of task.we understand the importance of
            precision in content creation.
          </motion.div>

          <motion.div {...animations.slideIn}>
            <Link href="https://metalgroundai.com/" target="_blank">
              <Button
                className="font-semibold text-white bg-red-500 w-40 "
                variant="shadow"
                size="lg"
                radius="full"
                color="secondary"
              >
                Explore
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
      <div className="flex flex-wrap  -mx-2">
        <div className=" padding px-2 w-1/2 flex flex-col flex-1 ">
          <section className="flex-grow container text-purple-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden mb-10">
            <Image
              className="absolute inset-0 select-none "
              fill
              src={light11}
              placeholder="blur"
              alt="light"
              draggable={false}
            />
            <motion.h2
              {...animations.slideIn}
              className="text-l md:text-2xl lg:text-3xl text-green-500 max-w-l text-center leading-tight isolate font-bold"
            >
              Enterprise Solutions
            </motion.h2>
            <motion.div
              {...animations.slideIn}
              className="text-l md:text-2xl lg:text-3xl text-green-700 max-w-l text-center leading-tight isolate "
            >
              AI enterprise solution refers to the implementation of artificial
              intelligence technologies and solutions within an enterprise or
              organization to enhance various aspects of their operations.
            </motion.div>

            <motion.div {...animations.slideIn}>
              <Link href="https://metalgroundai.com/" target="_blank">
                <Button
                  className="font-semibold text-white bg-green-500 w-40"
                  variant="shadow"
                  size="lg"
                  radius="full"
                  color="secondary"
                >
                  Explore
                </Button>
              </Link>
            </motion.div>
          </section>
        </div>
        <div className=" padding px-2 w-1/2 flex flex-col flex-1 ">
          <section className="flex-grow container text-yellow-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden mb-10">
            <Image
              className="absolute inset-0 select-none "
              fill
              src={light14}
              placeholder="blur"
              alt="light"
              draggable={false}
            />
            <motion.h2
              {...animations.slideIn}
              className="text-l md:text-2xl lg:text-3xl text-yellow-500 max-w-l text-center leading-tight isolate font-bold"
            >
              Din24network
            </motion.h2>
            <motion.div
              {...animations.slideIn}
              className="text-l md:text-2xl lg:text-3xl text-yellow-700 max-w-l text-center leading-tight isolate "
            >
              AI enterprise solution refers to the implementation of artificial
              intelligence technologies and solutions within an enterprise or
              organization to enhance various aspects of their operations.
            </motion.div>

            <motion.div {...animations.slideIn}>
              <Link href="https://metalgroundai.com/" target="_blank">
                <Button
                  className="font-semibold text-white bg-yellow-500 w-40"
                  variant="shadow"
                  size="lg"
                  radius="full"
                  color="secondary"
                >
                  Explore
                </Button>
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CTA;
