import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const ChartIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.02 35.2876V31.3201"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
      />
      <path
        d="M23.8333 35.2875V27.3525"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
      />
      <path
        d="M33.6467 35.2874V23.3657"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
      />
      <path
        d="M33.6467 11.7124L32.765 12.7474C27.8775 18.4591 21.3225 22.5032 14.02 24.3241"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
      />
      <path
        d="M28.0308 11.7124H33.6467V17.3091"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0833 42.6666H29.5833C39.1667 42.6666 43 38.8333 43 29.2499V17.7499C43 8.16659 39.1667 4.33325 29.5833 4.33325H18.0833C8.50001 4.33325 4.66667 8.16659 4.66667 17.7499V29.2499C4.66667 38.8333 8.50001 42.6666 18.0833 42.6666Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { ChartIcon }
