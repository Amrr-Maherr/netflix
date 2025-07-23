"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React from "react";

export default function List() {
  return (
      <>
     <Header/>
      <section className=" bg-black h-screen flex items-center justify-center flex-col">
        <h2 className="text-white text-2xl font-bold mb-4">
          Your Favorites Movie And Tv Shows List
        </h2>
      </section>
      <Footer/>
    </>
  );
}
