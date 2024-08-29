import React from "react"
import FAQ from "./faq"
import { FAQData } from "./faq-list-data"

interface FAQListProps {
  className?: string
  FAQList: FAQData[]
}

const FAQList: React.FC<FAQListProps> = ({ className, ...props }) => {
  return (
    <>
      {props.FAQList.map((faq) => (
        <FAQ key={faq.id} {...faq} />
      ))}
    </>
  )
}

export default FAQList
