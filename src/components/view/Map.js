import React, {Component} from 'react'
import {GoogleMapLoader,GoogleMap} from 'react-google-maps'

class Map extends Component{
  // render(){
  //   return (
  //     <div>
  //       //  Map Component;
  //     </div>
  //   )
  // }

  render(){
  const mapContainer = <div style={{minHeight:800, height:'100%', width:'100%'}}></div>
  // const center={
  //   // lat:0,
  //   // lng:0
  //   lat:37.63549,
  //   lng:-122.4157069
  // }
  //center is come from conner property should passdown from container
//map was wrapped in MapNavigation so
  return (
      <GoogleMapLoader
          containerElement = { mapContainer }
          googleMapElement = {
            <GoogleMap

                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
                options={{streetViewControl: false, mapTypeControl: false}}>
            </GoogleMap>
        } />


  )
}
}
export default Map
