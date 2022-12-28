import React from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";

function MoviePage({ movieInfo }) {
  const releaseYear = movieInfo.release_date.slice(0, 4);

  return (
    <div className="flex flex-row text-white justify-evenly bg-neutral-900">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`}
          alt="movie"
          width="300"
          height="auto"
        />
      </div>
      <div className="w-5/12">
        <div className="flex flex-row">
          <div className="pr-3 text-4xl uppercase">{movieInfo.title}</div>
          <div className="my-auto text-2xl">
            {/* <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            ></IconButton> */}
            {/* <AiOutlineHeart style={{ color: "red" }} /> */}
            <AiFillHeart style={{ color: "red" }} />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Rating
              name="read-only"
              value={Math.round(movieInfo.vote_average)}
              readOnly
              max={10}
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
          <div className="text-lg tracking-wider text-yellow-400 uppercase ">
            {movieInfo.original_language}/{movieInfo.runtime}min/
            {releaseYear}
          </div>
        </div>
        {/* <div>{movieInfo.budget}</div> */}
        <div>
          <span className="font-bold uppercase ">The Genres</span>
          <div className="space-x-5 text-sm text-red-600 uppercase">
            {movieInfo.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-bold uppercase">Overview</span>
          <div className="">{movieInfo.overview}</div>
        </div>
        <div>
          <span>Product Companies</span>
          <div>
            {movieInfo.production_companies.map((pc) => (
              <div key={pc.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${pc.logo_path}`}
                  alt="movie"
                  width="100"
                  height="auto"
                />
                <span>{pc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
