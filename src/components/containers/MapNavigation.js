import React, {Component} from 'react'
//first write componnet map then write map containers by copy the map view;
//of course in MapNavigation ned to include Mpa view
import {Map} from '../view'
//here in view folder we have a lot view here we only include on file map,
class MapNavigation extends Component{
  render(){
    const center={
      lat:37.63549,
      lng:-122.4157069
    }
    return (
      <div>
         MapNavigation Component;
         <Map center={center} zoom={14}/>
         {/* right value in map */}

      </div>
    )
  }
}
export default MapNavigation
