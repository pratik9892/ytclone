import { fetchDatafromApi } from "../utils/api";
import { useState,useEffect } from "react";

export const UseFetch = (url) => {
    const [data,setData] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchDatafromApi(url)
            .then((res) => {
                setIsLoading(false)
                setData(res)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
            })
    },[url])

    return {
        data,
        isLoading,
        error
    }
}