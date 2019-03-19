import React,{Component} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 19.1098, lng: 72.8583}}>
      {" "}
      <Marker position={{ lat: 19.1098, lng: 72.8583 }} />{" "}
    </GoogleMap>
  ))
);
export default class Maps extends Component{
    render(){
        return(
            <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}