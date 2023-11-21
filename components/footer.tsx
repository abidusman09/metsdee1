"use client";
import React from "react";
import { companyLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/metadee.png";
import { Button } from "@/components/ui/button";
import { productList1 } from "./navbar/products-menu";
const products = [
  "AIRA Chat",
  "Code Generation",
  "Content Creator",
  "Translate",
  "Essay Writer",
  "Summarize",
  "Image Generation",
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20">
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-start md:text-start items-center text-center gap-6">
        <Image
          className="max-w-[15rem] lg:max-w-xs flex-1"
          height={500}
          width={500}
          src={logo}
          alt="metadee logo"
        />
        <div className="space-y-2 flex-1 mt-12">
          <h4 className="font-semibold md:text-lg text-white">Products</h4>
          <ul className="text-sm md:text-base space-y-3 mt-26">
            {productList1.map(({ href, text }) => (
              <li className="block" key={text}>
                <Link className="hover:underline text-gray-200" href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* company links */}
        <div className="space-y-2 flex-1 mt-12">
          <h4 className="font-semibold md:text-lg text-white">Company</h4>
          <ul className="text-sm space-y-3 md:text-base">
            {companyLinks.map(({ href, text }) => (
              <li className="block" key={text}>
                <Link className="hover:underline text-gray-200" href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* contact us */}
        <div className="space-y-3 flex-1 mt-12">
          <h4 className="font-semibold md:text-lg text-white">Contact Us</h4>
          <p className="text-sm md:text-base text-gray-200 pb-4 max-w-sm">
            If you have any questions, feedback, or inquiries, please feel free
            to get in touch with us. We value your opinion and are here to
            assist you.
          </p>
          <Button
            type="button"
            className="font-medium bg-secondary rounded-full text-primary hover:bg-secondary/90 hover:text-primary"
            asChild
          >
            <Link href={"/contact-us"}>Contact Us</Link>
          </Button>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-8">
        &copy; 2023 Metadee Business Group, All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
