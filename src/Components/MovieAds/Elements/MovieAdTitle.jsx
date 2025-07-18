export default function MovieAdTitle({data}) {
    return (
      <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-center leading-tight">
          {data.original_title}
        </h1>
      </>
    );
}