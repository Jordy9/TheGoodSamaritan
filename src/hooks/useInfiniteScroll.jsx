import { useCallback, useEffect, useRef, useState } from 'react'

export const useInfiniteScroll = () => {

    const refElement = useRef()

    const [isLoading, setIsLoading] = useState(false)

    const handleScroll =useCallback(
      () => {
        if (isLoading) return

        if ((window.innerHeight + window.scrollY) >= refElement.current.offsetHeight - 200){
          setIsLoading(true)
        }
      },
      [isLoading],
    )

    useEffect(() => {
        
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)

    }, [isLoading, handleScroll])

  return {
    refElement,
    isLoading,
    setIsLoading
  }
}
