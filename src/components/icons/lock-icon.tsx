import { cn } from "@/lib/cn"
import { SVGIcon } from "@/types/icon"
import React from "react"

const LockIcon: React.FC<SVGIcon> = ({ className, ...props }) => {
  return (
    <svg
      className={cn(className)}
      width={props?.width ?? 24}
      height={props?.height ?? 24}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.2724 5.02424L10.7083 8.6084C8.50411 9.43256 6.70245 12.0392 6.70245 14.3967V28.6375C6.70245 30.8992 8.19747 33.87 10.0183 35.2309L18.26 41.3834C20.9625 43.4151 25.4091 43.4151 28.1116 41.3834L36.3533 35.2309C38.1741 33.87 39.6691 30.8992 39.6691 28.6375V14.3967C39.6691 12.0392 37.8674 9.43256 35.6633 8.6084L26.0991 5.02424C24.4699 4.43007 21.8633 4.43007 20.2724 5.02424Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.1666 21.6801C23.09 21.6801 22.9941 21.6801 22.9175 21.6801C21.1158 21.6226 19.6783 20.1275 19.6783 18.3067C19.6783 16.4475 21.1925 14.9333 23.0516 14.9333C24.9108 14.9333 26.425 16.4475 26.425 18.3067C26.4058 20.1467 24.9683 21.6226 23.1666 21.6801Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3525 27.0467C17.5125 28.2734 17.5125 30.2858 19.3525 31.5125C21.4416 32.9117 24.8725 32.9117 26.9616 31.5125C28.8016 30.2858 28.8016 28.2734 26.9616 27.0467C24.8916 25.6475 21.4608 25.6475 19.3525 27.0467Z"
        stroke={props?.stroke ?? "#640EF1"}
        strokeWidth={props?.strokeWidth ?? 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { LockIcon }
