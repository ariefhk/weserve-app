"use client"

import { SVGIcon } from "@/types/icon"
import { MessageIcon, PhoneIcon, WebIcon } from "../../icons"
import { VideoIcon } from "../../icons/video-icon"

export interface FooterIconData {
  id: number
  href: string
  name: string
  icon: React.FC<SVGIcon>
}

export const FooterIconListData: FooterIconData[] = [
  {
    id: 1,
    href: "#",
    name: "Message",
    icon: MessageIcon,
  },
  {
    id: 2,
    href: "#",
    name: "Web",
    icon: WebIcon,
  },
  {
    id: 3,
    href: "#",
    name: "Phone",
    icon: PhoneIcon,
  },
  {
    id: 4,
    href: "#",
    name: "Video",
    icon: VideoIcon,
  },
]
