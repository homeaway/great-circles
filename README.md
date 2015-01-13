# great-circles
An attempt to create great circles arcs via d3, Shiny, htmlwidgets and R

clone the repo, and type devtools::install() to get your nice great circle widget. Or you can devtools::install_github("schnee/great-circles") and get it directly.

**What works:**
```
inst/examples/standalone-example.R 
```

This will/should display a world map with four arcs all terminating in Australia (two of them are almost coincident). Looks like this:

![world-plot](inst/examples/figures/sample.png)

**What does not work:**
```
inst/examples/shiny-example.R
```

I suspect that this fails to render based on my D3 inexperience, specifically the way the greatCircles.js code is selecting the DOM elements for use in a Shiny container.
