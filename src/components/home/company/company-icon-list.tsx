import React from "react"
import { CompanyIcon } from "./company-icon"
import { CompanyIconData } from "./company-icon-list-data"

interface CompanyIconListProps {
  className?: string
  iconDatas: CompanyIconData[]
}

const CompanyIconList: React.FC<CompanyIconListProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-10 md:px-8 md:gap-y-0 items-center md:flex-row gap-x-10 justify-center">
      {props.iconDatas.map((iconData, index) => {
        return <CompanyIcon key={index + 1} {...iconData} />
      })}
    </div>
  )
}

export { CompanyIconList }
