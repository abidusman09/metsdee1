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
    text: "AIRA Chat",
    href: "/products/aira-chat",
    icon: MessageSquare,
    background: "bg-purple-600",
  },
  {
    id: 2,
    text: "Translate",
    href: "/products/translate",
    icon: RefreshCcw,
    background: "bg-blue-500",
  },
  {
    id: 3,
    text: "Essay Writer",
    href: "/products/essay-writer",
    icon: Code,
    background: "bg-indigo-600",
  },
];

export const productList2 = [
  {
    id: 1,
    text: "Image Generation",
    href: "/products/image-generation",
    icon: Image,
    background: "bg-pink-500",
  },
  {
    id: 2,
    text: "Analyze",
    href: "/products/analyze",
    icon: BarChart2,
    background: "bg-teal-500",
  },
  {
    id: 3,
    text: "Summarize",
    href: "/products/summarize",
    icon: Layers,
    background: "bg-indigo-500",
  },
  {
    id: 4,
    text: "Content Writer",
    href: "/products/content-writer",
    icon: Wand2,
    background: "bg-orange-500",
  },
  {
    id: 5,
    text: "Email Writer",
    href: "/products/email-writer",
    icon: Mail,
    background: "bg-cyan-500",
  },
  {
    id: 6,
    text: "Code Generation",
    href: "/products/code-generation",
    icon: Code,
    background: "bg-green-500",
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
            className="grid grid-cols-2 gap-4 px-2 py-4 mt-2 origin-top top-full shadow-lg absolute w-[45rem] -right-[18rem] bg-white z-[100] border rounded-xl"
          >
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-base font-semibold px-2">
                Language Processing
              </h2>
              {productList1.map(
                ({ background, href, icon: Icon, id, text }) => (
                  <Link
                    className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                    href={href}
                    key={id}
                    onClick={() => setOpenMenu(null)}
                  >
                    <div
                      className={cn(
                        "h-8 w-8 flex items-center justify-center text-white shrink-0 rounded-md",
                        background
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="whitespace-nowrap font-semibold">
                      {text}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-2 transition-transform mr-2" />
                  </Link>
                )
              )}
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-base font-semibold px-2">Content Creation</h2>
              {productList2.map(
                ({ background, href, icon: Icon, id, text }) => (
                  <Link
                    key={id}
                    className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                    href={href}
                    onClick={() => setOpenMenu(null)}
                  >
                    <div
                      className={cn(
                        "h-8 w-8 flex items-center justify-center text-white shrink-0 rounded-md",
                        background
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="whitespace-nowrap font-semibold">
                      {text}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-2 transition-transform mr-2" />
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsMenu;
