// Error boundaries must be Client Components
"use client"

import { Button } from "@/components/ui/button"
import React, { useEffect } from "react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <div className="h-svh font-inter">
        <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
          <h1 className="text-[7rem] font-bold leading-tight">500</h1>
          <span className="font-medium">Ups! Something went wrong!</span>
          <p className="text-center text-muted-foreground">
            There was an internal server error. <br />
            Please try again later or contact support.
          </p>
          <div className="mt-6 flex gap-4">
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }>
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
