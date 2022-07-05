import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import tokenReducer from "./reducers/tokenSlice";
import releasesReducer from "./reducers/releaseSlice";
import artistsReducer from "./reducers/artistsSlice";
import tracksReducer from "./reducers/tracksSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    releases: releasesReducer,
    artistsFounded: artistsReducer,
    tracksFounded: tracksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
