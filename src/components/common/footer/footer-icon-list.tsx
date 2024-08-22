"use client"

import { cn } from "@/lib/cn"
import React from "react"
import { FooterIcon } from "./footer-icon"
import { FooterIconData } from "./footer-icon-list-data"

interface FooterIconListProps {
  className?: string
  iconDatas: FooterIconData[]
}

const FooterIconList: React.FC<FooterIconListProps> = ({
  className,
  iconDatas,
}) => {
  return (
    <div className={cn("flex flex-row gap-x-4", className)}>
      {iconDatas.map((iconData, index) => {
        return <FooterIcon key={index + 1} {...iconData} />
      })}
    </div>
  )
}

export { FooterIconList }
