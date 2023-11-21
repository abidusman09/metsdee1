import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import React, { FC, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Megaphone,
  Twitch,
  StepForward,
  MenuSquare,
  Video,
  Mail,
  MessageSquare,
  RefreshCcw,
  Wand2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypesEnum, templates } from "@/constants";
import Link from "next/link";
// import { useClickOutside } from "@/hooks/use-click-outside";
import { useMenu } from "@/hooks/use-menu";
import slugify from "react-slugify";

import { useClickOutside } from "@mantine/hooks";

interface TemplatesMenuProps {
  // isOpen: boolean;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const types: TypesEnum[] = [
  "ADVERTISING AND MARKETING",
  "BLOGGING AND SOCIAL MEDIA",
  "CONTENT CREATION AND ENHANCEMENT",
  "SEO AND WEBSITE OPTIMIZATION",
  "VIDEO CONTENT",
];

const TemplatesMenu: FC<TemplatesMenuProps> = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  // useClickOutside(containerRef, () => {
  //   setOpenMenu(null);
  // });

  const ref = useClickOutside(() => {
    setOpenMenu(null);
  });

  return (
    <div ref={containerRef} className="">
      <Button
        radius="full"
        className="text-base font-medium"
        variant="light"
        endContent={
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              openMenu == "templates" && "rotate-180"
            )}
          />
        }
        onClick={() =>
          setOpenMenu(openMenu == "templates" ? null : "templates")
        }
      >
        Templates{" "}
      </Button>
      <AnimatePresence>
        {openMenu == "templates" && (
          <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute top-20 right-0 left-0 border w-screen h-[calc(100vh-5rem)] grid grid-cols-5 gap-6 rounded-xl shadow-lg bg-white origin-top p-6 text-sm font-medium  "
          >
            {types.map((type, index) => (
              <div className="space-y-4" key={type}>
                <h2 className="text-sm font-semibold">{type}</h2>
                <div className="space-y-1">
                  {templates[type].map(({ description, title }) => (
                    <a
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-black/5 transition-colors duration-300 block "
                      href={`https://app.MetaDee.com/templates/${slugify(
                        title
                      )}`}
                      key={title}
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TemplatesMenu;
