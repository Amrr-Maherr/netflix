import Card from "../Card/Card";
import Slider from "../Slider/Slider";

export default function Section({Data,sectionTitle}) {
    return (
      <>
        <section className="bg-black">
          <div className="py-5 text-white flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-center leading-tight">
              {sectionTitle}
            </h1>
          </div>
          <section className="bg-black py-10">
            <div className="grid gap-x-8 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {Data.map((movie) => (
                <Card movie={movie} key={movie.id} />
              ))}
            </div>
          </section>
        </section>
      </>
    );
}