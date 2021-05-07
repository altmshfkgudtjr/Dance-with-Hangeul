import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// controllers
import * as templateAPI from 'controllers/template'


/* 
	Thunks
*/
export const getTemplates = createAsyncThunk(
	'template/getTemplates',
	async (_, { dispatch }) => {
		const templates = await templateAPI.getTemplates();
		const templatesObject = templates.reduce((acc, curr) => {
			if (!acc[curr.consonant]) acc[curr.consonant] = []; 
			acc[curr.consonant].push(curr);
			return acc;
		}, {});
		dispatch(updateTemplates(templatesObject));
	}
);


/**
 * Initial State
 * @property {Template} selectedTemplate 현재 선택된 템플릿
 * @property {Theme} selectedTheme 현재 선택된 테마 
 * @property {object} templates 템플릿 리스트
 * @property {Theme[]} defaultThemes 기본 테마 리스트
 */
const initialState = {
	selectedTemplate: {},
	selectedTheme: {},
	templates: {
		'ㄱ': [],
		'ㄴ': [],
		'ㄷ': [],
		'ㄹ': [],
		'ㅁ': [],
		'ㅂ': [],
		'ㅅ': [],
		'ㅇ': [],
		'ㅈ': [],
		'ㅊ': [],
		'ㅋ': [],
		'ㅌ': [],
		'ㅍ': [],
		'ㅎ': [],
	},
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
			state.templates = Object.assign(state.templates, action.payload);
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