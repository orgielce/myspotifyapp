import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const listApi = createApi({
  reducerPath: "list",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5001/list"}),
  endpoints: (builder) => ({
    getListByName: builder.query<any, string>({
      query: (nombre) => `?nombre=${nombre}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetListByNameQuery} = listApi;
