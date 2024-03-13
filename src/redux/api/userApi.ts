import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: (build) => ({
		getUsers: build.query({
			query: (filter: string = '') => (filter ? `term=${filter}` : ''),
		}),
	}),
})

export const { useGetUsersQuery } = userApi
