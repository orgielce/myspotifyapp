import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_APP_URL} from "../utilities/constants";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

export const GetNewReleases = createAsyncThunk("releases/GetNewReleases", async () => {
  const {access_token} = useSelector((state: RootState) => state.token);
  return axios(`${BASE_APP_URL}/browse/new-releases`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
});
