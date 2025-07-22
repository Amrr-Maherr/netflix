"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import useFetchDetails from "@/Hooks/useFetchDetails";
import { useParams } from "next/navigation";
import ActorDetailsCard from "../elements/ActorDetailsCard";
import Loader from "@/Components/Loader/Loader";

export default function Page() {
  const { id } = useParams();
  const { loading, error, Data } = useFetchDetails({ url: `/person/${id}` });

  return (
    <>
      <Header />
      <div
        className="relative isolate py-20 text-white font-sans bg-black"
        style={{ letterSpacing: "0.02em" }}
      >
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        {loading && <Loader />}
        {error && (
          <p className="text-center text-red-500 text-lg">
            Something went wrong.
          </p>
        )}
        {Data && <ActorDetailsCard actor={Data} />}
      </div>
      <Footer />
    </>
  );
}
