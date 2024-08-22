"use client"

import { ShopIcon } from "@/components/icons/shop-icon"
import { useCheckScrolled } from "@/hooks"
import { cn } from "@/lib/cn"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  const { isScrolled } = useCheckScrolled(100)

  return (
    <>
      <div
        className={cn("w-full bg-weserve-white fixed top-0 z-30 ", {
          "border-b shadow-sm": isScrolled,
        })}>
        <nav className="navbar   max-w-6xl mx-auto py-6 px-5 md:px-8 xl:px-0">
          <div className="flex flex-row items-center justify-between">
            <Image
              src="/images/logo-light.svg"
              className="h-[42px]"
              alt=""
              width={176}
              height={42}
            />
            <ul className=" flex-row gap-x-8 lg:flex hidden">
              <li>
                <Link
                  href="#"
                  className="text-indigo-950 hover:text-violet-700">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-indigo-950 hover:text-violet-700">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-indigo-950 hover:text-violet-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-indigo-950 hover:text-violet-700">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-indigo-950 hover:text-violet-700">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex flex-row gap-x-4">
              <div className="bg-white flex items-center p-[10px] rounded-full">
                <Link href="#">
                  <ShopIcon />
                </Link>
              </div>
              <Link
                href="#"
                className="md:block hidden py-3 bg-indigo-950 text-white text-base px-5 rounded-full hover:bg-violet-700 transition duration-500">
                Sign In
              </Link>
              <div
                id="btn-dropdown"
                className="lg:hidden bg-white flex items-center p-[10px] rounded-full">
                <Link href="#">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 7H21"
                      stroke="#080C2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 12H21"
                      stroke="#080C2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 17H21"
                      stroke="#080C2E"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        id="dropdown-menu"
        className="megamenu absolute top-28 justify-center flex flex-col hidden px-5 lg:hidden md:px-10 w-full">
        <div className="flex flex-col bg-white p-5 md:p-8 rounded-2xl gap-y-5">
          <ul className="flex flex-col gap-y-5">
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-950 hover:text-violet-700">
                Blog
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="md:hidden py-3 bg-indigo-950 text-white text-base px-5 text-center w-full rounded-full">
            Sign In
          </a>
        </div>
      </div>
    </>
  )
}

export { Navbar }
