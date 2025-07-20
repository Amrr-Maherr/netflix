"use client";
import React from "react";
import Image from "next/image";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import dummyPoster from "../../../public/Netflix_Logo_PMS.png";

export default function Search() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen flex items-center justify-center text-white pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
              What will you watch tonight?
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl">
              Explore trending titles, hidden gems, and everything in between —
              all in one place.
            </p>
          </div>
          <div className="flex justify-center mb-16">
            <input
              type="text"
              placeholder="Search for a title, genre, or person"
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-4 px-6 rounded-lg bg-gray-800 text-white text-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
