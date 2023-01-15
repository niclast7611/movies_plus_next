import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavMovie: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter((movie) => {
        movie.id !== action.payload;
      });
    },
  },
});

export const { addFavMovie, removeFavMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
