import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import postsReducer from "./reducers/postSlice";
import listReducer from "./reducers/listSlice";
import {listApi} from "../services/list";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    list: listApi.reducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
