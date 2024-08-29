import { ElipsIcon } from "@/components/icons/elips-icon"
import { cn } from "@/lib/cn"
import Link from "next/link"
import React from "react"
import { DemoBannerData } from "./demo-banner-data"

interface DemoBannerCardProps extends DemoBannerData {
  className?: string
}

const DemoBannerCard: React.FC<DemoBannerCardProps> = ({
  className,
  ...props
}) => {
  const Icon = props.icon

  return (
    <div className="group">
      <div
        className={cn(
          "group-hover:bg-[#080C2E] ease-in-out duration-500 group-hover:py-[28px] group-hover:cursor-pointer transition bg-white relative rounded-2xl flex py-5 md:py-[40px] h-fit flex-col gap-y-5 items-center",
          className,
        )}>
        <div className="group-hover:flex hidden absolute right-3 top-3 w-fit">
          <ElipsIcon />
        </div>
        <div className="z-10 flex flex-col gap-y-5 items-center">
          <Icon
            className="group-hover:block hidden transition-all ease-in-out duration-500"
            width={43}
            height={43}
            stroke="white"
          />
          <Icon className="group-hover:hidden" width={43} height={43} />
          <div className="text-center">
            <h3 className="text-indigo-950 group-hover:text-white font-bold text-lg transition-all ease-in-out duration-500">
              {props.title}
            </h3>
            <Link
              href="#"
              className="hidden group-hover:block text-base text-gray-500">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoBannerCard
