import { Button } from "../ui/button";
import MovieAdDescription from "./Elements/MovieAdDescription";
import MovieAdTitle from "./Elements/MovieAdTitle";

export default function MovieAds({ data }) {
  return (
    <>
      <section
        className="min-h-screen relative w-full flex items-center justify-center  bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_imageBaseUrl}${data.backdrop_path}`,
        }}
      >
        <div className="flex absolute inset-0 items-center justify-center flex-col text-white bg-black/50 w-full h-full">
          <MovieAdTitle data={data}/>
          <MovieAdDescription data={data} />
          <button className="bg-red-600 hover:bg-red-700 text-base sm:text-lg cursor-pointer md:text-xl lg:text-2xl font-semibold py-5 sm:py-4 md:py-3 px-6 sm:px-8 md:px-10 rounded-lg transition-all ease-in-out duration-300">
            Watch now
          </button>
        </div>
      </section>
    </>
  );
}