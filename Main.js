function loadMap(){
  mapboxgl.accessToken = 'pk.eyJ1IjoiaXNzbGF0ZXIxODIiLCJhIjoiY2sxbnIwM2ZrMGVnYzNwcGtqN2xtMTVkbyJ9.jV4Fno7zzYI-HWSxygDdUg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
}
