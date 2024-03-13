import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [],
	isLoading: true,
	isError: false,
	errorMessage: '',
}

export const fetchUsers = createAsyncThunk(
	'users/fethUsers',
	async (filter: string, { rejectWithValue }) => {
		try {
			if (filter) {
				const response = await fetch(`http://localhost:3000?term=${filter}`)
				const users = await response.json()
				return users
			}

			const response = await fetch('http://localhost:3000/')
			const users = await response.json()
			return users
		} catch (error) {
			rejectWithValue(error)
		}
	}
)

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users = action.payload
			state.isLoading = false
		})
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isError = true
			if (action?.error.message) {
				state.errorMessage = action.error.message
			}
			state.isLoading = false
		})
	},
})

export default userSlice.reducer
