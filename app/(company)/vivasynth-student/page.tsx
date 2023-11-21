import React from "react";
import MoreFeatures from "./components/more-features";
import Image from "next/image";
import beams from "@/public/beams.jpg";
import Faq from "./components/faq";

const Page = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center space-y-8 text-center relative h-screen padding">
        <Image
          src={beams}
          alt="beams"
          height={1920}
          width={1080}
          className="absolute h-full w-full"
        />
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <h1 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-bold  text-black isolate">
          MetaDee Student
        </h1>
        <p className="md:text-lg text-muted-foreground max-w-4xl text-center mx-auto isolate">
          At MetaDee Study, we believe that AI has the potential to
          revolutionize the way students learn and achieve academic success.
          With our comprehensive set of AI tools, students can unlock their full
          potential, gain deeper insights, and enhance their learning
          experience. Join us on this exciting journey and discover the endless
          possibilities of AI in education.
        </p>
      </div>

      <MoreFeatures />
      <Faq />
    </div>
  );
};

export default Page;
