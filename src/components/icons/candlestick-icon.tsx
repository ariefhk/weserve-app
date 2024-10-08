import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const CandleStickIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9583 42.6667V29.25"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9583 10.0833V4.33325"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.0417 42.6667V36.9167"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.0417 17.7499V4.33325"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7083 13.9166V25.4166C18.7083 27.5249 17.75 29.2499 14.875 29.2499H11.0417C8.16668 29.2499 7.20834 27.5249 7.20834 25.4166V13.9166C7.20834 11.8083 8.16668 10.0833 11.0417 10.0833H14.875C17.75 10.0833 18.7083 11.8083 18.7083 13.9166Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.7917 21.5833V33.0833C39.7917 35.1917 38.8333 36.9167 35.9583 36.9167H32.125C29.25 36.9167 28.2917 35.1917 28.2917 33.0833V21.5833C28.2917 19.475 29.25 17.75 32.125 17.75H35.9583C38.8333 17.75 39.7917 19.475 39.7917 21.5833Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { CandleStickIcon }
