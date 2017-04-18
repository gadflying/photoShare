import React, {Component} from 'react'
//first write componnet map then write map containers by copy the map view;
//of course in MapNavigation ned to include Mpa view
import {Map} from '../view'
//here in view folder we have a lot view here we only include on file map,
//when u navigate so it is post to backend and return post based on location
//so location related to post so it is in
import {connect }from 'react-redux'
import actions from '../../actions'

class MapNavigation extends Component{

//when ever map move call mapMoved function
//creat action change location in reducer
//one component and other component change since reducer change
  setNewLocation(location){
    //console.log('setNewLocation')
		console.log('setNewLocation: '+JSON.stringify(location))
  this.props.updateCurrentLocation(location)
  //after we setup updateCurrentLocation we need to call dispatch when to dispatch
}
  render(){
    // const center={
    //   lat:37.63549,
    //   lng:-122.4157069
    // }
    return (
      <div>
         MapNavigation Component;
         {/*<Map center={center} zoom={14}/>*/}
         {/* right value in map */}
         <Map
            center={this.props.posts.currentLocation}
            zoom={14}
            mapMoved={this.setNewLocation.bind(this)}/>

      </div>
    )
  }
}
const stateToProps = (state) =>{
  return {
    //we only have one reducer ins in post
    posts:state.post
  }
}
const dispatchToProps = (dispatch) =>{
  return {
    updateCurrentLocation:(location)=>dispatch(actions.updateCurrentLocation(location))
  }
}
// export default MapNavigation
export default connect(stateToProps, dispatchToProps)(MapNavigation)
