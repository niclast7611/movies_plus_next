import React from "react";
import Image from "next/image";

export default function MoviePoster() {
  return (
    <div className="relative transition duration-500 transform hover:scale-105 w-[225px] hover:cursor-pointer">
      <div className="z-0">
        <Image
          src="https://image.tmdb.org/t/p/original/94xxm5701CzOdJdUEdIuwqZaowx.jpg"
          height={225}
          width={225}
          alt="movie"
        />
      </div>
      <div className="absolute bottom-0 z-10 bg-black/[.6] h-1/3 w-[225px] flex flex-col items-start justify-evenly pl-2">
        <div className="text-lg font-bold text-white">
          Avatar: The Way of Water
        </div>
        <div className="z-10 flex items-end justify-between w-4/6 text-xs text-white">
          <span>9.5</span>
          <span>120 mins</span>
          <span>HD</span>
          <span>16+</span>
        </div>
      </div>
    </div>
  );
}
