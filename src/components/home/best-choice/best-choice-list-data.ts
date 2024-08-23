import { BoxIcon } from "@/components/icons/box-icon"
import { ChartIcon } from "@/components/icons/chart-icon"
import { GitIcon } from "@/components/icons/git-icon"
import { ServerIcon } from "@/components/icons/server-icon"
import { SVGIcon } from "@/types/icon"

export interface BestChoiceData {
  id: number
  title: string
  description: string
  icon: React.FC<SVGIcon>
}

export const bestChoiceListData: BestChoiceData[] = [
  {
    id: 1,
    icon: GitIcon,
    title: "Extra Layers",
    description: "Making your project more secure avoiding DDoS.",
  },
  {
    id: 2,
    icon: BoxIcon,
    title: "Customizable",
    description: "Only install what your business needs to grow.",
  },
  {
    id: 3,
    icon: ChartIcon,
    title: "AI Automation",
    description: "Decide the business flow based on latest reports.",
  },
  {
    id: 4,
    icon: ServerIcon,
    title: "Auto-Scaling",
    description: "Have a long weekend without worrying any loss.",
  },
]
