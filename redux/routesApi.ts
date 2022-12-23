import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data } from "../interfaces/Data";

export const routesApi = createApi({
  reducerPath: "routesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3/movie/`,
  }),

  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: (key) => ({
        url: `/now_playing?api_key=${key}&language=en-US&page=1`,
        method: "GET",
      }),
    }),

    getPopularMovies: builder.query({
      query: (key) => ({
        url: `/popular?api_key=${key}&language=en-US&page=1`,
        method: "GET",
      }),
    }),

    getTopRatedMovies: builder.query({
      query: (key) => ({
        url: `/top_rated?api_key=${key}&language=en-US&page=1`,
        method: "GET",
      }),
    }),

    getUpcomingMovies: builder.query({
      query: (key) => ({
        url: `/upcoming?api_key=${key}&language=en-US&page=1`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} = routesApi;
