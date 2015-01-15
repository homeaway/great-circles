# great-circles
An attempt to create great circles arcs via [d3](http://d3js.org/), [Shiny](http://shiny.rstudio.com/), [htmlwidgets](http://www.htmlwidgets.org/) and [R](http://www.r-project.org/). 

Pull the repo, and type devtools::install() to get your nice great circle widget. Or you can devtools::install_github("schnee/great-circles") and get it directly.

To use, create a data.frame with four columns and call the greatCircles function.

```
library(greatCircles)

greatCircles(data.frame(
  longitude.start=c(-0.1015987,9.9278215,2.3470599,12.5359979,-42.9232368,114.1537584,
                    139.7103880,-118.4117325,-73.9796810,4.8986142,7.4259704,-1.7735460),
  latitude.start = c(51.52864,53.55857,48.85886,41.91007,-22.06645,22.36984,35.67334,
                     34.02050,40.70331,52.37472,43.74105,52.49033),
  longitude.finish = c(9.9278215,2.3470599,12.5359979,-42.9232368,114.1537584,139.7103880,
                       -118.4117325,-73.9796810,4.8986142,7.4259704,-1.7735460,-0.1015987),
  latitude.finish = c(53.55857,48.85886,41.91007,-22.06645,22.36984,35.67334,34.02050,
                      40.70331,52.37472,43.74105,52.49033,51.52864)
))
```

**What works:**
```
inst/examples/standalone-example.R 
```

This will/should display a tour all over the world. Looks like this:

![world-plot](inst/examples/figures/sample.png)

Running inside of Shiny works now 
```
inst/examples/shiny-example.R
```

Arc styling is controlled via CSS:

```
/* styles the land elements (countries) */
.land {
  fill: #333333;
}

/* border between countries */
.boundary {
  fill: none;
  stroke: #111111;
  stroke-width: .5px;
  stroke-linejoin: round;
  stroke-linecap: round;
}

/* arc styling */
.arc {
  fill: none;
  stroke: #FED863;  /*homeaway yellow*/
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-opacity: 0.3;
}

/* arc:hover styling */
.arc:hover {
  stroke: #2A6EBB; /*homeaway blue*/
  stroke-width: 5px;
  stroke-opacity: 1.0;
}
```

------
Copyright (c) 2015 HomeAway.com
