import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getData= async() => {
        const resp = await getGifs(category);
        setData(resp);
        setIsLoading(false);
    }

    useEffect( () => {
        getData();
    }, [])


    return {
        data,
        isLoading
    }
}