import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../index.js';

export const fetchAllPosts = createAsyncThunk(
	'post/fetchAllPosts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${BASE_URL}/posts`);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
