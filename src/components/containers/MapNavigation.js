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
         <Map center={this.props.posts.currentLocation} zoom={14}/>

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

  }
}
// export default MapNavigation
export default connect(stateToProps, dispatchToProps)(MapNavigation)
