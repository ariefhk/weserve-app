import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const CallCenterIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.89999 22H15.1"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 18.3999V21.9999"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9955 7.25H19.0045"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1957 7.25H16.2047"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3954 7.25H13.4044"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { CallCenterIcon }
