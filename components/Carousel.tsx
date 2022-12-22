import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MoviePoster from "./MoviePoster";

export default function Carousel() {
  return (
    <div className="">
      <div className="pl-4 ml-4 text-2xl text-white border-l-[3px] border-l-red-600 font-bold uppercase">
        Carousel Title
      </div>
      <Swiper slidesPerView={6} navigation modules={[Navigation]}>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
        <SwiperSlide>
          <MoviePoster />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
