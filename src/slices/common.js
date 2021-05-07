import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// controllers
import * as commonAPI from 'controllers/common'


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
 * @property {object} quotes 한글 인용구
 */
const initialState = {
	quotes: []
}


/*
	Slice
*/
const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		/** quotes 갱신 @dispatch */
		updateQuotes(state, action) {
			state.quotes = action.payload;
		},
	}
});


export const { 
	updateQuotes
} = commonSlice.actions;


export default commonSlice.reducer