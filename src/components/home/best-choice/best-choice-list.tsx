"use client"

import React from "react"
import { BestChoice } from "./best-choice"
import { bestChoiceListData } from "./best-choice-list-data"

const BestChoiceList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-8">
      {bestChoiceListData.map((item, index) => {
        return <BestChoice key={index + 1} {...item} />
      })}
    </div>
  )
}

export { BestChoiceList }
