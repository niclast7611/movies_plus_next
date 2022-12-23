import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../redux/routesApi";

export default function MainLayout() {
  const api_token = process.env.MOVIES_API_KEY;
  const nowPlaying = useGetNowPlayingMoviesQuery(api_token);
  const popular = useGetPopularMoviesQuery(api_token);
  const topRated = useGetTopRatedMoviesQuery(api_token);
  const upcoming = useGetUpcomingMoviesQuery(api_token);

  return (
    <div className=" bg-neutral-900">
      <Carousel queryInfo={nowPlaying} carouselTitle={"Now Playing"} />
      <Carousel queryInfo={popular} carouselTitle={"Popular Movies"} />
      <Carousel queryInfo={topRated} carouselTitle={"Top Rated Movies"} />
      {/* <Carousel queryInfo={upcoming} carouselTitle={'Upcoming Movies'}/> */}
    </div>
  );
}
