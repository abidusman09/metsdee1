import ContactForm from "@/components/contact-form";
import React from "react";
import gradient from "@/public/mesh-gradient.png";
import Image from "next/image";

export const metadata = {
  title: "Contact Us",
};

const ContactUs = () => {
  return (
    <div className="">
      <div className="min-h-screen w-full flex items-center justify-center text-center px-4 relative">
        <Image
          height={1080}
          width={1920}
          className="absolute inset-0 h-full w-full object-cover"
          src={gradient}
          alt="gradient"
        />
        <div className="space-y-6 isolate">
          <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-extrabold text-center">
            Contact Us
          </h1>
          <p className="md:text-lg text-muted max-w-2xl">
            We are here to answer all your queries. Get in touch and the right
            team will get back to you in the next 2 hours.
          </p>
        </div>
      </div>
      {/* contact form */}
      <div className="pb-20 lg:pb-28 xl:pb-32 px-4">
        <div className="max-w-screen-lg px-4 md:px-8 py-6 md:py-12 rounded-3xl bg-white shadow-lg mx-auto -mt-60 isolate">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
