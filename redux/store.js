import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { routesApi } from "./routesApi";
import favoritesReducer from "./features/FavoritesSlice";

export const store = configureStore({
  reducer: {
    [routesApi.reducerPath]: routesApi.reducer,
    favMovies: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesApi.middleware),
});

setupListeners(store.dispatch);
