import AddToList from "@/app/AddToList/AddToList";
import Header from "@/Components/Header/Header";
import Loader from "@/Components/Loader/Loader";
import useMovieStorage from "@/Hooks/useMovieStorage";

const imageBaseUrl = process.env.NEXT_PUBLIC_API_imageBaseUrl;

export default function DetailsCard({ data }) {
  if (!data) return <Loader />;
  const { addMovieToLocalStorage } = useMovieStorage();

  const handleAdd = () => {
    addMovieToLocalStorage(data);
  };


  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 text-white px-6 py-10">
        {/* Image + Tagline */}
        <div>
          {data.backdrop_path ? (
            <img
              src={`${imageBaseUrl}${data.backdrop_path}`}
              alt={data.title}
              className="rounded-md shadow-md w-full h-auto"
            />
          ) : (
            <div className="bg-gray-800 rounded-md shadow-md p-10 text-center text-white">
              No Image Available
            </div>
          )}
          <p className="mt-5 italic text-gray-400">{data.tagline}</p>
        </div>

        {/* Text Data */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{data.title}</h2>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">
              {data.vote_average.toFixed(1)}
            </span>
            <span className="text-gray-400">({data.vote_count} votes)</span>
          </div>

          <p className="text-lg">{data.overview}</p>

          <div>
            <h3 className="font-semibold">Genres:</h3>
            <ul className="flex flex-wrap gap-2 mt-1">
              {data.genres?.map((genre) => (
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
              <strong>Release Date:</strong> {data.release_date}
            </p>
            <p>
              <strong>Runtime:</strong> {data.runtime} minutes
            </p>
            <p>
              <strong>Status:</strong> {data.status}
            </p>
            <p>
              <strong>Original Language:</strong>{" "}
              {data.original_language.toUpperCase()}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Production Countries:</h3>
            <ul className="flex flex-wrap gap-2 mt-1">
              {data.production_countries.map((country, index) => (
                <li
                  key={index}
                  className="bg-gray-700 rounded-full px-3 py-1 text-sm"
                >
                  {country.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Production Companies:</h3>
            <ul className="list-disc list-inside text-sm mt-1 space-y-1">
              {data.production_companies.map((company, index) => (
                <li key={index}>
                  {company.name}
                  {company.origin_country && ` (${company.origin_country})`}
                  {company.logo_path && (
                    <img
                      src={`${imageBaseUrl}${company.logo_path}`}
                      alt={`${company.name} logo`}
                      className="inline-block h-6 ml-2"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <p>
              <strong>Budget:</strong> ${data.budget.toLocaleString()}
            </p>
            <p>
              <strong>Revenue:</strong> ${data.revenue.toLocaleString()}
            </p>
          </div>

          <div className="flex space-x-4 pt-4">
            {data.video && (
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Play
              </button>
            )}
            <AddToList onclick={()=>{handleAdd(data);}} buttonText="Add to List" />
          </div>
        </div>
      </div>
    </>
  );
}
