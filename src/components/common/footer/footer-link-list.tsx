import { cn } from "@/lib/cn"
import React from "react"
import { FooterLink } from "./footer-link"
import { FooterLinkData } from "./footer-link-list-data"

interface FooterLinkListProps {
  className?: string
  linkDatas: FooterLinkData[]
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({
  className,
  linkDatas,
}) => {
  return (
    <ul className={cn("gap-y-4 flex flex-col", className)}>
      {linkDatas.map((link, index) => {
        return (
          <li key={index + 1}>
            <FooterLink {...link} />
          </li>
        )
      })}
    </ul>
  )
}

export { FooterLinkList }
