import React from "react";
import MoreFeatures from "./components/more-features";

export const metadata = {
  title: "About",
};

const Page = () => {
  return (
    <div className="">
      <div className="h-screen bg-gray-50 flex items-center justify-center flex-col space-y-8 text-center px-4 md:px-8 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
          About us
        </h1>
        <h3 className="text-2xl md:text-3xl font-bold max-w-screen-lg text-center text-gray-800  ">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-[#ff2975] via-[#f222ff] to-[#8c1eff] text-transparent bg-clip-text">
            MetaDee
          </span>
          , the cutting-edge language generative AI-powered content creation
          tool brought to you by the innovative minds at Metadee. With the
          integration of metalground AI's powerful API, MetaDee revolutionizes
          the way content is generated, ensuring efficiency, quality, and
          creativity.
        </h3>
      </div>
      <MoreFeatures />
    </div>
  );
};

export default Page;
