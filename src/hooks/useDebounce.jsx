import { useRef } from 'react'
import { useDispatch } from 'react-redux';

export const useDebounce = (GetSearch) => {

    const dispatch = useDispatch();

    const debounceRef = useRef()

    const onQueryChange = (target) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            dispatch(GetSearch(1, target.value))
        }, 350);
    }
    
  return {
    onQueryChange
  }
}
