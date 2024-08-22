import { Footer } from "@/components/common/footer"
import { Navbar } from "@/components/common/navbar"
import React from "react"

interface AppLayoutProps extends React.PropsWithChildren {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="bg-weserve-white">
      <Navbar />
      <div className="pt-[80px]">{children}</div>
      <Footer />
    </div>
  )
}

export default AppLayout
