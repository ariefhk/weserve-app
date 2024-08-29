import { WebIcon } from "@/components/icons"
import React from "react"

const DemoLabel = () => {
  return (
    <div className="flex py-2 flex-row small-badge items-center bg-white rounded-full gap-x-2 px-3 w-fit">
      <WebIcon stroke="#1e1b4b" />
      <p className="lg:text-base text-sm font-semibold text-indigo-950">
        We host more than 120,000 websites
      </p>
    </div>
  )
}

export default DemoLabel
