import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { postReducer } from '../reducers'

var store;
//pay attention input para initial is not exist
export default {
	configureStore: () => {
		const reducers = combineReducers({
			post: postReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
