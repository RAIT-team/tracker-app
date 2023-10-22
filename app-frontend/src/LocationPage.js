// import React, { Component } from "react";

// class LocationPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       map: null,
//       infoWindow: null,
//       locationMessage: "Click the button to get your location.",
//       countyName: "",
//       googleMapsApiKey: "AIzaSyDVnnD8F7MzDzO2ZsWCGcvPBdpRQ2FXSXM", // Replace with your API key
//     };
//   }

//   componentDidMount() {
//     // Initialize your map and infoWindow here
//     const google = window.google;
//     const infoWindow = new google.maps.InfoWindow();

//     this.setState({
//       infoWindow: infoWindow,
//     });
//   }

//   handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           // No need to fetch the API key, as it's included in the state
//           const { googleMapsApiKey } = this.state;

//           // Make a POST request to reverse geocode and get the county name
//           fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=${googleMapsApiKey}`,
//             {
//               method: "GET",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           )
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.results.length > 0) {
//                 const countyComponent = data.results[0].address_components.find(
//                   (component) =>
//                     component.types.includes("administrative_area_level_2")
//                 );

//                 if (countyComponent) {
//                   this.setState({
//                     countyName: countyComponent.long_name,
//                     locationMessage: `Your location: Latitude - ${pos.lat}, Longitude - ${pos.lng}`,
//                   });
//                 } else {
//                   this.setState({
//                     countyName: "",
//                     locationMessage: "County not found in results.",
//                   });
//                 }
//               } else {
//                 this.setState({
//                   countyName: "",
//                   locationMessage: "No results found.",
//                 });
//               }
//             })
//             .catch((error) => {
//               console.log("error", error);
//             });
//         },
//         () => {
//           // Handle location error...
//         }
//       );
//     } else {
//       // Handle location error...
//     }
//   };

//   render() {
//     const { locationMessage, countyName } = this.state;

//     return (
//       <div className="Location">
//         <header className="Location-header">
//           <button onClick={this.handleGetLocation}>Get Location</button>
//           <p>{locationMessage}</p>
//           <p>County: {countyName}</p>
//           <div id="map" style={{ width: "100%", height: "400px" }}></div>
//         </header>
//       </div>
//     );
//   }
// }

// export default LocationPage;
