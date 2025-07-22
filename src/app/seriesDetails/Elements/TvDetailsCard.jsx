export default function TvDetailsCard({ tv }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 p-6 my-5 rounded-lg shadow-lg">
      {/* Left: Poster Image */}
      <div className="w-full md:w-1/3">
        {tv.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
            alt={tv.name}
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
        <h1 className="text-3xl md:text-4xl font-bold">{tv.name}</h1>
        <p className="text-gray-300 text-base leading-7">
          {tv.overview || "لا توجد نظرة عامة متاحة."}
        </p>
        {tv.tagline && (
          <p className="text-gray-400 italic">
            <span className="text-gray-300">الشعار:</span> {tv.tagline}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <span className="text-gray-400">تاريخ العرض الأول:</span>{" "}
            {tv.first_air_date || "غير معروف"}
          </div>
          <div>
            <span className="text-gray-400">تاريخ آخر عرض:</span>{" "}
            {tv.last_air_date || "غير معروف"}
          </div>
          <div>
            <span className="text-gray-400">التصنيف:</span>{" "}
            {tv.genres?.length
              ? tv.genres.map((genre) => genre.name).join(", ")
              : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">التقييم:</span>{" "}
            {tv.vote_average ? tv.vote_average.toFixed(1) : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">الشعبية:</span>{" "}
            {tv.popularity ? tv.popularity.toFixed(2) : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">الشبكة:</span>{" "}
            {tv.networks?.length
              ? tv.networks.map((network) => network.name).join(", ")
              : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">عدد المواسم:</span>{" "}
            {tv.number_of_seasons || "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">عدد الحلقات:</span>{" "}
            {tv.number_of_episodes || "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">المبدعون:</span>{" "}
            {tv.created_by?.length
              ? tv.created_by.map((creator) => creator.name).join(", ")
              : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">شركات الإنتاج:</span>{" "}
            {tv.production_companies
              ? tv.production_companies
                  .map((company) => company.name)
                  .join(", ")
              : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">دول الإنتاج:</span>{" "}
            {tv.production_countries
              ? tv.production_countries
                  .map((country) => country.name)
                  .join(", ")
              : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">اللغات:</span>{" "}
            {tv.languages?.length ? tv.languages.join(", ") : "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">الحالة:</span>{" "}
            {tv.status || "غير متاح"}
          </div>
          <div>
            <span className="text-gray-400">الموقع الرسمي:</span>{" "}
            {tv.homepage ? (
              <a
                href={tv.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                زيارة الموقع
              </a>
            ) : (
              "غير متاح"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
