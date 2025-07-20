"use client";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function ActorDetailsCard({ actor }) {
  console.log(actor);
  
  return (
    <div className="flex flex-col  md:flex-row md:items-center md:justify-center gap-8 p-6 my-5 rounded-lg shadow-lg">
      {/* Left: Profile Image */}
      <div className="w-full md:w-1/3">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="rounded-lg shadow-lg w-full"
          />
        ) : (
          <div className="bg-gray-800 text-center py-20 rounded-lg">
            لا توجد صورة متاحة
          </div>
        )}
      </div>

      {/* Right: Details */}
      <div className="w-full md:w-2/3 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{actor.name}</h1>
        <p className="text-gray-300 text-base leading-7">
          {actor.biography || "لا توجد سيرة ذاتية متاحة."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <span className="text-gray-400">تاريخ الميلاد:</span>{" "}
            {actor.birthday || "غير معروف"}
          </div>
          <div>
            <span className="text-gray-400">مكان الميلاد:</span>{" "}
            {actor.place_of_birth || "غير معروف"}
          </div>
          <div>
            <span className="text-gray-400">معروف بـ:</span>{" "}
            {actor.known_for_department || "غير معروف"}
          </div>
          <div>
            <span className="text-gray-400">الشعبية:</span>{" "}
            {actor.popularity || "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">الجنس:</span>{" "}
            {actor.gender === 1 ? "أنثى" : actor.gender === 2 ? "ذكر" : "آخر"}
          </div>
          <div>
            <span className="text-gray-400">معروف أيضًا بـ:</span>{" "}
            {actor.also_known_as?.length
              ? actor.also_known_as.join(", ")
              : "غير متاح"}
          </div>
        </div>
      </div>
    </div>
  );
}