import { createStore, combineReducers } from 'redux'
// Reducers
import modal from 'modules/modal'
import snackbar from 'modules/snackbar'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	modal,
	snackbar
});

/* 
	Create Store
*/
const store = createStore(
	reducers
);

export default store