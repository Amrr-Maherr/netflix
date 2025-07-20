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
      <div className="min-h-screen flex items-center justify-center  bg-black text-white p-6">
        {loading && <Loader/>}
        {error && (
          <p className="text-center text-red-500 text-lg">
            Something went wrong.
          </p>
        )}
        {Data && (
          <ActorDetailsCard actor={Data} />
        )}
      </div>
      <Footer/>
    </>
  );
}
