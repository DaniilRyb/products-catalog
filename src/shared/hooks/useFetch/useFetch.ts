import {useEffect, useState} from "react";
import axios from "axios";

interface TApiResponse<T> {
    data: T | null,
    isLoading: boolean,
    isError: boolean
}


export const useFetch = <T>(request: string): TApiResponse<T> => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const getDataApi = async (request: string) => {
        setIsLoading(true)
        try {
            const {data, statusText} = await axios.get<T>(request)
            if (data) {
                setIsLoading(false)
                setData(data)
            } else {
                setIsError(true)
                throw new Error(statusText)
            }

        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        void getDataApi(request)
    }, [])


    return {
        data,
        isLoading,
        isError
    }
}