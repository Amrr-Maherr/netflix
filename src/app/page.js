"use client";
import Card from "@/Components/Card/Card";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SideBar from "@/Components/Header/SideBar/Eelemnts/SideBar";
import HeroSection from "@/Components/HeroSection/HeroSection";
import MovieAds from "@/Components/MovieAds/MovieAds";
import Section from "@/Components/Section/Section";
import UseFetchData from "@/Hooks/useFetchData";
export default function Home() {
  const { loading, error, Data } = UseFetchData({ url: "/movie/upcoming" });
  return (
    <>
      <Header />
      <SideBar mobile="true" />
      <HeroSection />
      <Section Data={Data}/>
      <Footer />
    </>
  );
}
