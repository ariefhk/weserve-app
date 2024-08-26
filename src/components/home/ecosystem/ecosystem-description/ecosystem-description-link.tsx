import { MessageServerIcon } from "@/components/icons/message-server"
import Link from "next/link"
import React from "react"

const EcosystemDescriptionLink = () => {
  return (
    <div className="flex flex-col gap-y-5 lg:flex-row gap-x-5 items-center">
      <Link
        href="#"
        className="w-full text-center lg:w-fit transition-all ease-in-out duration-500 hover:bg-indigo-950 bg-violet-700 px-10 py-4 rounded-full text-white text-lg font-semibold">
        Explore More
      </Link>
      <Link href="#" className="font-semibold text-violet-700 flex gap-x-2">
        <MessageServerIcon />
        Schedule a Demo
      </Link>
    </div>
  )
}

export default EcosystemDescriptionLink
