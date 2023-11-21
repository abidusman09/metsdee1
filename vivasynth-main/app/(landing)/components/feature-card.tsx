"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { animations } from "@/config/animations";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  description,
  icon: Icon,
  title,
}) => {
  const MotionCard = motion(Card);
  return (
    <MotionCard
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: [0.215, 0.61, 0.355, 1] }}
      className="flex-1 py-6 rounded-3xl"
    >
      <CardHeader>
        <div className="mx-auto h-24 w-24 text-white rounded-3xl bg-gradient-to-br from-[#ff2975] via-[#f222ff] to-[#8c1eff] flex items-center justify-center">
          <Icon className="h-16 w-16" />
        </div>
      </CardHeader>
      <CardBody className="text-center">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardBody>
    </MotionCard>
  );
};

export default FeatureCard;
