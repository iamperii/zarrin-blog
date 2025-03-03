import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../store/reducers/postReducer';
import aboutReducer from '../store/reducers/aboutReducer';

const store = configureStore({
	reducer: {
		posts: postReducer,
		about: aboutReducer,
	},
});

export default store;
