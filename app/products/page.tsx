import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

// Import the TextZoom component
import TextZoom from "./components/text-zoom";

const ProductsPage = () => {
  return (
    <section className={cn("container padding ")}>
      <div className="my-12">
        {/* Include the TextZoom component here */}
        <TextZoom />
      </div>

      {/* features */}
      <div className="flex flex-wrap">
        <div
          className="flex-1 md:flex-grow px-6 md:px-8 lg:px-12 py-12 md:py-16 space-y-6 bg-rose-100 rounded-[3rem] md:min-h-[35rem] items-center"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            marginTop: "-20rem",
            marginBottom: "1rem", // Reduced the margin
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
            Communication and language{" "}
            <span className="text-rose-500">processing</span>
          </h2>
          <ul className="list-disc pl-6">
            <li className="lg:text-lg font-semibold text-rose-700 mb-2">
              Aira Chat
            </li>
            <li className="lg:text-lg font-semibold text-rose-700 mb-2">
              Translate
            </li>
            <li className="lg:text-lg font-semibold text-rose-700 mb-2">
              Essay Writer
            </li>
          </ul>
        </div>
        <div
          className="flex-1 md:flex-grow px-6 md:px-8 lg:px-12 py-12 md:py-16 space-y-6 bg-lime-100 rounded-[3rem] md:min-h-[35rem] items-center relative"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            marginLeft: "16px",
            marginTop: "-20rem",
            marginBottom: "1rem", // Reduced the margin
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
            Productivity and content{" "}
            <span className="text-lime-500">creation</span>
          </h2>
          <ul className="list-disc pl-6">
            <li className="lg:text-lg font-semibold text-lime-700 mb-2">
              Image Generation
            </li>
            <li className="lg:text-lg font-semibold text-lime-700 mb-2">
              Analyze
            </li>
            <li className="lg:text-lg font-semibold text-lime-700 mb-2">
              Summarize
            </li>
            <li className="lg:text-lg font-semibold text-lime-700 mb-2">
              Content Writer
            </li>
            <li className="lg:text-lg font-semibold text-lime-700 mb-2">
              Email Writer
            </li>
            <li className="lg:text-lg font-semibold text-lime-700 mb-2">
              Code Generation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
