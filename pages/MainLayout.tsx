import React, { useEffect, useState } from "react";
import NowPlayingCarousel from "../components/carousels/NowPlaying";
import PopularCarousel from "../components/carousels/Popular";
import TopRatedCarousel from "../components/carousels/TopRated";
import UpcomingCarousel from "../components/carousels/Upcoming";

export default function MainLayout() {
  return (
    <div className=" bg-neutral-900">
      <NowPlayingCarousel />
      <PopularCarousel />
      <TopRatedCarousel />
      <UpcomingCarousel />
    </div>
  );
}
