import { cn } from "@/lib/cn"
import Link from "next/link"
import React from "react"

interface NavbarLinkProps {
  className?: string
  href: string
  name: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ className, href, name }) => {
  return (
    <Link
      href={href}
      className={cn("text-indigo-950 hover:text-violet-700", className)}>
      {name}
    </Link>
  )
}

export { NavbarLink }
