import * as React from "react"

const useCheckScrolled = (threshold: number) => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  return { isScrolled }
}

export default useCheckScrolled
