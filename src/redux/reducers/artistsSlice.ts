import {createSlice} from "@reduxjs/toolkit";
import {SearchArtists} from "../../models/index";

const initialState: SearchArtists = {
  artists: undefined,
  page: 10,
  limit: 14,
  filter: undefined,
  isLoading: false,
  error: false,
};

export const artistsSlice = createSlice({
  name: "artistsFounded",
  initialState,
  reducers: {
    setArtistsSuccess: (state, action) => {
      state.artists = action.payload.artists;
      state.isLoading = false;
      state.error = false;
    },
    setArtistsFiled: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    setArtistsBegin: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setArtistsBegin,
  setArtistsSuccess,
  setArtistsFiled,
  setCurrentPage,
  setFilter,
} = artistsSlice.actions;

export default artistsSlice.reducer;
