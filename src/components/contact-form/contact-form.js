// let map;

// let markersArray = [];

// // define function to add marker at given lat & lng
// function addMarker(latLng) {
//   let marker = new google.maps.Marker({
//     map: map,
//     position: latLng,
//     draggable: true
//   });

//   //store the marker object drawn on map in global array
//   markersArray.push(marker);

//   //add event listener to marker to update lat & lng on marker drag
//   google.maps.event.addListener(marker, 'dragend', function() {
//     document.getElementById('lat').value = this.getPosition().lat();
//     document.getElementById('lng').value = this.getPosition().lng();
//   });

//   //update lat & lng on map click
//   document.getElementById('lat').value = latLng.lat();
//   document.getElementById('lng').value = latLng.lng();

//   //update map center to clicked location
//   map.panTo(latLng);

//   //update map zoom to 15
//   map.setZoom(15);
// }

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 16.8587543, lng: 96.168996 },
//     zoom: 10,
//   });

//   map.addListener('click', function(e) {
//     //clear all markers on map
//     for (let i = 0; i < markersArray.length; i++) {
//       markersArray[i].setMap(null);
//     }

//     //clear all markers from global array
//     markersArray = [];

//     //add marker at clicked location
//     addMarker(e.latLng);
//   });
// }

// window.initMap = initMap;