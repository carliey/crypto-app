import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "a95a6dd10amsh040fd137b24aa6cp1055ecjsn290edf210c18",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const createRequest = (url, headers, body) => ({
  url,
  headers,
});

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins", headers, null),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery } = cryptoApi;
