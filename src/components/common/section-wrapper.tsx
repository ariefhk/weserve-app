import { cn } from "@/lib/cn"
import React from "react"

interface SectionWrapperProps extends React.PropsWithChildren {
  className?: string
  component?: keyof JSX.IntrinsicElements
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  className,
  children,
  component: Component = "div",
}) => {
  return (
    <Component
      className={cn("max-w-6xl mx-auto py-6 px-5 md:px-8 xl:px-0", className)}>
      {children}
    </Component>
  )
}

export { SectionWrapper }
