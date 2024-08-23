import { BestChoice } from "@/components/home/best-choice"
import { Company } from "@/components/home/company"
import { Demo } from "@/components/home/demo"
import { Ecosystem } from "@/components/home/ecosystem"
import { Faq } from "@/components/home/faq"
import { Hero } from "@/components/home/hero"
import { Showcase } from "@/components/home/showcase"
import { Metadata } from "@/types/metadata"
import React from "react"

export const metadata: Metadata = {
  title: "Home",
}

const HomePage = () => {
  return (
    <div>
      {/* end mega menu floating dropdown */}
      <Hero />

      <Company />

      <BestChoice />

      <Ecosystem />

      <Showcase />

      <Faq />

      <Demo />
    </div>
  )
}

export default HomePage
