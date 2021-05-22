import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// controllers
import * as themeAPI from 'src/controllers/theme';
// types
import { RootState } from 'src/slices'
import { ThemeState } from 'src/types/slices/theme'
import { Theme } from 'src/types/theme'


/* 
	Thunks
*/
/** 전체 테마 호출 */
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

/** 디폴트 테마 호출 */
export const getDefaultThemes = createAsyncThunk(
	'theme/getDefaultThemes',
	async (_, { dispatch }) => {
		const themes = await themeAPI.getDefaultThemes();
		dispatch(updateDefaultThemes(themes));
	}
);

/** 
 * 특정 테마 선택 
 * @param themeId 테마 식별값
 */
export const selectTheme = createAsyncThunk(
	'theme/setTheme',
	async (themeId: string, { getState, dispatch }) => {
		const state = getState() as RootState;
		const themes = state.theme.themes;
		const theme = themes[themeId];
		if (!theme) return Promise.reject();
		dispatch(updateSelectedTheme(theme));
	}
);


/**
 * Initial State
 */
const initialState: ThemeState = {
	selectedTheme: {
		id: '',
		bgColor: '',
		fgColor: [],
		mode: 'Dark'
	},
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
		/** @dispatch themes 갱신 */
		updateThemes(state, action) {
			state.themes = action.payload;
		},
		/** @dispatch defaultThemes 갱신 */
		updateDefaultThemes(state, action) {
			state.defaultThemes = action.payload;
		},
		/** @dispatch selectedTheme 갱신  */
		updateSelectedTheme(state, action: PayloadAction<Theme>) {
			state.selectedTheme = action.payload;
		},
		/** @dispatch selectedTheme 초기화  */
		clearSelectedTheme(state) {
			state.selectedTheme = {
				id: '',
				bgColor: '',
				fgColor: [],
				mode: 'Dark'
			}
		}
	}
});


export const { 
	updateThemes,
	updateDefaultThemes,
	updateSelectedTheme,
	clearSelectedTheme
} = themeSlice.actions;


export default themeSlice.reducer;