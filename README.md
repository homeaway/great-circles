# great-circles
An attempt to create great circles arcs via [d3](http://d3js.org/), [Shiny](http://shiny.rstudio.com/), [htmlwidgets](http://www.htmlwidgets.org/) and [R](http://www.r-project.org/). 

Pull the repo, and type devtools::install() to get your nice great circle widget. Or you can devtools::install_github("schnee/great-circles") and get it directly.

To use, create a data.frame with four columns and call the greatCircles function.

```
library(greatCircles)

greatCircles(data.frame(longitude.start=c(138.6,145.0181,138.6,153.1693),
                        latitude.start = c(-34.92862, -37.77931,-34.92862, -27.65875),
                        longitude.finish = c(-73.928164, -73.946490, 2.336655, -73.919071),
                        latitude.finish = c(40.76352, 40.78027, 48.88156, 40.75708)
                        )
)
```

**What works:**
```
inst/examples/standalone-example.R 
```

This will/should display a world map with four arcs all terminating in Australia (two of them are almost coincident). Looks like this:

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
