import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const VideoIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.51999 7.11011H21.48"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.51999 2.11011V6.97011"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.48 2.11011V6.52011"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { VideoIcon }
