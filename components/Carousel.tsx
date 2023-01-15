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
  const castedQueryInfo = queryInfo as QueryInfo;
  return (
    <div className="">
      <div className="py-3 pl-4 ml-4 text-2xl font-bold text-white uppercase">
        <span className="border-l-[3px] border-l-red-600 pr-3"></span>
        {carouselTitle}
      </div>
      <Swiper slidesPerView={5} navigation modules={[Navigation]}>
        {queryInfo?.data?.results.map((value: Results[]) => (
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
