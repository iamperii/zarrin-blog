import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPosts } from '../actions/postAction.js';

const initialState = {
	posts: [],
	loading: false, // Changed from `null` to `false` for better state management
	error: null,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllPosts.pending, (state) => {
				state.loading = true; // Set loading to true when request starts
				state.error = null; // Reset error when starting a new request
			})
			.addCase(fetchAllPosts.fulfilled, (state, action) => {
				state.loading = false; // Set loading to false when request is successful
				state.posts = action.payload;
			})
			.addCase(fetchAllPosts.rejected, (state, action) => {
				state.loading = false; // Set loading to false when request fails
				state.error = action.payload;
			});
	},
});

export default postsSlice.reducer;
