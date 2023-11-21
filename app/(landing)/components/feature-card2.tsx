"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { animations } from "@/config/animations";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  description,

  title,
}) => {
  const MotionCard = motion(Card);
  return (
    <MotionCard
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: [0.215, 0.61, 0.355, 1] }}
      className="flex-1 py-6 rounded-3xl "
      style={{ backgroundColor: "lightblue" }}
    >
      <CardHeader>
        <div className="mx-auto w-24 text-white rounded-3xl flex items-center justify-center"></div>
      </CardHeader>
      <CardBody className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-muted-foreground text-white">{description}</p>
      </CardBody>
    </MotionCard>
  );
};

export default FeatureCard;
