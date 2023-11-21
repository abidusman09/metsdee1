"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import CompanyMenu from "@/components/navbar/company-menu";
import ProductsMenu from "@/components/navbar/products-menu";
import TemplatesMenu from "@/components/navbar/templates-menu";
import { useRouter } from "next/navigation";
import Hamburger from "@/components/navbar/hamburger";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full h-20  transition-colors duration-300 z-50",
        scrolling ? "bg-white" : "bg-transparent"
      )}
    >
      <div className="container px-6 flex items-center justify-between h-full">
        {/* left side */}
        <Link href="/">
          <Image
            className="h-12 w-fit"
            height={100}
            width={100}
            src="/logo.png"
            alt="logo"
          />
        </Link>

        {/* right side */}
        <div className="flex items-center gap-2">
          <div className="items-center gap-2 hidden lg:flex">
            <CompanyMenu />
            <ProductsMenu />
            <TemplatesMenu />

            <a href="#" target="_blank">
              <Button
                radius="full"
                className="font-medium text-base"
                variant="light"
              >
                Contact Us
              </Button>
            </a>
          </div>
          <div className="lg:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
