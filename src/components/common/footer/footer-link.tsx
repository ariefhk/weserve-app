import { cn } from "@/lib/cn"
import Link from "next/link"
import React from "react"

interface FooterLinkProps {
  className?: string
  href: string
  name: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ className, href, name }) => {
  return (
    <Link
      href={href}
      className={cn("text-gray-400 hover:text-violet-300", className)}>
      {name}
    </Link>
  )
}

export { FooterLink }
