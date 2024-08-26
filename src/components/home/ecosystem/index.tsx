import React from "react"
import EcosystemBanner from "./ecosystem-banner"
import { EcosystemDescription } from "./ecosystem-description"

const Ecosystem = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col md:flex-row gap-y-10 justify-start gap-x-10 lg:gap-x-24">
        <EcosystemBanner />
        <EcosystemDescription />
      </div>
    </section>
  )
}

export { Ecosystem }
