import type { FC } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Results } from "../interfaces/Results";
import Link from "next/link";

type Props = {
  movieValue: MovieValueData;
};
interface MovieValueData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MoviePoster: FC<React.PropsWithChildren<Props>> = ({ movieValue }) => {
  return (
    <Link href={`/movies/${movieValue.id}`}>
      <div className="relative transition duration-500 transform hover:scale-105 w-[225px] hover:cursor-pointer">
        <div className="z-0">
          {/* Got a weird warning about width and height using Image tag. For now substituting it with <img> */}
          <img
            src={`https://image.tmdb.org/t/p/original${movieValue?.poster_path}`}
            alt="movie"
            width="225"
            height="auto"
          />
        </div>
        <div className="absolute bottom-0 z-10 bg-black/[.65] h-1/3 w-[225px] flex flex-col items-start justify-evenly pl-2">
          <div className="text-lg font-bold text-white">
            {movieValue?.original_title}
          </div>
          <div className="z-10 flex items-end justify-between w-9/12 text-base leading-4 text-white">
            <span className="flex flex-row leading-4">
              <span className="text-red-600 ">
                <AiFillStar />
              </span>
              {movieValue?.vote_average}
            </span>
            <span>HD</span>
            <span>{movieValue?.adult ? "18+" : "16+"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoviePoster;
