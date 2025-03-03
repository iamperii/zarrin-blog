import { createSlice } from '@reduxjs/toolkit';
import { fetchAbout } from '../actions/aboutAction';

const initialState = {
	about: [],
	loading: false,
	error: null,
};
const aboutSlice = createSlice({
	name: 'about',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAbout.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAbout.fulfilled, (state, action) => {
				state.loading = false;
				state.about = action.payload;
			})
			.addCase(fetchAbout.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default aboutSlice.reducer;
