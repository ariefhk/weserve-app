interface Link {
  href: string
  name: string
}

export interface ShowcaseData {
  id: number
  imageSrc: string
  href: string
  link: Link
}

export const showcaseListData: ShowcaseData[] = [
  {
    id: 1,
    imageSrc: "/images/showcase1.png",
    href: "#",
    link: {
      href: "#",
      name: "View Details",
    },
  },
  {
    id: 2,
    imageSrc: "/images/showcase2.png",
    href: "#",
    link: {
      href: "#",
      name: "View Details",
    },
  },
  {
    id: 3,
    imageSrc: "/images/showcase3.png",
    href: "#",
    link: {
      href: "#",
      name: "View Details",
    },
  },
  {
    id: 4,
    imageSrc: "/images/showcase4.png",
    href: "#",
    link: {
      href: "#",
      name: "View Details",
    },
  },
]
