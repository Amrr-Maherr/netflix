import Link from "next/link";
export default function HeaderLinks() {
  return (
    <>
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center gap-2.5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Actors</Link>
          </li>
          <li>
            <Link href="/">Movies</Link>
          </li>
          <li>
            <Link href="/">Tv Shows</Link>
          </li>
          <li>
            <Link href="/">My List</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
