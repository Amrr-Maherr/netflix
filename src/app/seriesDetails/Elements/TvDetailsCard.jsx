"use client";
import AddToList from "@/app/AddToList/AddToList";
import Loader from "@/Components/Loader/Loader";

const imageBaseUrl = process.env.NEXT_PUBLIC_API_imageBaseUrl;

export default function TvDetailsCard({ tv }) {
  if (!tv) return <Loader />;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 text-white px-6 py-10">
      {/* Left: Backdrop Image + Tagline */}
      <div>
        {tv.backdrop_path ? (
          <img
            src={`${imageBaseUrl}${tv.backdrop_path}`}
            alt={tv.name}
            className="rounded-md shadow-md w-full h-auto"
          />
        ) : (
          <div className="bg-gray-800 rounded-md shadow-md p-10 text-center text-white">
            No Image Available
          </div>
        )}
        {tv.tagline && (
          <p className="mt-5 italic text-gray-400">{tv.tagline}</p>
        )}
      </div>

      {/* Right: TV Show Details */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">{tv.name}</h2>

        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">
            {tv.vote_average ? tv.vote_average.toFixed(1) : "N/A"}
          </span>
          <span className="text-gray-400">({tv.vote_count ?? 0} votes)</span>
        </div>

        <p className="text-lg">{tv.overview || "No overview available."}</p>

        <div>
          <h3 className="font-semibold">Genres:</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            {tv.genres?.map((genre) => (
              <li
                key={genre.id}
                className="bg-gray-800 rounded-full px-3 py-1 text-sm"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-1">
          <p>
            <strong>First Air Date:</strong> {tv.first_air_date || "Unknown"}
          </p>
          <p>
            <strong>Last Air Date:</strong> {tv.last_air_date || "Unknown"}
          </p>
          <p>
            <strong>Status:</strong> {tv.status || "Unknown"}
          </p>
          <p>
            <strong>Original Language:</strong>{" "}
            {tv.original_language?.toUpperCase() || "N/A"}
          </p>
          <p>
            <strong>Seasons:</strong> {tv.number_of_seasons || "N/A"}
          </p>
          <p>
            <strong>Episodes:</strong> {tv.number_of_episodes || "N/A"}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Creators:</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            {tv.created_by?.length ? (
              tv.created_by.map((creator, index) => (
                <li
                  key={index}
                  className="bg-gray-700 rounded-full px-3 py-1 text-sm"
                >
                  {creator.name}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-400">N/A</p>
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Production Companies:</h3>
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            {tv.production_companies?.map((company, index) => (
              <li key={index}>
                {company.name}
                {company.origin_country && ` (${company.origin_country})`}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Production Countries:</h3>
          <ul className="flex flex-wrap gap-2 mt-1">
            {tv.production_countries?.map((country, index) => (
              <li
                key={index}
                className="bg-gray-700 rounded-full px-3 py-1 text-sm"
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 pt-4">
          {tv.homepage && (
            <a
              href={tv.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Visit Website
            </a>
          )}
          <AddToList buttonText="Add to List" />
        </div>
      </div>
    </div>
  );
}
