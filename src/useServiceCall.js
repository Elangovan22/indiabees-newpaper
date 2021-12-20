import { useEffect, useState } from "react";


const useServiceCall = (url) => {

    const abortcontroller =new AbortController();

    const [data, SetData] = useState(null)
    const [isLoading, SetIsLoading] = useState(true)
    const [error, SetError] = useState(null)

    useEffect(() => {
        fetch(url, {signal: abortcontroller.signal}).then(res => {
            console.log(res)
            if (!res.ok) {
                throw Error('Oops!, Some thing went wrong!')
            }
            return res.json();
        }).then((data) => {
            console.log(data)
            SetData(data)
            SetIsLoading(false)
            SetError(null)
        }).catch(error => {

            if (error.name === "AbortError") {
                console.log("aborted service")
            }
            else{
                SetError(error.message)
                SetIsLoading(false)
            }
            
        })

        return () => abortcontroller.abort()
    }, [url])

    return {data, isLoading, error}
}
 
export default useServiceCall;