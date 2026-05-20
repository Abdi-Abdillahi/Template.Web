"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What logistics services do you provide?",
    answer:
      "We provide freight transportation, cargo delivery, fleet management, supply chain solutions, and real-time shipment tracking across multiple regions.",
  },
  {
    question: "Do you offer real-time shipment tracking?",
    answer:
      "Yes. Our platform allows customers to monitor shipments in real time with accurate delivery updates and route visibility.",
  },
  {
    question: "Which regions do you currently operate in?",
    answer:
      "We operate across major cities and trade routes throughout Ethiopia with expanding regional logistics coverage.",
  },
  {
    question: "How fast are your delivery services?",
    answer:
      "Delivery times depend on the destination and shipment type, but we focus on fast, secure, and reliable transportation with optimized routing.",
  },
  {
    question: "Can businesses integrate with your logistics system?",
    answer:
      "Absolutely. We support scalable logistics solutions for businesses including shipment management, tracking integration, and operational support.",
  },
  {
    question: "How can I request a freight quote?",
    answer:
      "You can contact our team directly through the website or submit shipment details to receive a customized logistics quote.",
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#04130c]/90 py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,175,101,0.12)_0%,transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,185,66,0.1)_0%,transparent_35%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur">
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Everything you need to know
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Find answers about our freight services, delivery operations,
            shipment tracking, and logistics solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white md:text-lg">
                    {faq.question}
                  </span>

                  <div
                    className={`
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl border border-white/10 bg-white/5
                      transition-transform duration-300
                      ${isActive ? "rotate-180" : ""}
                    `}
                  >
                    <ChevronDown className="h-5 w-5 text-white/70" />
                  </div>
                </button>

                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-14 text-sm leading-7 text-white/60 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};