import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
// reducers
import template from 'slices/template'

/**
 * 모든 리듀서가 결합된 Root 리듀서
 */
const reducer = combineReducers({
	template
});

/**
 * 공통 Store
 */
const store = configureStore({
	reducer,	
});

export default store