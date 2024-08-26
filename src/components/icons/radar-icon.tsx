import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const RadarIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 47 46"
      fill="none">
      <path
        d="M17.6925 42.1667H29.1925C38.7758 42.1667 42.6092 38.3334 42.6092 28.75V17.25C42.6092 7.66671 38.7758 3.83337 29.1925 3.83337H17.6925C8.10917 3.83337 4.27583 7.66671 4.27583 17.25V28.75C4.27583 38.3334 8.10917 42.1667 17.6925 42.1667Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.27583 24.3417L15.7758 24.3034C17.2133 24.3034 18.8233 25.3959 19.36 26.7375L21.545 32.2575C22.0433 33.5034 22.8292 33.5034 23.3275 32.2575L27.7167 21.1217C28.1383 20.0484 28.9242 20.01 29.4608 21.0259L31.4542 24.8017C32.0483 25.9325 33.5817 26.8525 34.8467 26.8525H42.6283"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { RadarIcon }
