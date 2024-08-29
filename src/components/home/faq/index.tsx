import { cn } from "@/lib/cn"
import React from "react"
import FAQList from "./faq-list"
import { FAQDataListLeft, FAQDataListRight } from "./faq-list-data"

interface FAQListProps {
  className?: string
}

const FAQLists: React.FC<FAQListProps> = ({ className }) => {
  return (
    <section
      className={cn("max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0", className)}>
      <div className="flex flex-col gap-y-7">
        <h3 className="leading-tight md:leading-lg text-[34px] lg:text-5xl text-indigo-950 text-center font-clash-display font-bold mb-5">
          Frequently Asked Questions
        </h3>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-8  ">
          <div className="flex flex-col gap-y-6">
            <FAQList FAQList={FAQDataListLeft} />
          </div>
          <div className="flex flex-col gap-y-6">
            <FAQList FAQList={FAQDataListRight} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { FAQLists }
