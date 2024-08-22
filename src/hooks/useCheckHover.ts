import * as React from "react"

const useCheckHover = () => {
  const [isHover, setIsHover] = React.useState<boolean>(false)

  const handleHoverState = React.useCallback((state: boolean) => {
    setIsHover(state)
  }, [])

  return { isHover, handleHoverState }
}

export default useCheckHover
