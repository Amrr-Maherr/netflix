export default function MovieAdDescription({data}) {
    return (
      <>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-center max-w-3xl">
          {data.overview.slice(0, 50)}...
        </p>
      </>
    );
}