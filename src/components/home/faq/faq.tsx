import { cn } from "@/lib/cn"
import Link from "next/link"
import React from "react"
import { FAQData } from "./faq-list-data"

interface FAQProps extends FAQData {
  classname?: string
}

const FAQ: React.FC<FAQProps> = ({ classname, ...props }) => {
  return (
    <div className={cn("group faq-card shaynakit-accordion", classname)}>
      <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-5">
        <Link href="#" className="btn-accordion">
          <div className="flex flex-row justify-between">
            <h3 className="text-indigo-950 font-bold text-lg">{props.title}</h3>
            <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
              <svg
                width={19}
                height={18}
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.44 6.7124L10.55 11.6024C9.9725 12.1799 9.0275 12.1799 8.45 11.6024L3.56 6.7124"
                  stroke="#080C2E"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
        <div className="accordion-content hidden flex flex-col gap-y-5">
          <p className="text-base text-gray-500 leading-loose">
            {props.content}
          </p>
          <Link href="#" className="text-violet-700 font-semibold">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQ
