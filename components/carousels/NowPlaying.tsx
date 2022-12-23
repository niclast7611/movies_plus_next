import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MoviePoster from "../MoviePoster";
import { useGetNowPlayingMoviesQuery } from "../../redux/routesApi";

export default function NowPlaying() {
  const api_token = process.env.MOVIES_API_KEY;
  const { data, isLoading } = useGetNowPlayingMoviesQuery(api_token);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="">
      <div className="pl-4 ml-4 text-2xl text-white border-l-[3px] border-l-red-600 font-bold uppercase">
        Now Playing
      </div>
      <Swiper slidesPerView={6} navigation modules={[Navigation]}>
        {data.results.map((value) => (
          <SwiperSlide key={value.id}>
            <MoviePoster movieValue={value} />
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
}
