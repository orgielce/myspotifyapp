import {createSlice} from "@reduxjs/toolkit";
import {Token} from "../../models/index";
import {GetAccessToken} from "../../services/index";

const initialState: Token = {
  loadDataFrom: "release",
  access_token: "",
  token_type: "",
  expires_in: 0,
  isAuthenticated: false,
  isLoading: false,
  error: false,
  page: 10,
  limit: 14,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setDataType: (state, action) => {
      state.loadDataFrom = action.payload.loadDataFrom;
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAccessToken.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(GetAccessToken.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(GetAccessToken.fulfilled, (state, action) => {
        // @ts-ignore
        state.access_token = action.payload.data.access_token;
        localStorage.setItem("accessToken", action.payload.data.access_token);
        // @ts-ignore
        state.token_type = action.payload.data.token_type;
        // @ts-ignore
        state.expires_in = action.payload.data.expires_in;
        // @ts-ignore
        state.isAuthenticated = true;
        // @ts-ignore
        state.isLoading = false;
        // @ts-ignore
        state.error = false;
      });
  },
});

export const {setDataType, setCurrentPage} = tokenSlice.actions;

export default tokenSlice.reducer;
