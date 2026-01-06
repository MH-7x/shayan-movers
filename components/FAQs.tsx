import { ReactNode } from "react";

interface FAQProps {
  question: string;
  answer: string | ReactNode;
}

export function FAQs({ faqs }: { faqs: FAQProps[] }) {
  return (
    <section id="faqs" className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3">
      <h2 className="text-center b1 font-black md:text-4xl text-3xl!">
        Common Questions & Answers
      </h2>
      <div className="max-w-3xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group  rounded-lg p-4 "
            open={index === 0}
          >
            <summary className="flex items-center gap-x-3 cursor-pointer font-medium text-gray-700">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-(--brand-color) text-white text-xl">
                ?
              </div>

              <h3 className="md:text-xl! text-base! leading-snug">
                {faq.question}
              </h3>
            </summary>

            <div className="mt-4 md:pl-11 pl-7 rounded-2xl pr-4 py-4 bg-white text-gray-700 border-l-4 border-secondary">
              <div className="md:text-base text-sm flex flex-col gap-y-2 ans">
                {faq.answer}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
