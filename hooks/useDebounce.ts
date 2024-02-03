import { useEffect, useState } from "react"

function useDebounce<T>(value:T,delay:number):T{

    const [debounceValue,setDebounceValue] = useState(value)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounceValue(value)
        },delay ||300)

        return ()=>{
            clearTimeout(timeout)
        }
    },[value,delay])

    return debounceValue

}

export default useDebounce