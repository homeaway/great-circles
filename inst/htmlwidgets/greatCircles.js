
HTMLWidgets.widget({

    name: 'greatCircles',

    type: 'output',

    initialize: function(el, width, height) {

        // for the equirectangular projection, the height is 1/2 the width
        var height = width / 2;

        d3.select(el).append("svg")
            .attr("width", width)
            .attr("height", height);


        return {
            //TODO: Not sure if this is the best place to define projection. Eventually, being able to change
            //the projection on the fly would be nice
            projection: d3.geo.equirectangular()
                .scale(100 * width / 640)
                .translate([width / 2, height / 2])
                .precision(.1)
        };

    },

    renderValue: function(el, x, instance) {

        var path = d3.geo.path()
            .projection(instance.projection);

        //x.coords contains the list of coordinates that will be transformed
        //into great circle arcs
        arcs = x.coords;

        // select the svg element and remove existing childern
        //.select(el)
        var svg = d3.select(el).select("svg");
        svg.selectAll("*").remove();

        // this is where we draw the trip-related arcs
        svg.selectAll("svg")
            .data(arcs)
            .enter()
            .append("path")
            .attr("class", "arc")
            .attr("d", path);

        var shape = HTMLWidgets.getAttachmentUrl('shapes', 'world')

        d3.json(shape, function(error, world) {

            svg.insert("path", ".arc")
                .datum(topojson.feature(world, world.objects.land))
                .attr("class", "land")
                .attr("d", path);

            svg.insert("path", ".arc")
                .datum(topojson.mesh(world, world.objects.countries, function(a, b) {
                    return a !== b;
                }))
                .attr("class", "boundary")
                .attr("d", path);

        });
    },
    resize: function(el, width, height, instance) {

        // for the equirectangular projection, the height is 1/2 the width
        var height = width / 2;

        var svg = d3.select(el).select("svg");

        svg.attr("width", width)
            .attr("height", height);

        instance.projection
            .translate([width / 2, height / 2])
            .scale(100 * width / 640);

        var path = d3.geo.path()
            .projection(instance.projection);

        // resize the map
        svg.selectAll('.arc').attr('d', path);
        svg.selectAll('.land').attr('d', path);
        svg.selectAll('.boundary').attr('d', path);

    }
});
