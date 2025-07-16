import axios from "axios";
import { useEffect, useState } from "react";

export default function UseFetchData({url}) {
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [Data, setData] = useState([]);
    const fetchData = async() => {
        try {
            setLoading(true)
            const Data = await axios.get(
              `${NEXT_PUBLIC_API_BASE_URL}${url}`
            );
            setData(response.data.results);
            setLoading(false)
        } catch (error) {
            setError(error)
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return {Data,loading,error}
}