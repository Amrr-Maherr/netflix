"use client";

import Card from "@/Components/Card/Card";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SideBar from "@/Components/Header/SideBar/Eelemnts/SideBar";
import React, { useEffect, useState } from "react";

export default function List() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("movie");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setMovies(parsed);
      }
    } catch (error) {
      console.error("Failed to load movies from localStorage", error);
    }
  }, []);

  return (
    <>
      <Header />
      <SideBar mobile="true" />
      <section className="bg-black min-h-screen px-4 py-20 flex items-center justify-center flex-col">
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-8 text-center tracking-wide">
          Your Favorite Movies & TV Shows
        </h2>

        {movies.length > 0 ? (
          <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center">
            {movies.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center mt-20">
            <p className="text-white text-lg sm:text-xl opacity-70">
              No movies in your list yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
