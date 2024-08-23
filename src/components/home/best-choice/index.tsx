"use client"

import React from "react"
import { BestChoiceList } from "./best-choice-list"

const BestChoice = () => {
  return (
    <section className="benefits max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0">
      <h3 className="text-[34px] md:text-5xl text-indigo-950 font-clash-display text-center font-bold mb-10">
        Your Best Choice
      </h3>
      <BestChoiceList />
    </section>
  )
}

export { BestChoice }
