# great-circles
An attempt to create great circles arcs via d3, Shiny, htmlwidgets and R

clone the repo, and type devtools::install() to get your nice great circle widget. Or you can devtools::install_github("schnee/great-circles") and get it directly.

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
**What does not work:**

Resizing. If anyone could help, that would be swell

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

**TODOs:**

* Gradiate the arcs from start to finish
* Add support of annotations

