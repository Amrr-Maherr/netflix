"use client";
import React, { useState } from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Button } from "@/Components/ui/button";
import UseFetchSearch from "@/Hooks/UseFetchSearch";
import Card from "@/Components/Card/Card";
import Loader from "@/Components/Loader/Loader";
import SideBar from "@/Components/Header/SideBar/Eelemnts/SideBar";

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState(null);

  const { loading, error, Data } = UseFetchSearch({ query: searchTerm });

  const handleSearch = () => {
    if (query.trim()) {
      setSearchTerm(query.trim());
    }
    console.log(Data);
    
  };

  return (
    <>
      <Header />
      <SideBar mobile="true" />
      <main className="bg-black min-h-screen flex items-center justify-center text-white pt-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-6 max-w-[840px] flex items-center justify-center flex-col mx-auto">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-lg sm:text-xl my-5 font-bold">
              Starts at EGP 100. Cancel anytime.
            </p>
            <p className="text-white text-lg sm:text-xl font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>

          <div className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 px-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your favorite movies"
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-4 px-6 rounded-[5px] bg-gray-800 text-white text-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            />
            <Button
              onClick={handleSearch}
              className="w-full sm:w-auto h-full cursor-pointer bg-red-600 px-15 py-4 rounded-[5px] text-white text-xl font-bold hover:bg-red-700 transition"
            >
              Get Started {">"}
            </Button>
          </div>
          {loading && <Loader />}
          {error && <p className="text-center text-red-500">{error}</p>}
          <section className="bg-black py-10 sm:px-8 lg:px-16">
            <div className="grid gap-x-8 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {Array.isArray(Data?.results) && Data?.results?.length > 0
                ? Data?.results?.map((ele) => <Card movie={ele} key={ele.id} />)
                : searchTerm &&
                  !loading && (
                    <p className="col-span-full text-center text-gray-400 text-lg mt-10">
                      No results found for your search. Try a different title or
                      keyword.
                    </p>
                  )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
