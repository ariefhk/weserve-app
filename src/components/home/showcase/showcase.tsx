import { cn } from "@/lib/cn"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ShowcaseData } from "./showcase-list-data"

interface ShowcaseProps extends ShowcaseData {
  className?: string
}

const Showcase: React.FC<ShowcaseProps> = ({ className, ...props }) => {
  return (
    <div className={cn("group relative", className)}>
      <div className="group-hover:opacity-100 transition-all ease-in-out duration-100 absolute opacity-0 bottom-8 justify-center flex w-full">
        <Link
          href={props.link.href}
          className="transition-all ease-in-out duration-500 shadow-2xl shadow-violet-700 hover:bg-indigo-950 hover:text-white bg-violet-700 px-7 py-3 font-semibold rounded-full text-white text-base">
          {props.link.name}
        </Link>
      </div>
      <Image
        width={320}
        height={220}
        src={props.imageSrc}
        alt={props.link.name}
        className="w-[320px] h-[220px] border-0 group-hover:border-4 border-violet-700 rounded-[16px] transition-all ease-in-out duration-100 object-cover"
      />
    </div>
  )
}

export { Showcase }
