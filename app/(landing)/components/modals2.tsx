import Head from "next/head";
import Image from "next/image";
import React from "react";

const bulletPoints = [
  {
    subtitle: "Security",
    description:
      "We can pave the way for a future where Generative AI technologies continue to thrive securely.",
    imgSrc: "/lock1.png",
  },
  {
    subtitle: "Ethics",
    description:
      "Ensuring the security of Generative AI systems is of utmost importance in today's rapidly evolving digital landscape.",
    imgSrc: "/lock2.png",
  },
  {
    subtitle: "Prioritize",
    description:
      "As we continue to rely on Generative AI for various tasks and decision-making processes, it is crucial to implement robust measures to protect these systems from potential threats.",
    imgSrc: "/lock3.png",
  },
];

const YourPage = () => {
  return (
    <>
      <Head>
        <title>Prioritizing Security and Ethical Considerations</title>
      </Head>

      <div className="bg-white p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-500">
              Prioritizing Security and{" "}
              <span className="shimmer-effect">Ethical</span> Considerations
            </h1>
          </div>

          {bulletPoints.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4`}
            >
              {/* Image Section */}
              <div className="md:w-1/2">
                <Image
                  src={point.imgSrc}
                  alt={point.subtitle}
                  width={300}
                  height={300}
                  objectFit="contain"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-black-500">
                  {point.subtitle}
                </h2>
                <p className="text-black-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default YourPage;
