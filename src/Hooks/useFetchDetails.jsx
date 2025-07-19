import axios from "axios"
import { useEffect, useState } from "react";

export default function useFetchDetails({ url }) {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [Data,setData] = useState(null)
    const GetDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                },
              }
            );
            setData(response.data);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
      if (url) {
        GetDetails();
      }
    }, [url]);
    useEffect(() => {
      console.log("Data updated:", Data);
    }, [Data]);
    return {error,loading,Data}
}