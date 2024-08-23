import React from "react"
import { ShowcaseList } from "./showcase-list"
import { showcaseListData } from "./showcase-list-data"

const Showcase = () => {
  return (
    <section className="mx-auto py-12 md:px-8 px-4 xl:px-0">
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col text-center">
          <h3 className="text-[34px] lg:text-5xl text-indigo-950 font-clash-display font-bold mb-5">
            Our Showcase
          </h3>
          <p className="text-base leading-lg text-gray-500">
            They built amazing website to help more people around the world
            <br className="hidden md:block" />
            by using our recommendation services and products
          </p>
        </div>
        <ShowcaseList showcaseDatas={showcaseListData} />
      </div>
    </section>
  )
}

export { Showcase }
