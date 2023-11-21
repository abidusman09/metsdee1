"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.css";

const features = [
  {
    title: "Precision",
    description: `With a focus on precision, MetaDee offers an array of generative AI-powered tools designed to ensure accuracy and meticulousness in your content creation process. From precise language generation to meticulous image selection, our tools are meticulously crafted to meet the highest standards of precision. Whether you're crafting technical documents, scientific reports, or legal texts, MetaDee empowers you with the precision you need to convey your message with utmost clarity. Our advanced algorithms analyze every aspect of your content, ensuring that every word, phrase, and image is carefully chosen to achieve the desired level of precision. With MetaDee, your content will stand out for its accuracy and attention to detail.`,
  },
  {
    title: "Versatility",
    description: `With over 40 predefined templates for various content creation applications, including story writing, Google Ad titles, Amazon product descriptions, SEO titles and meta descriptions, and marketing strategies, MetaDee offers unparalleled versatility. Whether you need compelling copy, attention-grabbing images, or well-structured essays, our generative AI-powered tools have got you covered. We provide a comprehensive suite of tools that cater to a wide range of content creation requirements.`,
  },
  {
    title: "Quality",
    description: `We believe that quality content creation should be accessible to everyone. That's why we offer our services at a competitive and affordable price point. With MetaDee, you can enjoy the benefits of generative AI-powered content creation without breaking the bank. Our low prices ensure that you get the best value for your money while achieving exceptional results.`,
  },
  {
    title: "Efficiency",
    description: `At MetaDee, we understand the value of time and efficiency in content creation. Our AI-powered tools are designed to streamline your workflow and help you produce high-quality content in a fraction of the time it would take manually. With features such as AI-generated suggestions, automated document analysis, and template-based creation, MetaDee enables you to work efficiently and meet tight deadlines without compromising on quality. Say goodbye to hours of research and manual writing - with MetaDee, you can create precise and versatile content with speed and ease.`,
  },
];

const WhyUs = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0 && !scrollingDown) {
        setScrollingDown(true);
      } else if (window.scrollY === 0 && scrollingDown) {
        setScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 ">
      <div className="space-y-8 px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold">
          Why{" "}
          <span className="bg-gradient-to-br from-[#ff2975] via-[#f222ff] to-[#8c1eff] text-transparent bg-clip-text">
            MetaDee?
          </span>
        </h2>
        <p className="md:text-lg lg:text-xl text-muted-foreground text-center max-w-5xl mx-auto">
          At MetaDee, we understand the importance of precision in content
          creation. Our generative AI-powered tools, such as Aira chat, Image
          Generation, Summarize, Analyze, Translate, Content Creator, Essay
          Writer, Email Writer, Code Generation, and Templates, are designed to
          deliver accurate and high-quality results. With our advanced
          algorithms and cutting-edge technology, we ensure that your content is
          precise, error-free, and tailored to your specific needs.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        slidesPerView={1}
        mousewheel
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
        }}
      >
        {features.map(({ title, description }, index) => (
          <SwiperSlide
            className={`p-14 zoom-slide ${
              scrollingDown && index >= 0 ? "hidden-slide" : ""
            }`}
            key={title}
          >
            <motion.div
              className="flex-1 space-y-8 padding border-2 rounded-3xl"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1 }}
              animate={{ scale: scrollingDown && index >= 0 ? 0.5 : 1 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                {title}
              </h2>
              <p className="text-lg">{description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhyUs;
