import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const CloudIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 47 46"
      fill="none">
      <path
        d="M11.1183 21.3132C2.14827 21.9457 2.14827 34.9982 11.1183 35.6307H14.7984"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2142 21.3133C5.06172 4.19744 31.0133 -2.64505 33.9841 15.3333C42.2833 16.3875 45.6375 27.4466 39.3509 32.9475C37.4342 34.6916 34.9617 35.6499 32.3742 35.6308H32.2016"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.0833 31.6825C33.0833 33.1008 32.7766 34.4424 32.2016 35.6308C32.0483 35.9758 31.8759 36.3016 31.6842 36.6083C30.0359 39.3875 26.9883 41.2658 23.5 41.2658C20.0117 41.2658 16.9641 39.3875 15.3158 36.6083C15.1241 36.3016 14.9517 35.9758 14.7984 35.6308C14.2234 34.4424 13.9167 33.1008 13.9167 31.6825C13.9167 26.3925 18.21 22.0991 23.5 22.0991C28.79 22.0991 33.0833 26.3925 33.0833 31.6825Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.51 31.6825L22.4075 33.58L26.49 29.8042"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { CloudIcon }
