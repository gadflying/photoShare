import React, {Component} from 'react'
//first write componnet map then write map containers by copy the map view;
//of course in MapNavigation ned to include Mpa view
import {Map} from '../view'
//here in view folder we have a lot view here we only include on file map,
class MapNavigation extends Component{
  render(){
    return (
      <div>
         MapNavigation Component;
         <Map/>
      </div>
    )
  }
}
export default MapNavigation
