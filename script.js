/*
Affichage du tooltip

Mapbox.js 
l.6002 : function getTooltip(feature)


*/



/*var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/examples.map-20v6611k,mapbox.dc-property-values.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-building.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-construction.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime-robbery.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime-theft.jsonp',
    'http://a.tiles.mapbox.com/v3/mapbox.dc-crime-auto.jsonp'
    ];*/


/*var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/moasth.map-6zbgfb0l.jsonp',
    'http://a.tiles.mapbox.com/v3/moasth.moasth2.jsonp',
    'http://a.tiles.mapbox.com/v3/moasth.moasth1.jsonp',
    'http://a.tiles.mapbox.com/v3/moasth.densite_alsace.jsonp'
];
*/

var TileJSONs = [
'http://a.tiles.mapbox.com/v3/moasth.map-6zbgfb0l.jsonp',
'http://a.tiles.mapbox.com/v3/moasth.chateaux4.jsonp',
'http://a.tiles.mapbox.com/v3/moasth.bruche.jsonp'
];


$('#map').mapbox(TileJSONs, function(map, tiledata) {

    // Assign readable names to all layers
/*    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('building');
    map.getLayerAt(2).named('construction');
    map.getLayerAt(3).named('crime');
    map.getLayerAt(4).named('robbery');
    map.getLayerAt(5).named('theft');
    map.getLayerAt(6).named('auto');*/

    map.getLayerAt(0).named('base');
    map.getLayerAt(1).named('chateaux3');
    map.getLayerAt(2).named('rivieres');
   /* map.getLayerAt(2).named('ill');
   map.getLayerAt(3).named('densite_alsace');*/

    // Don't composite base layer with other layers
    map.getLayer('base').composite(false);
map.getLayer('chateaux3').composite(false);
map.getLayer('rivieres').composite(false);
    // Disable all overlay layers by default
    /*map.disableLayer('building');
    map.disableLayer('construction');
    map.disableLayer('crime');
    map.disableLayer('robbery');
    map.disableLayer('theft');
    map.disableLayer('auto');
    */
    map.disableLayer('rivieres');
    map.disableLayer('chateaux3');
    
    //map.disableLayer('densite_alsace');*/

    // Set initial latitude, longitude and zoom level
    map.setCenterZoom({
        lat: 48.583,
        lon: 7.750
    }, 8);

    // Set minimum and maximum zoom levels
    //map.setZoomRange(3, 16);

    // Enable share control
    mapbox.share().map(map).add();

delete wax.template;

    // TEST 2 TSC
    map.interaction.formatter(function(feature) {
    var o = '<a href="#" class="first">' +
        '<img src="' + image + '">' +
        '<h2>' + feature + '</h2>' +
        '</a> mon texte';
    return o;
    });


//    map.interaction.auto();
    /*map.interaction.on({

        
        on: function(o) {
            map.parent.style.borderColor = '#81ff47';
        },
        off: function() {
            map.parent.style.borderColor = '#000';
        }*/

        /*on: function(o) {
            // This will only listen to mousemoves. You can also look
            // for clicks or any other event or combination of events.
            if (o.e.type === 'mousemove') {
                // If the external datasource matches the interacted-with
                // feature, use it.
                if (currencies[o.data.admin]) {
                    currency.innerHTML = currencies[o.data.admin];
                } else {
                    currency.innerHTML = '?';
                }
            }
        },
        // When the mouse leaves the feature, clear this bit of
        // interactivity
        off: function() {
            currency.innerHTML = '';
        }*/
 //   });
    // FIN TEST 2


    // TEST 1 TSC 
    // the popups (tooltips) will show on marker hover by default
    // this will disable that (we're using the onclick instead) 
//    var interaction = mapbox.markers.interaction(markerLayer).showOnHover(false);

    // we'll use this function in a handy little "x" that will allow
    // the user to close popups
//    map_close_tooltips = function(){
//        interaction.hideTooltips();
//    }

        // Set a custom formatter for tooltips
        // Provide a function that returns html to be used in tooltip
/*    interaction.formatter(function(feature) {
            var o = '<a href="javascript:map_close_tooltips();" class="marker-close">x</a><a target="_blank" href="' + feature.properties.link + '">' +
            '<h2>' + feature.properties.title + '</h2>' +
            '<p style="font-style:italic;">' + feature.properties.subtitle + '</p>' +
            '<p>' + feature.properties.city + ', ' + feature.properties.state + '</p>' +
            '<hr/>' +
                    // sorry I'm not showing you the following function.  nothing too crazy there... it just
                    // iterates over the images in the response and creates some html markup
                    get_images_html(feature.properties.images) +
                    '<div style="clear:both;height:3px;"></div>'+
                    '</a>';

                    return o;
    });
*/    // FIN TEST



/*var Map = {},
        layers;
Map = function(el, l, callback) {
        var map = this;
        wax.tilejson(l.api, function(t) {
            var handlers = [
                new MM.DragHandler(),
                new MM.DoubleClickHandler(),
                new MM.TouchHandler()
            ];
            if ($.inArray('zoomwheel', l.features) >= 0) {
                handlers.push(new MM.MouseWheelHandler());
            }
            if ($.inArray('static', l.features) >= 0) {
                handlers = null;
            }

            MM_map = new MM.Map(el, new wax.mm.connector(t), null, handlers);

            */
        });
