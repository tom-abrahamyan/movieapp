import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "9c5c24a6eaa27bb9dacf6df4cd1e34a1";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  tagTypes: ["Movies", "ById", "Videos"],
  endpoints: (builder) => ({
    get: builder.query({
      query: ({ type, page = 1 }) =>
        `${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
      providesTags: ["Movies"],
    }),

    getById: builder.query({
      query: ({ type, id }) => `${type}/${id}?api_key=${API_KEY}`,
      providesTags: ["ById", "Videos"],
    }),
    getSimilarById: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    }),
    getCreditsById: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/credits?api_key=${API_KEY}&language=en-US`,
    }),
    getVideosById: builder.query({
      query: ({ type, id }) =>
        `${type}/${id}/videos?api_key=${API_KEY}&language=en-US`,
      providesTags: ["Videos"],
    }),
    getByGenre: builder.query({
      query: ({ type = "movie", genreId, page=1 }) =>
        `discover/${type}?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`,
    }),
    search: builder.query({
      query: ({type="movie", movieTitle}) => `search/${type}?api_key=${API_KEY}&query=${movieTitle}`
    })
  }),
});

export const {
  useGetQuery,
  useGetByIdQuery,
  useGetSimilarByIdQuery,
  useGetCreditsByIdQuery,
  useGetVideosByIdQuery,
  useGetByGenreQuery,
  useSearchQuery
} = moviesApi;

// https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=Breaking%20Bad
