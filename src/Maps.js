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
            loadingElement={<div style={{ marginTop: '-7px',
                                            height:'auto',
                                            width:200,
                                            background:chat.type==='image'? 'none':'rgba(255, 255, 255, 0.8)',
                                            borderTopLeftRadius:username === chat.username ? 10: 0,
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,
                                            borderTopRightRadius:username !== chat.username ? 10: 0,
                                            background:'linear-gradient( #6741a3 #a3337c ))',
                                            marginBottom: '-7px', }} />}
            containerElement={<div style={{ marginTop: '-7px',
                                            height:'auto',
                                            width:200,
                                            background:chat.type==='image'? 'none':'rgba(255, 255, 255, 0.8)',
                                            borderTopLeftRadius:username === chat.username ? 10: 0,
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,
                                            borderTopRightRadius:username !== chat.username ? 10: 0,
                                            background:'linear-gradient( #6741a3 #a3337c ))',
                                            marginBottom: '-7px', }} />}
            mapElement={<div style={{ marginTop: '-7px',
                                            height:'auto',
                                            width:200,
                                            background:chat.type==='image'? 'none':'rgba(255, 255, 255, 0.8)',
                                            borderTopLeftRadius:username === chat.username ? 10: 0,
                                            borderBottomLeftRadius:10,
                                            borderBottomRightRadius:10,
                                            borderTopRightRadius:username !== chat.username ? 10: 0,
                                            background:'linear-gradient( #6741a3 #a3337c ))',
                                            marginBottom: '-7px', }} />}
            />
        )
    }
}