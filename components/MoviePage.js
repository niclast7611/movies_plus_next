import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
function MoviePage({ movieInfo }) {
  console.log(movieInfo);
  return (
    <div className="flex flex-row justify-evenly">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`}
          alt="movie"
          width="300"
          height="auto"
        />
      </div>
      <div>
        <AiOutlineHeart />
        <AiFillHeart />
        <div>{movieInfo.title}</div>
        <div>
          <div>{movieInfo.vote_average}</div>
          <div>{movieInfo.budget}</div>
          <div>
            {movieInfo.original_language}/{movieInfo.runtime}min/
            {movieInfo.release_date}
          </div>
          <div>
            <span>The Genres</span>
            <div>
              {movieInfo.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
          <div>
            <span>Overview</span>
            <div>{movieInfo.overview}</div>
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
    </div>
  );
}

export default MoviePage;
