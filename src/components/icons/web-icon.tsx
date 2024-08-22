import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const WebIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00001 3H9.00001C7.05001 8.84 7.05001 15.16 9.00001 21H8.00001"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3C16.95 8.84 16.95 15.16 15 21"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { WebIcon }
