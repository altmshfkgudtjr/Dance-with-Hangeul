import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// controllers
import * as templateAPI from 'controllers/template'
// types
import Template from 'types/Template'


/* 
	Thunks
*/
export const getTemplates = createAsyncThunk(
	'template/getTemplates',
	async ({}, { dispatch }) => {
		const templates = await templateAPI.getTemplates();
		const templatesMap = templates.map(template => new Template(template));
		dispatch(updateTemplates(templatesMap));
	}
);


/**
 * Initial State
 * @property {Template} selectedTemplate 현재 선택된 템플릿
 * @property {Theme} selectedTheme 현재 선택된 테마 
 * @property {Template[]} templates 템플릿 리스트
 * @property {Theme[]} defaultThemes 기본 테마 리스트
 */
const initialState = {
	selectedTemplate: {},
	selectedTheme: {},
	templates: [],
	defaultThemes: []
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
			state.templates = action.payload;
		},
		/** selectedTemplate 갱신 @dispatch */
		updateSelectedTemplate(state, action) {
			state.selectedTemplate = action.payload;
		},
		/** selectedTemplate 초기화 @dispatch */
		clearSelectedTemplate(state) {
			state.selectedTemplate = {}
		},
		/** selectedTheme 갱신 @dispatch */
		updateSelectedTheme(state, action) {
			state.selectedTheme = action.payload;
		},
		/** selectedTheme 초기화 @dispatch */
		clearSelectedTheme(state) {
			state.selectedTheme = {}
		}
	}
});


export const { 
	updateTemplates,
	updateSelectedTemplate,
	clearSelectedTemplate,
	updateSelectedTheme,
	clearSelectedTheme
} = templateSlice.actions;


export default templateSlice.reducer