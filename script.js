var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/moasth.map-pzgtnf9m.jsonp',
    'http://a.tiles.mapbox.com/v3/moasth.map-czvq0pvt.jsonp',
    'http://a.tiles.mapbox.com/v3/moasth.chateaux4.jsonp'
];

$('#map').mapbox(TileJSONs, function(map, tiledata) {

    // Assign readable names to all layers
    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('base2');
    map.getLayerAt(2).named('chateaux');

    // Don't composite base layer with other layers
    map.getLayer('base').composite(true);
    map.getLayer('base2').composite(true);
    map.getLayer('chateaux').composite(false);

    // Disable all overlay layers by default
    map.disableLayer('chateaux');

    // Set initial latitude, longitude and zoom level
    map.setCenterZoom({
        lat: 48.583,
        lon: 7.750
    }, 8);

    map.setPanLimits([{ lat: -20, lon: 0 }, { lat: 0, lon: 20 }]);

    // Set minimum and maximum zoom levels
    //map.setZoomRange(0, 15);

    // Enable share control
    mapbox.share().map(map).add();

});
