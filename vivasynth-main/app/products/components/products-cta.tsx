import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import React, { FC } from "react";

interface ProductsCTAProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
}

const ProductsCTA: FC<ProductsCTAProps> = ({
  buttonText,
  description,
  href,
  title,
  className = "bg-gradient-to-br from-[#ff2975] via-[#f222ff] to-[#8c1eff]",
}) => {
  return (
    <div
      className={cn(
        "px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 text-center rounded-[3rem]  my-12 min-h-[35rem] flex items-center justify-center flex-col",
        className
      )}
    >
      <h3
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white "
        style={{ lineHeight: 1.2 }}
      >
        {title}
      </h3>
      <p className="lg:text-xl font-medium text-muted mb-12">{description}</p>
      <a href={`https://app.MetaDee.com${href}`} target="_blank">
        <Button
          className="font-semibold text-base min-w-[10rem]"
          color="secondary"
          variant="shadow"
          radius="full"
          size="lg"
        >
          {buttonText}
        </Button>
      </a>
    </div>
  );
};

export default ProductsCTA;
