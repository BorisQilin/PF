google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(40.6700, -73.9400),
    styles: [
    {
      "featureType":"administrative.country",
      "elementType":"labels",
      "stylers":[{"color":"#2c2c2c"}]
    },
    {
      "featureType":"administrative.province",
      "elementType":"labels",
      "stylers":[{"color":"#2c2c2c"}]
    },
    {
      "featureType":"administrative.locality",
      "elementType":"labels",
      "stylers":[{"color":"#2c2c2c"}]
    },
    {
      "featureType":"administrative.neighborhood",
      "elementType":"labels",
      "stylers":[{"color":"#2c2c2c"}]
    },
    {
      "featureType":"administrative.land_parcel",
      "elementType":"labels",
      "stylers":[{"color":"#2c2c2c"}]
    },
    {
      "featureType":"administrative",
      "elementType":"labels.text.fill",
      "stylers":[{"color":"#ffffff"}]
    },
    {
      "featureType":"landscape",
      "elementType":"all",
      "stylers":[{"color":"#2c2c2c"},]
    },
    {
      "featureType":"poi",
      "elementType":"all",
      "stylers":[{"visibility":"on"}]
    },
    {
      "featureType":"road",
      "elementType":"all",
      "stylers":[
                  {"saturation":-100},
                  {"lightness":45},
                  {"color":"#3b3b3b"}
                ]
    },
    {
      "featureType":"road.highway",
      "elementType":"all",
      "stylers":[
                  {"visibility":"simplified"}
                ]
    },
    {
      "featureType":"road.arterial",
      "elementType":"labels.icon",
      "stylers":[
                  {"visibility":"on"},
                  {"color":"#353446"}
                ]
    },
    {
      "featureType":"transit",
      "elementType":"all",
      "stylers":[{"visibility":"on"}]
    },
    {
      "featureType":"water",
      "elementType":"all",
      "stylers":[
                  {"color":"#004447"},
                  {"visibility":"on"}
                ]
    }]
  };

  var mapElement = document.getElementById('map');

  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Без малейшего понятия что тут...'
  });
}
