// // //import liraries
// import React, { Component } from 'react';
// import axios from 'axios';

// // create a component
// class Calender extends Component {
//  authenticate = () =>{
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//  loadClient =() =>{
//     return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   execute = () =>{
//     return gapi.client.calendar.events.insert({
//       "calendarId": "primary",
//       "conferenceDataVersion": 1,
//       "maxAttendees": 2,
//       "sendNotifications": true,
//       "sendUpdates": "all",
//       "resource": {
//         "end": {
//           "date": "2019-02-25"
//         },
//         "start": {
//           "date": "2019-02-25"
//         },
//         "description": "test"
//       }
//     })
//     .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//       },
//               function(err) { console.error("Execute error", err); });
//   }
//   componentDidMount(){
//     <script src="https://apis.google.com/js/api.js"></script>
//     window.gapi.load("client:auth2", function() {
//       window.gapi.auth2.init({client_id: "972440096758-bsq1gk9hs6k3v0deicpc6vgpm6qtd46d.apps.googleusercontent.com"});
//     });
//   }
//   // insertEvevrn = () =>{
//   //   let u='https://cors-anywhere.herokuapp.com/'
//   //   let axiosConfig={
//   //     headers:{
//   //       'Content-Type':'application/json',
//   //       'calendarId':'primary',
//   //       'conferenceDataVersion':1,
//   //       'maxAttendees':1,
//   //       'sendNotifications':true,
//   //     }
//   //   }
//   //   axios.post(u,'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events', {
//   //       "end": {
//   //         "date": "2019-02-27"
//   //       },
//   //       "start": {
//   //         "date": "2019-02-26"
//   //       },
//   //       "description": "test",
//   //       "source":{
//   //         "title":'Testing..'
//   //       }

//   //   },axiosConfig)
//   //   .then(function (response) {
//   //     console.log(response);
//   //   })
//   //   .catch(function (error) {
//   //     console.log(error);
//   //   });
//   //   // alert('Button Pressed');
//   // }
//     render() {
//         return (
//             <div>
//                 <h1>Google Calender!</h1>
//                 <button onClick={()=>this.authenticate().then(this.loadClient()).then(this.execute())}>Set Event!</button>
//             </div>
//         );
//     }
// }

// export default Calender;  