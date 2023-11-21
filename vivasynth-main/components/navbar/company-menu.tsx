"use client";
import { Button } from "@nextui-org/button";
import React, { FC, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  SearchSlash,
  UserCircle,
  HelpCircle,
  FileKey,
  TerminalSquare,
  RefreshCw,
  MessageSquare,
  RefreshCcw,
  Wand2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useClickOutside } from "@mantine/hooks";
import { useMenu } from "@/hooks/use-menu";
import { companyLinks } from "@/constants";

const CompanyMenu = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => {
    setOpenMenu(null);
  });
  return (
    <div ref={containerRef} className="relative">
      <Button
        radius="full"
        className="text-base font-medium"
        variant="light"
        endContent={
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              openMenu == "company" && "rotate-180"
            )}
          />
        }
        onClick={() => setOpenMenu(openMenu == "company" ? null : "company")}
      >
        Company
      </Button>

      <AnimatePresence>
        {openMenu == "company" && (
          <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-full mt-2 origin-top w-60 p-2 rounded-xl shadow-lg space-y-1 -left-[3rem] border bg-white"
            transition={{ ease: [0.215, 0.61, 0.355, 1] }}
          >
            {companyLinks.map(({ href, text, icon: Icon }, index) => (
              <Link
                key={text}
                className="font-medium p-2 rounded-xl hover:bg-black/5 transition-colors duration-300 block w-full flex items-center"
                href={href}
                onClick={() => setOpenMenu(null)}
              >
                <Icon className="h-5 w-6 mr-2" />

                <span>{text}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyMenu;
