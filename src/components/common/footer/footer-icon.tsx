"use client"

import { useCheckHover } from "@/hooks"
import { cn } from "@/lib/cn"
import Link from "next/link"
import React from "react"
import { FooterIconData } from "./footer-icon-list-data"

interface FooterIconProps extends Omit<FooterIconData, "id"> {
  className?: string
}

const FooterIcon: React.FC<FooterIconProps> = ({ className, ...props }) => {
  const { isHover, handleHoverState } = useCheckHover()
  const Icon = props.icon

  return (
    <div
      onMouseOver={() => handleHoverState(true)}
      onMouseOut={() => handleHoverState(false)}
      className={cn(
        "bg-white group flex items-center p-[10px] rounded-full",
        {
          "bg-weserve-purple": isHover,
        },
        className,
      )}>
      <Link href={props.href}>
        <Icon {...props} stroke={isHover ? "#fff" : "#640EF1"} />
      </Link>
    </div>
  )
}

export { FooterIcon }
