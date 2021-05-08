import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// controllers
import * as themeAPI from 'controllers/theme';


/* 
	Thunks
*/
export const getThemes = createAsyncThunk(
	'theme/getThemes',
	async (_, { dispatch }) => {
		const themes = await themeAPI.getThemes();
		const themesObject = themes.reduce((acc, curr) => {
			acc[curr.id] = curr;
			return acc;
		}, {});
		dispatch(updateThemes(themesObject));
	}
);

export const getDefaultThemes = createAsyncThunk(
	'theme/getDefaultThemes',
	async (_, { dispatch }) => {
		const themes = await themeAPI.getDefaultThemes();
		dispatch(updateDefaultThemes(themes));
	}
);


/**
 * Initial State
 * @property {object} themes 테마 종류
 * @property {Theme[]} defaultThemes 기본 테마
 */
const initialState = {
	themes: {},
	defaultThemes: []
};


/*
	Slice
*/
const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		/** themes 갱신 @dispatch */
		updateThemes(state, action) {
			state.themes = action.payload;
		},
		/** defaultThemes 갱신 @dispatch */
		updateDefaultThemes(state, action) {
			state.defaultThemes = action.payload;
		}
	}
});


export const { 
	updateThemes,
	updateDefaultThemes
} = themeSlice.actions;


export default themeSlice.reducer;