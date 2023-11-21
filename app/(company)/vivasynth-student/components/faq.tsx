"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faq } from "@/constants";

export default function Home() {
  return (
    <section className="container">
      <div className="flex flex-col md:min-h-[30rem] rounded-[3rem] padding items-center justify-center ">
        <div className="md:min-h-[30rem] rounded-[3rem] padding flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
            Frequently Asked Questions
          </h1>
        </div>

        {/* <div className="max-w-screen-md mx-auto"> */}
        <Accordion
          showDivider={false}
          className="max-w-screen-md mx-auto gap-6"
        >
          {faq.map(({ answer, id, question }) => (
            <AccordionItem
              className="p-4"
              key={id}
              title={`${id}. ` + question}
            >
              <p>{answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
        {/* </div> */}
      </div>
    </section>
  );
}
