"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/config/animations";
import Image from "next/image";
import light4 from "@/public/light4.jpg";
import light5 from "@/public/light5.jpg";

const Merge = () => {
  return (
    <div className="flex gap-0">
      <div className="mb-2">
        <section className="container text-black-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden">
          <Image
            className="absolute inset-0 select-none"
            fill
            src={light4}
            placeholder="blur"
            alt="light"
            draggable={false}
          />
          <motion.h2
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-black-500 max-w-l text-center leading-tight isolate font-bold"
          >
            Join our team
          </motion.h2>
          <motion.div
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-xl text-black-300 max-w-l text-center leading-tight isolate "
          >
            Join our team and be a part of our exciting journey. Contact us
            today to explore exciting career opportunities.
          </motion.div>

          <motion.div {...animations.slideIn}>
            <Link href="https://metalgroundai.com/" target="_blank">
              <Button
                className="font-semibold text-white bg-black-500 w-40"
                variant="shadow"
                size="lg"
                radius="full"
                color="secondary"
              >
                Know More
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
      <div className="mb-4">
        <section className="container text-black-500 flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden">
          <Image
            className="absolute inset-0 select-none"
            fill
            src={light5}
            placeholder="blur"
            alt="light"
            draggable={false}
          />
          <motion.h2
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-3xl text-black-500 max-w-l text-center leading-tight isolate font-bold"
          >
            Our Newsletter
          </motion.h2>
          <motion.div
            {...animations.slideIn}
            className="text-l md:text-2xl lg:text-xl text-black-300 max-w-l text-center leading-tight isolate "
          >
            Stay up-to-date with the latest news and updates by subscribing to
            our newsletter. Contact us to join our mailing list now!
          </motion.div>

          <motion.div {...animations.slideIn}>
            <Link href="https://vivasynth.com/" target="_blank">
              <Button
                className="font-semibold text-white bg-gray-500 w-40"
                variant="shadow"
                size="lg"
                radius="full"
                color="secondary"
              >
                Know More
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Merge;
