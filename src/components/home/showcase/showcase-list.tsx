import { cn } from "@/lib/cn"
import React from "react"
import { Showcase } from "./showcase"
import { ShowcaseData } from "./showcase-list-data"

interface ShowcaseListProps {
  classname?: string
  showcaseDatas: ShowcaseData[]
}

const ShowcaseList: React.FC<ShowcaseListProps> = ({
  classname,
  showcaseDatas,
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-y-8 lg:flex-row justify-center gap-x-7 items-center",
        classname,
      )}>
      {showcaseDatas.map((showcaseData, index) => {
        return <Showcase key={index + 1} {...showcaseData} />
      })}
    </div>
  )
}

export { ShowcaseList }
