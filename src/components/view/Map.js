import React, {Component} from 'react'
import {GoogleMapLoader,GoogleMap} from 'react-google-maps'

class Map extends Component{
  constructor(){
    super()
    this.state = {
      map: null
    }
}
  // render(){
  //   return (
  //     <div>
  //       //  Map Component;
  //     </div>
  //   )
  // }
  //you care about when the drap stop; when map stop navigation we get this call back in the console

mapDragged(){
  //here you location map object then you can call getCenter in library
  //when there is detail move in component move up to container , view's in containers left;
  //view tell container hi u probably what this
  var latLng = this.state.map.getCenter().toJSON()

  console.log('mapDragged: '+JSON.stringify(latLng))
  this.props.mapMoved(latLng)
}
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
//google map itself store the property on the state of componnets if you make change change state
//this local one view maintain the state,

  return (
      <GoogleMapLoader
          containerElement = { mapContainer }
          googleMapElement = {
            <GoogleMap
                ref={ (map) => {
                     if (this.state.map != null)
                       return

                     this.setState({map: map})
                   }
               }
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
                onDragend={this.mapDragged.bind(this)}
                options={{streetViewControl: false, mapTypeControl: false}}>
            </GoogleMap>
        } />


  )
}
}
export default Map
