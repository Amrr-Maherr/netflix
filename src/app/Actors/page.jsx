// app/search/page.tsx
"use client";

export default function SearchPage() {
  // مثال لممثلين (تقدر تستبدلهم ببيانات من API)
  const actors = [
    { name: "Robert Downey Jr.", image: "/actors/rdj.jpg" },
    { name: "Scarlett Johansson", image: "/actors/scarlett.jpg" },
    { name: "Chris Evans", image: "/actors/evans.jpg" },
    { name: "Zendaya", image: "/actors/zendaya.jpg" },
    { name: "Leonardo DiCaprio", image: "/actors/leo.jpg" },
    { name: "Emma Stone", image: "/actors/emma.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Blur Background Shape */}
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Actors
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl">
          Meet the stars behind your favorite characters.
        </p>
      </div>
    </main>
  );
}
