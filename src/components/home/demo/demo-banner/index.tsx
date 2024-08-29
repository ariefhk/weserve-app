import React from "react"
import DemoBannerCard from "./demo-banner-card"
import { DemoBannerData } from "./demo-banner-data"

interface DemoBannerProps {
  demoBannerDataList: DemoBannerData[]
}

const DemoBanner: React.FC<DemoBannerProps> = ({ ...props }) => {
  return (
    <>
      {props.demoBannerDataList.map((data) => (
        <DemoBannerCard key={data.id} {...data} />
      ))}
    </>
  )
}

export default DemoBanner
