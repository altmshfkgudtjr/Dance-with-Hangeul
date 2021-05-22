import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// controllers
import * as templateAPI from 'src/controllers/template';
// typees
import { RootState } from 'src/slices'
import { TemplateState } from 'src/types/slices/template'
import { Template } from 'src/types/template'


/* 
	Thunks
*/
/** Template API 요청 */
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

/** 랜덤 템플릿 선택 및 설정 */
export const setRandomTemplate = createAsyncThunk(
	'template/setRandomTemplate',
	async (_, { getState, dispatch }) => {
		const state = getState() as RootState;
		const templates = state.template.templates;

		let flatten: Template[] = [];
		for (let key of Object.keys(templates)) {
			flatten = flatten.concat(templates[key]);
		}
    
		const randomTemplate = flatten[Math.floor(Math.random() * flatten.length)];
		randomTemplate && dispatch(updateSelectedTemplate(randomTemplate));
		
		return randomTemplate;
	}
);


/**
 * Initial State
 */
const initialState: TemplateState = {
	selectedTemplate: {
		id: '',
		name: '',
		consonant: '',
		pronunciation: '',
		info: {
			ko: '',
			en: ''
		},
		themes: []
	},
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
};


/*
	Slice
*/
const templateSlice = createSlice({
	name: 'template',
	initialState,
	reducers: {
		/** @dispatch template 갱신 */
		updateTemplates(state, action: PayloadAction<{[key: string]: Template[]}>) {
			state.templates = Object.assign(state.templates, action.payload);
		},
		/** @dispatch selectedTemplate 갱신  */
		updateSelectedTemplate(state, action: PayloadAction<Template>) {
			state.selectedTemplate = action.payload;
		},
		/** @dispatch selectedTemplate 초기화  */
		clearSelectedTemplate(state) {
			state.selectedTemplate = {
				id: '',
				name: '',
				consonant: '',
				pronunciation: '',
				info: {
					ko: '',
					en: ''
				},
				themes: []
			}
		}
	}
});


export const { 
	updateTemplates,
	updateSelectedTemplate,
	clearSelectedTemplate
} = templateSlice.actions;


export default templateSlice.reducer;