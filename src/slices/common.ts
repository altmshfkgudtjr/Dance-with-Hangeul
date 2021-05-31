import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// controllers
import * as commonAPI from 'src/controllers/common';
// types
import { CommonState, Quote, ControlOption } from 'src/types/slices/common'

/* 
	Thunks
*/
export const getQuotes = createAsyncThunk(
	'common/getQuotes',
	async (_, { dispatch }) => {
		const quotes = await commonAPI.getQuotes();
		dispatch(updateQuotes(quotes));
	}
);


/**
 * Initial State
 */
const initialState: CommonState = {
	controlOption: null,
	quotes: [],
	isFullscreen: false,
	sideMenu: {
		selectedConsonant: '',
		selectedTemplateIdx: 0
	}
};


/*
	Slice
*/
const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		/** @dispatch Contorl Option 변경 */
		updateControlOption(state, action: PayloadAction<ControlOption>) {
			state.controlOption = action.payload;
		},
		/** @dispatch quotes 갱신 */
		updateQuotes(state, action: PayloadAction<Quote[]>) {
			state.quotes = action.payload;
		},
		/** @dispatch fullscreen 토글 */
		toggleFullscreen(state) {
			state.isFullscreen = !state.isFullscreen
		},
		/** @dispatch Sidemenu information 갱신 */
		updateSideMenuInfo(state, action: PayloadAction<{
			selectedConsonant?: string,
			selectedTemplateIdx?: number
		}>) {
			state.sideMenu = { ...state.sideMenu, ...action.payload };
		}
	}
});


export const { 
	updateControlOption,
	updateQuotes,
	toggleFullscreen,
	updateSideMenuInfo
} = commonSlice.actions;


export default commonSlice.reducer;