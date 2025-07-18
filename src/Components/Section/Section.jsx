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
          <Slider
            slidesPerView={5}
            slidesPerViewMobile={1}
            spaceBetween={10}
          >
            {Data.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </Slider>
        </section>
      </>
    );
}