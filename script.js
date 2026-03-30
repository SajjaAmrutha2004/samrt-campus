// script.js
// Common variables and functions used across pages
const CAMPUS_CENTER = { lat: 15.4000, lng: 80.0400 }; // replace with precise campus center
let map, directionsService, directionsRenderer, markers = [];


// initMap is called by Google Maps callback in map.html
window.initMap = function() {
const mapEl = document.getElementById('map');
if (!mapEl) return;
map = new google.maps.Map(mapEl, { center: CAMPUS_CENTER, zoom: 17 });
directionsService = new google.maps.DirectionsService();
directionsRenderer = new google.maps.DirectionsRenderer({ map });
loadPoisAndPlaceMarkers();
};


async function loadPoisAndPlaceMarkers

// Load POIs and show them on Google Maps
fetch("http://localhost:5000/api/pois")
  .then(res => res.json())
  .then(data => {
    console.log("POIs:", data);
    // Here you can create markers on your Google Map
    // Example:
    data.forEach(p => {
      const marker = new google.maps.Marker({
        position: { lat: p.lat, lng: p.lng },
        map: map,
        title: p.name
      });
    });
  });
