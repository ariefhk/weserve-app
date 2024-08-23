import { ElipsIcon } from "@/components/icons/elips-icon"
import { useCheckHover } from "@/hooks"
import Link from "next/link"
import React from "react"
import { bestChoiceIconStyle } from "./best-choice-icon-style"
import { BestChoiceData } from "./best-choice-list-data"
import { BestChoiceText } from "./best-choice-text"

interface BestChoiceProps extends BestChoiceData {
  className?: string
}

const BestChoice: React.FC<BestChoiceProps> = ({ className, ...props }) => {
  const { isHover, handleHoverState } = useCheckHover()
  const Icon = props.icon

  return (
    <div
      aria-hidden="true"
      onMouseOver={() => handleHoverState(true)}
      onMouseOut={() => handleHoverState(false)}
      className="item-card group hover:bg-[#080C2E] cursor-pointer bg-white relative rounded-2xl p-7 gap-y-7 flex flex-col">
      {isHover && (
        <div className="absolute group-hover:block hidden right-10 w-fit">
          <ElipsIcon />
        </div>
      )}
      <div className="z-10 gap-y-7 flex flex-col">
        <Icon width={43} height={43} stroke={bestChoiceIconStyle(isHover)} />
        <BestChoiceText title={props?.title} description={props?.description} />
        <Link
          href="#"
          className="text-weserve-purple group-hover:text-white font-semibold">
          Learn More
        </Link>
      </div>
    </div>
  )
}

export { BestChoice }
