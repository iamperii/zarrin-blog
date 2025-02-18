import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../store/reducers/postReducer';
const store = configureStore({
	reducer: {
		posts: postReducer,
	},
});

export default store;
