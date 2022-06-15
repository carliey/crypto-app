import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_NEWS_API_KEY,
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url, headers, body) => ({
  url,
  headers,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
          headers,
          null
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
