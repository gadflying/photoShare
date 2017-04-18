import constants from '../constants'
//currentlocation determin what post to say?
//we can set default city
//data is in reducer so commentout the data in containers and  and change name to the one in reducer
var initialState = {
	currentLocation:{
		lat:37.63549,
		lng:-122.4157069
	},
	//  list: []
	tempt:'undefined',
	list:null

}
//so the action posts gonna pick up in container so go back to container posts
export default (state = initialState, action) => {

	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.POSTS_RECEIVED:
			//console.log('POSTS_RECEIVED: '+JSON.stringify(action.posts))
		  updated['list'] = action.posts
			return updated
    case constants.CURRENT_LOCATION_CHANGED:
		//RECEIVER
		//console.log('LOCATION_RECEIVED: '+JSON.stringify(action.location))
		//when location change post need to delete
		updated['currentLocation']=action.location;
		updated['list'] = null
		return updated

		default:
			return updated

	}
}
