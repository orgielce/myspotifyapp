import {createSlice} from "@reduxjs/toolkit";
import {RootState, store} from "../store";

const initialState = null;

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

// export const selectList = (state: RootState) => state.list;

export default listSlice.reducer;
