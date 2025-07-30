"use client";
import { useCallback } from "react";

const useMovieStorage = () => {
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
  }, []);

  return { addMovieToLocalStorage };
};

export default useMovieStorage;
