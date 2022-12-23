import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MoviePoster from "./MoviePoster";
import { QueryInfo } from "../interfaces/QueryInfo";
import { Results } from "../interfaces/Results";

type Props = {
  queryInfo: QueryInfo;
  carouselTitle: string;
};

const Carousel: React.FC<Props> = ({ queryInfo, carouselTitle }) => {
  if (queryInfo.isLoading) return <div>Loading...</div>;

  return (
    <div className="">
      <div className="pl-4 ml-4 text-2xl text-white border-l-[3px] border-l-red-600 font-bold uppercase">
        {carouselTitle}
      </div>
      <Swiper slidesPerView={6} navigation modules={[Navigation]}>
        {queryInfo.data.results.map((value: Results) => (
          <SwiperSlide key={value.id}>
            <MoviePoster movieValue={value} />
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
};

export default Carousel;
