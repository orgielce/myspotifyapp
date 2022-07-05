import {createSlice} from "@reduxjs/toolkit";
import {Releases} from "../../models/index";
import {GetNewReleases} from "../../services/release.service";

const initialState: Releases = {
  albums: undefined,
  isLoading: false,
  error: false,
};

export const releaseSlice = createSlice({
  name: "releases",
  initialState,
  reducers: {
    setAlbumsSuccess: (state, action) => {
      state.albums = action.payload.albums;
      state.isLoading = false;
      state.error = false;
    },
    setAlbumsFiled: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    setAlbumsBegin: (state) => {
      state.isLoading = true;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetNewReleases.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(GetNewReleases.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(GetNewReleases.fulfilled, (state, action) => {
        // @ts-ignore
        state.albums = action.payload.data.albums;
        // @ts-ignore
        state.isLoading = false;
        // @ts-ignore
        state.error = false;
      });
  },
});

export const {setAlbumsFiled, setAlbumsSuccess, setAlbumsBegin} = releaseSlice.actions;

export default releaseSlice.reducer;
