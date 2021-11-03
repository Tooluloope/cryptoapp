import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd5dec066b9mshab9bd7a1b3e6c81p1417d0jsn93ef4ec55114'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url: string) => ({url, headers: Headers})
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
          getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
    })
})
export const {
    useGetCryptoQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery
} = cryptoApi