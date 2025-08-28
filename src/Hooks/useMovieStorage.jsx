"use client";
import { useCallback, useState } from "react";

const useMovieStorage = () => {
  const [status, setStatus] = useState(false);
  const addMovieToLocalStorage = useCallback((movie) => {
    let stored;

    try {
      const raw = localStorage.getItem("movie");
      stored = JSON.parse(raw);
      if (!Array.isArray(stored)) {
        stored = [];
      }
    } catch (error) {
      stored = [];
    }

    const alreadyExists = stored.some((item) => item.id === movie.id);
    if (!alreadyExists) {
      stored.push(movie);
      localStorage.setItem("movie", JSON.stringify(stored));
    }
    setStatus(true)
    setTimeout(() => {
      setStatus(false);
    }, 2000);
  }, []);

  return { addMovieToLocalStorage,status };
};

export default useMovieStorage;
