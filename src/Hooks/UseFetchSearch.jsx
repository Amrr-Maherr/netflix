// Importing axios for making HTTP requests
import axios from "axios";

// Importing hooks from React
import { useEffect, useState } from "react";

// Custom hook to fetch search results based on the query
export default function UseFetchSearch({ query }) {
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // State to store any error that may occur during fetching
  const [error, setError] = useState(null);

  // State to store the fetched data
  const [Data, setData] = useState(null);

  // Function to handle the API call
  const handleSearch = async () => {
    setLoading(true); // Start loading

    try {
      // Make GET request to search endpoint with authorization header
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SEARCH_MULTI}?=${query}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );

      // Save the response data
      setData(response.data);
      setLoading(false); // Stop loading
    } catch (error) {
      // Save the error if request fails
      setError(error);
      setLoading(false); // Stop loading in case of error as well
    }
  };

  // useEffect will trigger the search function whenever the `query` changes
  useEffect(() => {
    if (query) handleSearch();
  }, [query]);

  // Return the error, loading status, and fetched data to be used in the component
  return { error, loading, Data };
}
