var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/moasth.map-6zbgfb0l.jsonp',
    'http://a.tiles.mapbox.com/v3/moasth.chateaux4.jsonp'
];

$('#map').mapbox(TileJSONs, function(map, tiledata) {

    // Assign readable names to all layers
    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('chateaux');

    // Don't composite base layer with other layers
    map.getLayer('base').composite(false);
    map.getLayer('chateaux').composite(false);

    // Disable all overlay layers by default
    //map.disableLayer('building');

    // Set initial latitude, longitude and zoom level
    map.setCenterZoom({
        lat: 48.583,
        lon: 7.750
    }, 8);

    // Set minimum and maximum zoom levels
    //map.setZoomRange(0, 15);

    // Enable share control
    mapbox.share().map(map).add();

});
