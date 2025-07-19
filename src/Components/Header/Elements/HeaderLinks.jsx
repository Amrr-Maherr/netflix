import Link from "next/link";
import { Home, Users, Film, Tv, List, CircleX } from "lucide-react";

export default function HeaderLinks({ mobile }) {
  return (
    <div className="flex items-center justify-center w-full">
      <ul
        className={`flex items-center justify-center ${
          mobile ? "flex-col items-start w-full gap-8" : "gap-5"
        }`}
      >
        <li
          className={
            mobile
              ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300 flex items-center gap-2"
              : ""
          }
        >
          <Link href="/" className="flex items-center gap-2">
            {mobile && <Home className="w-5 h-5" />}
            Home
          </Link>
        </li>
        <li
          className={
            mobile
              ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300 flex items-center gap-2"
              : ""
          }
        >
          <Link href="/Actors" className="flex items-center gap-2">
            {mobile && <Users className="w-5 h-5" />}
            Actors
          </Link>
        </li>
        <li
          className={
            mobile
              ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300 flex items-center gap-2"
              : ""
          }
        >
          <Link href="/" className="flex items-center gap-2">
            {mobile && <Film className="w-5 h-5" />}
            Movies
          </Link>
        </li>
        <li
          className={
            mobile
              ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300 flex items-center gap-2"
              : ""
          }
        >
          <Link href="/" className="flex items-center gap-2">
            {mobile && <Tv className="w-5 h-5" />}
            Tv Shows
          </Link>
        </li>
        <li
          className={
            mobile
              ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300 flex items-center gap-2"
              : ""
          }
        >
          <Link href="/" className="flex items-center gap-2">
            {mobile && <List className="w-5 h-5" />}
            My List
          </Link>
        </li>
      </ul>
    </div>
  );
}
