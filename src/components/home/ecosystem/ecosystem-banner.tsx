import Image from "next/image"
import React from "react"

const EcosystemBanner = () => {
  return (
    <div className="flex items-center flex-col">
      <Image
        src="/images/illustration-features.png"
        className="h-[360px] lg:h-[550px] object-contain"
        alt=""
        width={550}
        height={360}
      />
    </div>
  )
}

export default EcosystemBanner
