import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./WatchlistSlice";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});

export default store;
