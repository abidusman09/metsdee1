import React from "react";
import { terms } from "./terms-and-conditions";

export const metadata = {
  title: "T&C",
};

const Page = () => {
  return (
    <section className="container padding">
      <div className="md:min-h-[30rem] rounded-[3rem] padding flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
          Terms and Conditions
        </h1>
      </div>
      <article
        className="max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: terms }}
      ></article>
    </section>
  );
};

export default Page;
