"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SideBar from "@/Components/Header/SideBar/Eelemnts/SideBar";
import HeroSection from "@/Components/HeroSection/HeroSection";
import MovieAds from "@/Components/MovieAds/MovieAds";
import UseFetchData from "@/Hooks/useFetchData";
export default function Home() {
  const { loading, error, Data } = UseFetchData({ url: "/movie/upcoming" });
  return (
    <>
      {/* <Header /> */}
      <SideBar mobile="true" />
      <HeroSection />
      {Data.map((movie) => (
        <MovieAds data={movie} key={movie.id} />
      ))}
      <Footer />
    </>
  );
}
