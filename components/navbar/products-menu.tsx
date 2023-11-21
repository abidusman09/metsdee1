import React, { FC, useRef, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";
import { useMenu } from "@/hooks/use-menu";
import {
  BarChart2,
  Code,
  Image,
  Layers,
  Mail,
  MessageSquare,
  RefreshCcw,
  Wand2,
} from "lucide-react";

export const productList1 = [
  {
    id: 1,
    text: "Metalground AI",
    href: "#",
  },
  {
    id: 2,
    text: "MetaDee",
    href: "#",
  },
  {
    id: 3,
    text: "Enterprise Solutions",
    href: "#",
  },
  {
    id: 3,
    text: "DIN24 network",
    href: "#",
  },
];

const ProductsMenu = () => {
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
              openMenu == "products" && "rotate-180"
            )}
          />
        }
        onClick={() => setOpenMenu(openMenu == "products" ? null : "products")}
      >
        Products
      </Button>
      <AnimatePresence key="products menu">
        {openMenu == "products" && (
          <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute top-full mt-2 origin-top w-60 p-2 rounded-xl shadow-lg space-y-1 -left-[3rem] border bg-white"
          >
            <div className="flex-1 flex flex-col gap-2">
              {productList1.map(({ href, id, text }) => (
                <Link
                  className="ffont-medium p-2 rounded-xl hover:bg-black/5 transition-colors duration-300 block w-full flex items-center"
                  href={href}
                  key={id}
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="whitespace-nowrap font-semibold">
                    {text}
                  </span>
                  <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-2 transition-transform mr-2" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsMenu;
