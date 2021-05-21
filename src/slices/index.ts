import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
// reducers
import template from 'src/slices/template';
import theme from 'src/slices/theme';
import common from 'src/slices/common';


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

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;

export default store;