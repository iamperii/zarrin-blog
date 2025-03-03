import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPosts } from '../actions/postAction.js';

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllPosts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAllPosts.fulfilled, (state, action) => {
				state.loading = false;
				state.posts = action.payload;
			})
			.addCase(fetchAllPosts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default postsSlice.reducer;
