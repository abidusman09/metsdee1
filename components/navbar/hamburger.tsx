"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@nextui-org/button";
import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { companyLinks, templates } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
//import { types } from "./templates-menu";//
import slugify from "react-slugify";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { productList1 } from "./products-menu";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button isIconOnly variant="light">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 h-screen p-0 flex flex-col" side="right">
        <SheetHeader className="p-4 pb-0">
          <SheetTitle>MetaDee</SheetTitle>
        </SheetHeader>
        <ScrollArea className="grow px-2">
          <ScrollBar />
          <Accordion
            defaultExpandedKeys={["products", "company"]}
            isCompact
            showDivider={false}
          >
            {/* product links */}
            <AccordionItem
              key="products"
              aria-label="Products"
              title="Products"
              classNames={{ title: "font-semibold" }}
            >
              <div className="flex flex-col space-y-2">
                <div className="space-y-2">
                  <div>
                    {productList1.map(({ href, id, text }) => (
                      <Link
                        className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                        href={href}
                        key={id}
                        onClick={() => setOpen(false)}
                      >
                        <span className="whitespace-nowrap font-medium">
                          {text}
                        </span>
                        <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-2 transition-transform mr-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionItem>

            {/*<AccordionItem
              key="templates"
              aria-label="templates"
              title=""
              classNames={{ title: "font-semibold" }}
            >
              <Accordion isCompact showDivider={false}>
                {types.map((type, index) => (
                  <AccordionItem
                    classNames={{
                      title: "line-clamp-1 font-medium text-sm text-gray-700",
                    }}
                    className="text-sm"
                    title={type}
                  >
                    <div className="space-y-2" key={type}>
                      <ul className="space-y-1">
                        {templates[type].map(({ description, title }) => (
                          <li key={title}>
                            <a
                              target="_blank"
                              className="p-2 rounded-lg hover:bg-black/5 transition-colors duration-300 block line-clamp-1"
                              href={`https://app.MetaDee.com/templates/${slugify(
                                title
                              )}`}
                              onClick={() => setOpen(false)}
                            >
                              {title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
                        </AccordionItem> */}

            {/* company links */}
            <AccordionItem
              classNames={{ title: "font-semibold" }}
              key="company"
              aria-label="company"
              title="Company"
            >
              <div className="flex flex-col gap-2 font-medium px-2 text-gray-700">
                {companyLinks.map(({ href, text }) => (
                  <Link key={text} href={href} onClick={() => setOpen(false)}>
                    {text}
                  </Link>
                ))}
              </div>
            </AccordionItem>
          </Accordion>

          <a
            className="font-heading p-2 text-gray-950 text-[17px] font-semibold block"
            href="#"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </ScrollArea>
        <SheetFooter className="p-4 pt-0">
          <a
            href="#"
            target="_blank"
            className="w-full"
            onClick={() => setOpen(false)}
          ></a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
