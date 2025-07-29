import Link from "next/link";
import { motion } from "framer-motion";

export default function Card({ movie, actor, tv }) {
  const id = actor?.id || movie?.id || tv?.id;
  const path = actor
    ? `/actorDetails/${id}`
    : tv
    ? `/seriesDetails/${id}`
    : `/details/${id}`;
  return (
    <Link href={path} className="block">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-black text-white overflow-hidden w-[180px] sm:w-[200px] lg:w-[240px] aspect-[2/3] rounded-sm"
      >
        {movie?.profile_path || movie?.poster_path || tv?.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${
              movie?.profile_path || movie?.poster_path || tv?.poster_path
            }`}
            // alt={movie.name || movie.title || tv.original_name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-800 rounded-md shadow-md p-10 text-center text-white h-full flex items-center justify-center flex-col">
            No Image Available
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 p-3 flex flex-col justify-end opacity-0"
        >
          <h3 className="text-sm font-bold leading-tight">
            {movie?.name || movie?.title || tv?.original_name}
          </h3>
          {movie?.movie_vote_average && (
            <p className="text-xs text-yellow-400 line-clamp-2 mt-1">
              vote({movie?.vote_average || tv?.vote_average})
            </p>
          )}
        </motion.div>
      </motion.div>
    </Link>
  );
}
