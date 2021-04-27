import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// controllers

// types
import Template from 'types/Template'


/* 
	Thunks
*/
export const getTemplates = createAsyncThunk(
	'template/getTemplates',
	async ({}, { dispatch }) => {
		
	}
);


/**
 * Initial State
 * @property {Template} selectedTemplate - 현재 선택된 템플릿
 * @property {Template[]} templates - 전체 템플릿
 */
const initialState = {
	selectedTemplate: {},
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