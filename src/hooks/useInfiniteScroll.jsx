import { useState } from 'react'
import { useEffect, useRef } from 'react'

export const useInfiniteScroll = () => {

    const refElement = useRef()

    const [currentCount, setCurrentCount] = useState(0)
    
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        
        window.addEventListener('scroll', () => {
          if (!isLoading && (window.innerHeight + window.scrollY + 500) >= refElement.current.offsetHeight){

            setIsLoading(true)

            setTimeout(() => {
              setCurrentCount(prevCount => prevCount + 25)
              setIsLoading(false)
            }, 1500);
  
          }
        });

        return window.removeEventListener('scroll', () => {
          if ((window.innerHeight + window.scrollY + 500) >= refElement.current.offsetHeight){

            setIsLoading(true)

            setTimeout(() => {
              setCurrentCount(prevCount => prevCount + 25)
              setIsLoading(false)
            }, 1500);
  
          }
        })

    }, [isLoading])

  return {
    refElement,
    isLoading,
    currentCount
  }
}
