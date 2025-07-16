"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to fetch data from an API endpoint
export default function UseFetchData({ url }) {
  // State to handle loading status
  const [loading, setLoading] = useState(false);
  // State to handle any error that occurs during fetching
  const [error, setError] = useState(null);
  // State to store fetched data
  const [Data, setData] = useState([]);

  // Function to fetch data asynchronously using Axios
  const fetchData = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, // Full API URL
        {
          headers: {
            // Include API key in the Authorization header
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      // Store only the `results` array from the response data
      setData(response.data.results);
      setLoading(false); // Stop loading after success
      console.log(response.data.results); // Debug: log the results
      console.log(loading); // Debug: log loading state
    } catch (error) {
      setError(error); // Save the error for displaying or handling
      console.log(error); // Debug: log the error
      setLoading(false); // Stop loading after failure
    }
  };

  // Run fetchData on initial render and whenever the `url` changes
  useEffect(() => {
    fetchData();
  }, [url]);

  // Return the data, loading status, and error to be used in components
  return { Data, loading, error };
}
