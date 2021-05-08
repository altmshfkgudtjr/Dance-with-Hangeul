import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
// reducers
import template from 'slices/template';
import theme from 'slices/theme';
import common from 'slices/common';


/**
 * Combined Reducer
 */
const reducer = combineReducers({
	template,
	theme,
	common
});


/**
 * Create Store & Apply Middlewares
 */
const store = configureStore({
	reducer,
});

export default store;