import { useState } from "react"
import { Products } from "../types/Products"



const useServices = (url: string) => {


    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(false)
    const [data, setdata] = useState<Products[]>([])


    const handle = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const response = await res.json()
            setdata(response)

        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }

    }

    return {
        data,
        handle,
        loading,
        error
    }
}

export default useServices
