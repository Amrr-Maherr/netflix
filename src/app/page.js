"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Loader from "@/Components/Loader/Loader";
import UseFetchData from "@/Hooks/useFetchData";
import Image from "next/image";
export default function Home() {
  const { loading, Data, error } = UseFetchData({ url: "/movie/popular" });
  console.log(Data);
  console.log(loading);
  
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
