import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Headers = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
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