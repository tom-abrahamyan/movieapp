import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperClass from "swiper";
import { useNavigate } from "react-router";

SwiperClass.use([
  SwiperClass.Autoplay,
  SwiperClass.Navigation,
  SwiperClass.Pagination,
]);

export default function Carousel({ data }) {
  const navigate = useNavigate();
  const goToDetails = (id) => {
    navigate(`/moviedetails/movie/${id}`);
  };

  return (
    <div className="w-[88%] h-[550px] mx-auto ">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[100%] rounded-lg overflow-hidden">
        {data.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              className="w-full h-full object-cover"
              alt={movie.title}
            />

            {/* Overlay box */}
            <div className="absolute left-4 sm:left-10 md:left-20 bottom-10 sm:bottom-12 md:bottom-16 lg:bottom-20 max-w-[90%] sm:max-w-[70%] md:max-w-[50%] bg-blue-950/60 rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col gap-2">
              <h1 className="text-xs sm:text-base md:text-2xl lg:text-3xl font-semibold text-white">
                {movie.title}
              </h1>
              <p className="font-light text-[10px] sm:text-sm md:text-base lg:text-lg text-gray-200 line-clamp-3">
                {movie.overview}
              </p>
              <button
                onClick={()=> goToDetails(movie.id)}
                className="mt-2 sm:mt-3 text-blue-400 hover:text-blue-300 cursor-pointer text-[10px] sm:text-sm md:text-lg transition">
                See More →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
