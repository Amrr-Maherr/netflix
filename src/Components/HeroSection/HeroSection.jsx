import UseFetchData from "@/Hooks/useFetchData";
import Slider from "../Slider/Slider";
import { Button } from "../ui/button";
import Loader from "../Loader/Loader";
import Link from "next/link";

export default function HeroSection() {
  const { loading, Data, error } = UseFetchData({ url: "/movie/popular" });

  return loading ? (
    <Loader />
  ) : (
    <Slider>
      {Data?.map((movie) => (
        <div
          key={movie.id}
          className="h-screen w-full bg-cover bg-center relative flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_imageBaseUrl}${movie.backdrop_path})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute bg-black/50 inset-0 w-full h-full z-10" />

          {/* Movie title + button */}
          <div className="z-20 flex flex-col items-center gap-4 px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-center leading-tight">
              {movie.original_title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-center max-w-3xl">
              {movie.overview.slice(0, 50)}...
            </p>
            <Link href={`/details/${movie.id}`}>
              <span className="bg-red-600 hover:bg-red-700 text-base sm:text-lg cursor-pointer md:text-xl lg:text-2xl font-semibold py-5 sm:py-4 md:py-3 px-6 sm:px-8 md:px-10 rounded-lg transition-all ease-in-out duration-300">
                Watch now
              </span>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
}
