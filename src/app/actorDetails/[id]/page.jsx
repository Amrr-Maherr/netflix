"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import useFetchDetails from "@/Hooks/useFetchDetails";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const { loading, error, Data } = useFetchDetails({ url: `/person/${id}` });

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-20 bg-black text-white p-6">
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && (
          <p className="text-center text-red-500 text-lg">
            Something went wrong.
          </p>
        )}
        {Data && (
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left: Profile Image */}
            <div className="w-full md:w-1/3">
              {Data.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${Data.profile_path}`}
                  alt={Data.name}
                  className="rounded-lg shadow-lg w-full"
                />
              ) : (
                <div className="bg-gray-800 text-center py-20 rounded-lg">
                  No Image Available
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-2/3 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">{Data.name}</h1>
              <p className="text-gray-300 text-base leading-7">
                {Data.biography || "No biography available."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
                <div>
                  <span className="text-gray-400">Birthday:</span>{" "}
                  {Data.birthday || "Unknown"}
                </div>
                <div>
                  <span className="text-gray-400">Place of Birth:</span>{" "}
                  {Data.place_of_birth || "Unknown"}
                </div>
                <div>
                  <span className="text-gray-400">Known For:</span>{" "}
                  {Data.known_for_department || "Unknown"}
                </div>
                <div>
                  <span className="text-gray-400">Popularity:</span>{" "}
                  {Data.popularity || "N/A"}
                </div>
                <div>
                  <span className="text-gray-400">Gender:</span>{" "}
                  {Data.gender === 1
                    ? "Female"
                    : Data.gender === 2
                    ? "Male"
                    : "Other"}
                </div>
                <div>
                  <span className="text-gray-400">Also Known As:</span>{" "}
                  {Data.also_known_as?.length
                    ? Data.also_known_as.join(", ")
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
