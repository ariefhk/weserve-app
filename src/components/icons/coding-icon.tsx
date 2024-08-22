import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const CodingIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47 46"
      fill="none">
      <path
        d="M18.0833 42.1666H29.5833C39.1667 42.1666 43 38.3333 43 28.7499V17.2499C43 7.66659 39.1667 3.83325 29.5833 3.83325H18.0833C8.50001 3.83325 4.66667 7.66659 4.66667 17.2499V28.7499C4.66667 38.3333 8.50001 42.1666 18.0833 42.1666Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2333 17.1924L14.4608 21.9649C13.905 22.5207 13.905 23.4599 14.4608 24.0157L19.2333 28.7882"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.4333 17.1924L33.2058 21.9649C33.7617 22.5207 33.7617 23.4599 33.2058 24.0157L28.4333 28.7882"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { CodingIcon }
