import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
  checked: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavMovie: (state, action) => {
      state.favoriteMovies.push(action.payload);
      state.checked = true;
    },
    removeFavMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter((movie) => {
        movie.id !== action.payload;
      });
      state.checked = false;
    },
  },
});

export const { addFavMovie, removeFavMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
