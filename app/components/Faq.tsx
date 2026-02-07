"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "I am an out-of-network provider. Many clients choose to seek reimbursement through their insurance plans, and I’m happy to provide documentation to support that process.",
  },
  {
    question: "What are your session fees?",
    answer:
      "Session fees vary depending on the type and length of service. I’m happy to discuss current rates and answer any questions during an initial consultation.",
  },
  {
    question: "Are in-person and virtual sessions available?",
    answer:
      "Yes. I offer in-person sessions in Santa Monica, as well as secure telehealth sessions for clients located throughout California.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#DCDDE4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 lg:px-20 items-start">

        {/* LEFT — IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-[320px] sm:w-[360px] md:w-[420px] h-[520px] overflow-hidden rounded-t-full bg-[#C9CBD6]">
            <Image
              src="/images/f2.jpg"
              alt="A calm, minimal space representing clarity and reassurance"
              width={420}
              height={520}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — FAQ */}
        <div className="max-w-xl">
          <h3 className="text-[#3F4358] text-3xl sm:text-4xl font-serif mb-12">
            Frequently Asked Questions
          </h3>

          <div className="border-t border-[#B5B7C3] divide-y divide-[#B5B7C3]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-[#3F4358]">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#3F4358] transition-transform">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#5C6076] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
