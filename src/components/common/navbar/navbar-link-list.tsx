import { cn } from "@/lib/cn"
import React from "react"
import { NavbarLink } from "./navbar-link"
import { NavbarLinkData } from "./navbar-link-list-data"

interface NavbarLinkListProps {
  className?: string
  linkDatas: NavbarLinkData[]
}

const NavbarLinkList: React.FC<NavbarLinkListProps> = ({
  className,
  linkDatas,
}) => {
  return (
    <ul className={cn("flex-row gap-x-8 lg:flex hidden", className)}>
      {linkDatas.map((linkData, index) => {
        return (
          <li key={index + 1}>
            <NavbarLink {...linkData} />
          </li>
        )
      })}
    </ul>
  )
}

export { NavbarLinkList }
