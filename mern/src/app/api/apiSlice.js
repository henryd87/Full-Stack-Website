import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//fetchBase query is like axios, used to communicate with backend and uses promises
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3500'}),
    tagTypes:['Note','User'],
    endpoints:builder =>({})
})