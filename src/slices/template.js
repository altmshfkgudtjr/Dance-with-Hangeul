import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// controllers
import { getTemplates } from 'controllers/json'
// types
import Template from 'types/Template'
import Theme from 'types/Theme'


/* 
	Thunks
*/
export const getTemplates = createAsyncThunk(
	'template/getTemplates',
	async ({}, { dispatch }) => {
		const templates = await getTemplates();
		dispatch(updateTemplates(templates));
	}
);


/**
 * Initial State
 * @property {Template} selectedTemplate 현재 선택된 템플릿
 * @property {Theme} selectedTheme 현재 선택된 테마 
 * @property {Template[]} templates 전체 템플릿
 */
const initialState = {
	selectedTemplate: {},
	selectedTheme: {},
	templates: []
}


/*
	Slice
*/
const templateSlice = createSlice({
	name: 'template',
	initialState,
	reducers: {
		/** template 갱신 @dispatch */
		updateTemplates(state, action) {
			state.book = action.payload;
		}
	}
});


export const { 
	updateTemplates
} = templateSlice.actions;
 
export default templateSlice.reducer