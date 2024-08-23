"use client"

import { LogoIpsum1 } from "@/components/icons/logoipsum/logoipsum1-icon"
import { LogoIpsum2 } from "@/components/icons/logoipsum/logoipsum2-icon"
import { LogoIpsum3 } from "@/components/icons/logoipsum/logoipsum3-icon"
import { SVGIcon } from "@/types/icon"
import React from "react"

export interface CompanyIconData {
  id: number
  icon: React.FC<SVGIcon>
}

export const companyIconListData: CompanyIconData[] = [
  {
    id: 1,
    icon: LogoIpsum1,
  },
  {
    id: 2,
    icon: LogoIpsum2,
  },
  {
    id: 3,
    icon: LogoIpsum3,
  },
  {
    id: 4,
    icon: LogoIpsum1,
  },
  {
    id: 5,
    icon: LogoIpsum1,
  },
]
