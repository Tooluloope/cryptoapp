import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Headers = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd5dec066b9mshab9bd7a1b3e6c81p1417d0jsn93ef4ec55114'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url: string) => ({url, headers: Headers})
export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi