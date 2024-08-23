import { cn } from "@/lib/cn"
import React from "react"

interface BestChoiceTextProps {
  className?: string
  title: string
  description: string
}

const BestChoiceText: React.FC<BestChoiceTextProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <div className={cn(className)}>
      <h3 className="font-semibold group-hover:text-white text-black text-xl mb-2">
        {title}
      </h3>
      <p className="text-base leading-lg group-hover:text-white text-gray-500">
        {description}
      </p>
    </div>
  )
}

export { BestChoiceText }
