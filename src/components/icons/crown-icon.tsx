import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const CrownIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.175 36.8784H14.1583C13.3533 36.8784 12.4525 36.2459 12.1841 35.4793L4.24914 13.2843C3.11831 10.1026 4.44081 9.1251 7.16247 11.0801L14.6375 16.4276C15.8833 17.2901 17.3016 16.8493 17.8383 15.4501L21.2116 6.46094C22.285 3.58594 24.0675 3.58594 25.1408 6.46094L28.5141 15.4501C29.0508 16.8493 30.4691 17.2901 31.6958 16.4276L38.7108 11.4251C41.7008 9.27844 43.1383 10.3709 41.9116 13.8401L34.1683 35.5176C33.8808 36.2459 32.98 36.8784 32.175 36.8784Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.625 42.6667H33.7083"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.375 27.3333H27.9583"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { CrownIcon }
