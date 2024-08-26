import { CloudIcon } from "@/components/icons/cloud-icon"
import { CPUIcon } from "@/components/icons/cpu-icon"
import { RadarIcon } from "@/components/icons/radar-icon"
import React from "react"

const EcosystemDescriptionList = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex bg-white rounded-2xl p-5 items-center gap-x-3">
        <RadarIcon width={47} height={47} />
        <div>
          <h3 className="font-bold text-xl">$880 Mio</h3>
          <p className="text-base text-gray-500">Company budget saved</p>
        </div>
      </div>
      <div className="flex bg-white rounded-2xl p-5 items-center gap-x-3">
        <CPUIcon width={47} height={47} />
        <div>
          <h3 className="font-bold text-xl">450,392</h3>
          <p className="text-base text-gray-500">All servers available</p>
        </div>
      </div>
      <div className="flex bg-white rounded-2xl p-5 items-center gap-x-3">
        <CloudIcon width={47} height={47} />
        <div>
          <h3 className="font-bold text-xl">189 Mio</h3>
          <p className="text-base text-gray-500">Websites are running good</p>
        </div>
      </div>
    </div>
  )
}

export default EcosystemDescriptionList
