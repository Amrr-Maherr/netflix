"use client";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function ActorDetailsCard({ actor }) {
  console.log(actor);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 p-6 my-5 rounded-lg">
      {/* Left: Profile Image */}
      <div className="w-full md:w-1/3">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="rounded-lg shadow-lg w-full"
          />
        ) : (
          <div className="bg-gray-800 rounded-md shadow-md p-10 text-center text-white h-full flex items-center justify-center flex-col">
            No Image Available
          </div>
        )}
      </div>

      {/* Right: Details */}
      <div className="w-full md:w-2/3 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{actor.name}</h1>
        <p className="text-gray-300 text-base leading-7">
          {actor.biography || "No biography available."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <span className="text-gray-400">Birthday:</span>{" "}
            {actor.birthday || "Unknown"}
          </div>
          <div>
            <span className="text-gray-400">Place of Birth:</span>{" "}
            {actor.place_of_birth || "Unknown"}
          </div>
          <div>
            <span className="text-gray-400">Known For:</span>{" "}
            {actor.known_for_department || "Unknown"}
          </div>
          <div>
            <span className="text-gray-400">Popularity:</span>{" "}
            {actor.popularity || "Not available"}
          </div>
          <div>
            <span className="text-gray-400">Gender:</span>{" "}
            {actor.gender === 1
              ? "Female"
              : actor.gender === 2
              ? "Male"
              : "Other"}
          </div>
          <div>
            <span className="text-gray-400">Also Known As:</span>{" "}
            {actor.also_known_as?.length
              ? actor.also_known_as.join(", ")
              : "Not available"}
          </div>
        </div>
      </div>
    </div>
  );
}
