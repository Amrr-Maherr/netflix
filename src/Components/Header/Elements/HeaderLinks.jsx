import Link from "next/link";
export default function HeaderLinks({ mobile }) {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <ul
          className={`flex items-center justify-center ${
            mobile ? "flex-col items-start w-full gap-8" : "gap-5"
          }`}
        >
          <li
            className={
              mobile
                ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300"
                : ""
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              mobile
                ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300"
                : ""
            }
          >
            <Link href="/">Actors</Link>
          </li>
          <li
            className={
              mobile
                ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300"
                : ""
            }
          >
            <Link href="/">Movies</Link>
          </li>
          <li
            className={
              mobile
                ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300"
                : ""
            }
          >
            <Link href="/">Tv Shows</Link>
          </li>
          <li
            className={
              mobile
                ? "hover:bg-red-500 w-full p-2 rounded-md cursor-pointer transition-colors duration-300"
                : ""
            }
          >
            <Link href="/">My List</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
