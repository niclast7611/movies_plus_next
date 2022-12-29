import React, { use, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import { formatter } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addFavMovie, removeFavMovie } from "../redux/features/FavoritesSlice";
import { Checkbox } from "@mui/material";
function MoviePage({ movieInfo }) {
  const releaseYear = movieInfo.release_date.slice(0, 4);

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const listOfFavoriteMovies = useSelector((state) => state.favMovies);
  console.log("listOfFavoriteMovies", listOfFavoriteMovies);

  console.log();
  // useEffect(() => {
  //   listOfFavoriteMovies.map((movie) => {
  //     movie.id === movieInfo.id ? setChecked(true) : setChecked(false);
  //   });
  // }, [listOfFavoriteMovies]);

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
              value={Math.round(movieInfo.vote_average)}
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
              {Math.round(movieInfo.vote_average)}
            </div>
          </div>
        </div>
        <div>
          <span className="font-bold uppercase ">The Genres</span>
          <div className="pt-2 space-x-5 text-sm text-red-600 uppercase">
            {movieInfo.genres.map((genre) => (
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
            {formatter.format(movieInfo.budget)}
          </span>
        </div>
        {/* <button type="button" onClick={() => dispatch(addFavMovie(movieInfo))}>
          Click Me
        </button> */}
        <div>
          {listOfFavoriteMovies.checked ? (
            <AiFillHeart
              style={{ color: "red", fontSize: "40", cursor: "pointer" }}
              onClick={() => dispatch(removeFavMovie(movieInfo.id))}
            />
          ) : (
            <AiOutlineHeart
              style={{ color: "red", fontSize: "40", cursor: "pointer" }}
              onClick={() => dispatch(addFavMovie(movieInfo))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
