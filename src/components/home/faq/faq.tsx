"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/cn"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import React, { useState } from "react"
import useMeasure from "react-use-measure"
import { FAQData } from "./faq-list-data"

interface FAQProps extends FAQData {
  classname?: string
}

const FAQ: React.FC<FAQProps> = ({ classname, ...props }) => {
  const [ref, { height }] = useMeasure()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn("group faq-card shaynakit-accordion", classname)}>
      <div className="bg-white rounded-2xl p-5 flex flex-col gap-y-2">
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          variant={"ghost"}
          className="btn-accordion flex flex-row px-0 justify-between hover:bg-transparent">
          <h3 className="text-indigo-950 font-bold text-lg">{props.title}</h3>
          <div className="bg-white w-[30px] h-[30px] items-center flex justify-center rounded-full">
            <ChevronDown
              className={cn({
                "trasition rotate-180 duration-200": isOpen,
              })}
            />
          </div>
        </Button>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? height : 0,
          }}
          className="accordion-content  flex flex-col gap-y-5 overflow-hidden">
          <p ref={ref} className="text-base text-gray-500 leading-loose">
            {props.content}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
