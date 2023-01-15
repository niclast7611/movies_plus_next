import { FC, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import { formatter } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addFavMovie, removeFavMovie } from "../redux/features/FavoritesSlice";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  movieInfo: MovieInfoData;
};

export interface MovieInfoData {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsToCollectionData;
  budget?: number;
  genres?: Genres[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductCompanyData[];
  production_countries?: ProductionCountriesData[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguagesData[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface BelongsToCollectionData {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genres {
  id: number;
  name: string;
}

interface ProductCompanyData {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountriesData {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguagesData {
  english_name: string;
  iso_639_1: string;
  name: string;
}
const MoviePage: FC<React.PropsWithChildren<Props>> = ({ movieInfo }) => {
  const releaseYear = movieInfo?.release_date?.slice(0, 4);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const listOfFavoriteMovies: MovieInfoData[] = useSelector(
    (state) => state.favMovies.favoriteMovies
  );

  useEffect(() => {
    listOfFavoriteMovies
      ? listOfFavoriteMovies.map((movie) => {
          movie.id === movieInfo.id ? setChecked(true) : null;
        })
      : null;
  }, [listOfFavoriteMovies]);

  const handleUnAddFavMovie = () => {
    setChecked(false);
    dispatch(removeFavMovie(movieInfo.id));
  };
  return (
    <div className="flex flex-row justify-around py-10 text-white bg-neutral-900">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`}
          alt="movie"
          width="375"
          height="auto"
        />
      </div>
      <div className="flex flex-col w-6/12 space-y-6">
        <div className="flex flex-row justify-between">
          <div className="pb-2 pr-3 text-5xl uppercase">{movieInfo.title}</div>

          <div className="my-auto text-xl tracking-widest text-yellow-400 uppercase">
            {movieInfo.original_language}/{movieInfo.runtime}min/
            {releaseYear}
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Rating
              name="read-only"
              value={Math.round(movieInfo.vote_average ?? 0)}
              readOnly
              max={10}
              size="large"
              emptyIcon={
                <AiFillStar
                  style={{ color: "white", opacity: 0.55 }}
                  fontSize="inherit"
                />
              }
            />
            <div className="pl-2 text-xl leading-2">
              {Math.round(movieInfo.vote_average ?? 0)}
            </div>
          </div>
        </div>
        <div>
          <span className="font-bold uppercase ">The Genres</span>
          <div className="pt-2 space-x-5 text-sm text-red-600 uppercase">
            {movieInfo?.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-bold uppercase ">Overview</span>
          <div className="pt-2 leading-7 text-neutral-400">
            {movieInfo.overview}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pb-2 font-bold uppercase">tagline</div>
          <span className="text-neutral-400">
            &quot; {movieInfo.tagline} &quot;
          </span>
        </div>
        <div className="flex flex-col">
          <div className="pb-2 font-bold uppercase">budget</div>
          <span className="text-neutral-400">
            {formatter.format(movieInfo.budget ?? 0)}
          </span>
        </div>
        <div>
          {checked ? (
            <BsHeartFill
              style={{ color: "red", fontSize: "30", cursor: "pointer" }}
              onClick={() => handleUnAddFavMovie()}
            />
          ) : (
            <Tooltip title="Add Movie to Favorites">
              <BsHeart
                style={{ color: "red", fontSize: "30", cursor: "pointer" }}
                onClick={() => dispatch(addFavMovie(movieInfo))}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
