//import liraries
import React, { Component } from 'react';
// import './TypingBubble.css';
let google= window.google
export default class Typing extends Component {
    // constructor(props){
    //     super(props);
    //     const script = document.createElement("map");
        
    //     // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A`;

    //     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=${this.myMap()}`;
    //     script.async = true;
        
    //     console.log('script',script);
    //     document.body.appendChild(script);
        
    // }
    // componentDidMount =async ()  =>{
    //     console.log('google',google);
    //     // const response = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A')
    //     const script = document.createElement("script");
        
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=${this.myMap()}`;
    //     script.async = true;
        
    //     document.body.appendChild(script);
    //     console.log('script',script);
    // }
          
componentDidMount(){
    window.myMap = ()=> {
        var myCenter = new google.maps.LatLng(18.932245, 72.826439);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 10};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
          position: myCenter,
          animation: google.maps.Animation.BOUNCE
        });            
        marker.setMap(map);
      }
}
    // componentDidMount = ()=> {
    //     console.log("google:");


    //     let google=window.google;
    //     console.log("google",google);
    //     var myCenter = new google.maps.LatLng(18.932245, 72.826439);
    //     var mapCanvas = document.getElementById("map");
    //     var mapOptions = {center: myCenter, zoom: 10};
    //     var map = new google.maps.Map(mapCanvas, mapOptions);
    //     var marker = new google.maps.Marker({
    //       position: myCenter,
    //       animation: google.maps.Animation.BOUNCE
    //     });            
    //     marker.setMap(map);
    //   }
    render() {
       
        return (
            <div>
                 
                    
                        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyC87fftpSPt2ttOpm3kvzwdfyOmZX9Mu9A&callback=myMap'></script>
                        <div class="jumbotron" style="padding: 0px; margin-top: 0px; margin-bottom: 0px; background-color: #edeeef;">
                                {/* <div id="map" style="width:100%;height:680px;-webkit-filter: grayscale(100%); filter: grayscale(100%);"></div> */}
                        </div>

            </div>
    )
    }

}
