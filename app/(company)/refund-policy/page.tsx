import React from "react";
import { refund } from "./refund-policy";

export const metadata = {
  title: "Privacy Policy",
};

const Page = () => {
  return (
    <section className="container padding">
      <div className="md:min-h-[30rem] rounded-[3rem] padding flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
          Refund Policy
        </h1>
      </div>
      <article
        className="max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: refund }}
      ></article>
    </section>
  );
};

export default Page;
