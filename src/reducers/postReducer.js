import constants from '../constants'

var initialState = {
	 list: []
}
//so the action posts gonna pick up in container so go back to container posts
export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.POSTS_RECEIVED:
			console.log('POSTS_RECEIVED: '+JSON.stringify(action.posts))
		  updated['list'] = action.posts
			return updated

		default:
			return updated

	}



}
