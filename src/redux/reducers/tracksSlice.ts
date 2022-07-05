import {createSlice} from "@reduxjs/toolkit";
import {SearchTracks} from "../../models";

const initialState: SearchTracks = {
  tracks: undefined,
  filter: undefined,
  isLoading: false,
  error: false,
};

export const tracksSlice = createSlice({
  name: "tracksFounded",
  initialState,
  reducers: {
    setTracksSuccess: (state, action) => {
      state.tracks = action.payload.tracks;
      state.isLoading = false;
      state.error = false;
    },
    setTracksFiled: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    setTracksBegin: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    setTracksFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {setTracksBegin, setTracksSuccess, setTracksFiled, setTracksFilter} =
  tracksSlice.actions;

export default tracksSlice.reducer;
