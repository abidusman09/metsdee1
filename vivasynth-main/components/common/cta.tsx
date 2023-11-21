"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/config/animations";
import Image from "next/image";
import gradient from "@/public/mesh-gradient.png";

const CTA = () => {
  return (
    <div className="padding">
      <section className="container rounded-[3rem] text-white flex flex-col items-center px-4 py-28 space-y-16 relative overflow-hidden">
        <Image
          className="absolute inset-0 select-none"
          fill
          src={gradient}
          placeholder="blur"
          alt="gradient"
          draggable={false}
        />
        <motion.h2
          {...animations.slideIn}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl text-center leading-tight isolate"
        >
          You've come this far scrolling, so why not give MetaDee a try?
        </motion.h2>

        <motion.div {...animations.slideIn}>
          <Link href="https://app.MetaDee.com/" target="_blank">
            <Button
              className="font-semibold w-40 "
              variant="shadow"
              size="lg"
              radius="full"
              color="secondary"
            >
              Try Now
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CTA;
