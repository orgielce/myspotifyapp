import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Buffer} from "buffer";
import {BASE_TOKEN_URL, ClientId, ClientSecret} from "../utilities/constants";

export const GetAccessToken = createAsyncThunk(
  "token/GetAccessToken",
  async () =>
    await axios(`${BASE_TOKEN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + new Buffer(ClientId + ":" + ClientSecret).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
);
