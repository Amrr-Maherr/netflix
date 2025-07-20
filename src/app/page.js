"use client";
import Card from "@/Components/Card/Card";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SideBar from "@/Components/Header/SideBar/Eelemnts/SideBar";
import HeroSection from "@/Components/HeroSection/HeroSection";
import Loader from "@/Components/Loader/Loader";
import MovieAds from "@/Components/MovieAds/MovieAds";
import Section from "@/Components/Section/Section";
import UseFetchData from "@/Hooks/useFetchData";

export default function Home() {
  const {
    loading: upcomingLoading,
    error: upcomingError,
    Data: upcomingData,
  } = UseFetchData({ url: "/movie/upcoming" });
  const {
    loading: popularLoading,
    error: popularError,
    Data: popularData,
  } = UseFetchData({ url: "/movie/now_playing" });
  const {
    loading: topRatedLoading,
    error: topRatedError,
    Data: topRatedData,
  } = UseFetchData({ url: "/movie/top_rated" });

  return (
    <>
      <Header />
      <SideBar mobile="true" />
      <HeroSection />
      <main>
        {/* Upcoming Movies Section */}
        {upcomingData &&
          (upcomingLoading ? (
            <Loader />
          ) : upcomingError ? (
            <div className="text-center text-red-500 py-4">
              Error loading Upcoming Movies: {upcomingError.message}
            </div>
          ) : (
            <Section
              Data={upcomingData}
              sectionTitle="Upcoming Movies"
              slidesPerView={5}
              slidesPerViewMobile={1}
              spaceBetween={10}
            />
          ))}

        {/* Popular Movies Section */}
        {popularData &&
          (popularLoading ? (
            <Loader />
          ) : popularError ? (
            <div className="text-center text-red-500 py-4">
              Error loading Popular Movies: {popularError.message}
            </div>
          ) : (
            <Section
              Data={popularData}
              sectionTitle="Popular Tv Shows"
              slidesPerView={4}
              slidesPerViewMobile={2}
              spaceBetween={20}
            />
          ))}

        {/* Top Rated Movies Section */}
        {topRatedData &&
          (topRatedLoading ? (
            <Loader />
          ) : topRatedError ? (
            <div className="text-center text-red-500 py-4">
              Error loading Top Rated Movies: {topRatedError.message}
            </div>
          ) : (
            <Section
              Data={topRatedData}
              sectionTitle="Top Rated Movies"
              slidesPerView={3}
              slidesPerViewMobile={1}
              spaceBetween={15}
            />
          ))}
      </main>
      <Footer />
    </>
  );
}
