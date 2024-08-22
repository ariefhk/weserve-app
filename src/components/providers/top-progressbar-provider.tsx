"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import React, { Suspense } from "react"

interface TopProgressBarProps extends React.PropsWithChildren {}

const TopProgressBar: React.FC<TopProgressBarProps> = ({ children }) => {
  return (
    <>
      {children}
      <Suspense>
        <ProgressBar
          height="4px"
          color="#F00"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  )
}

export default TopProgressBar
