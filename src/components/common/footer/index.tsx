import { cn } from "@/lib/cn"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FooterIconList } from "./footer-icon-list"
import { FooterIconListData } from "./footer-icon-list-data"
import { FooterLinkList } from "./footer-link-list"
import {
  FooterCompanyLinkDatas,
  FooterProductLinkDatas,
  FooterResourceLinkDatas,
} from "./footer-link-list-data"

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <section
      className={cn(
        " w-screen bg-weserve-darkblue lg:-z-10 lg:-mt-[230px] lg:pt-[230px] h-fit",
        className,
      )}>
      <div className="max-w-6xl mx-auto mt-[100px] px-5 py-10 lg:py-0 xl:px-0">
        <div className="grid lg:grid-cols-5 gap-x-10 gap-y-8 grid-cols-1 sm:grid-cols-2">
          <div className="lg:col-span-2 flex flex-col gap-y-8">
            <Image
              src="/images/logo.svg"
              alt=""
              className="w-fit h-[42px]"
              width={100}
              height={42}
            />
            <p className="text-base text-gray-400 leading-relaxed">
              We host your empire business today
              <br /> using the latest technologies.
            </p>
            <FooterIconList iconDatas={FooterIconListData} />
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <FooterLinkList linkDatas={FooterProductLinkDatas} />
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <FooterLinkList linkDatas={FooterResourceLinkDatas} />
          </div>
          <div className="flex flex-col gap-y-8">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <FooterLinkList linkDatas={FooterCompanyLinkDatas} />
          </div>
        </div>
        <p className="py-20 text-center text-base text-gray-400">
          All Rights Reserved • Copyright Weserve by
          <Link
            href="https://arief-dev.vercel.app"
            className="hover:text-violet-300 px-1">
            Arief Dev
          </Link>
          2024
        </p>
      </div>
    </section>
  )
}

export { Footer }
