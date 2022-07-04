import {createSlice} from "@reduxjs/toolkit";
import {Token} from "../../models/index";
import {GetAccessToken} from "../../services/index";
import {GetNewReleases} from "../../services/release.service";
import {useDispatch} from "react-redux";

const initialState: Token = {
  access_token: "",
  token_type: "",
  expires_in: 0,
  isAuthenticated: false,
  isLoading: false,
  error: false,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
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

// export const {GetToken} = tokenSlice.actions;

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default tokenSlice.reducer;
