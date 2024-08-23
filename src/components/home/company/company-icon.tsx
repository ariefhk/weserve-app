import { cn } from "@/lib/cn"
import React from "react"
import { CompanyIconData } from "./company-icon-list-data"

interface CompanyIconProps extends CompanyIconData {
  className?: string
}

const CompanyIcon: React.FC<CompanyIconProps> = ({ className, ...props }) => {
  const Icon = props.icon
  return <Icon className={cn(className)} />
}

export { CompanyIcon }
