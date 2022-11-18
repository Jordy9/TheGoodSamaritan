import { useEffect, useState } from 'react'

export const useResponsive = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', changeWidth)
        if (width > 991) {
        }
        return () => window.removeEventListener('resize', changeWidth)
        
    }, [width]);
  return [
    width
  ]
}
