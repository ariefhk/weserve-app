"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next-nprogress-bar"
import Link from "next/link"

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <div className="h-svh font-inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Oops! Page Not Found!</span>
        <p className="text-center text-muted-foreground">
          It looks like the page you{"'"}re looking for doesn{"'"}t exist <br />
          or it might have been deleted.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
          <Button asChild>
            <Link replace href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
