import { CandleStickIcon } from "@/components/icons/candlestick-icon"
import { ChartIcon } from "@/components/icons/chart-icon"
import { CodingIcon } from "@/components/icons/coding-icon"
import { CPUIcon } from "@/components/icons/cpu-icon"
import { CrownIcon } from "@/components/icons/crown-icon"
import { LockIcon } from "@/components/icons/lock-icon"
import { SVGIcon } from "@/types/icon"

export interface DemoBannerData {
  id: number
  title: string
  icon: React.FC<SVGIcon>
}

export const demoBannerDataList: DemoBannerData[] = [
  {
    id: 1,
    title: "WebCrawl",
    icon: CodingIcon,
  },
  {
    id: 2,
    title: "Fast Report",
    icon: CPUIcon,
  },
  {
    id: 3,
    title: "Anti-DDoS",
    icon: LockIcon,
  },
  {
    id: 4,
    title: "Auto-Scale",
    icon: ChartIcon,
  },
  {
    id: 5,
    title: "AI Perform",
    icon: CandleStickIcon,
  },
  {
    id: 6,
    title: "Top Plugins",
    icon: CrownIcon,
  },
]
