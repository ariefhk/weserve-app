import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const ShopIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 7.67001V6.70001C8 4.45001 9.81 2.24001 12.06 2.03001C14.74 1.77001 17 3.88001 17 6.51001V7.89001"
        stroke={props?.stroke ?? "#080C2E"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.50001 22H15.5C19.52 22 20.24 20.39 20.45 18.43L21.2 12.43C21.47 9.99 20.77 8 16.5 8H8.50001C4.23001 8 3.53001 9.99 3.80001 12.43L4.55001 18.43C4.76001 20.39 5.48001 22 9.50001 22Z"
        stroke={props?.stroke ?? "#080C2E"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeMiterlimit={props?.strokeMiterlimit ?? 10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9955 12H16.0045"
        stroke={props?.stroke ?? "#080C2E"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99451 12H9.00349"
        stroke={props?.stroke ?? "#080C2E"}
        strokeWidth={props?.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { ShopIcon }
