import React from "react"
import DemoBanner from "./demo-banner"
import { demoBannerDataList } from "./demo-banner/demo-banner-data"
import DemoLabel from "./demo-label"
import DemoLink from "./demo-link"
import DemoTitle from "./demo-title"

const Demo = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="promotion mx-4 md:mx-8 xl:mx-0 rounded-3xl bg-violet-700 mt-20 md:relative z-20  py-12 md:px-8 px-4 xl:px-10">
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10 items-center">
          <div className="flex flex-col gap-y-10">
            <DemoLabel />
            <DemoTitle />
            <DemoLink />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-5">
            <DemoBanner demoBannerDataList={demoBannerDataList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Demo }
