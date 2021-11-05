import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [Value, setValue] = useState(initialState)

    // const Reset = () => {
    //     setValue(initialState)
    // }

    const HanldedInputChange = ({target}) => {
        setValue({
            ...Value,
            [target.name]: target.value
        })
    }

    return (
        [HanldedInputChange, Value]
    )
}
