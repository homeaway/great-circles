#' Great Circles
#'
#' Draws Great Circle arcs in an svg container using D3 Projections
#'
#' @import htmlwidgets
#'
#' @export
greatCircles <- function(coordinates, width = NULL, height = NULL) {

  #Utility function to convert dataframe to list (for javascript)
  toCoords <- function(i,data) {
    list(type="LineString",
         coordinates=list(
           c(data[i,"longitude.start"], data[i,"latitude.start"]),
           c(data[i,"longitude.finish"], data[i,"latitude.finish"])
         )
    )
  }

  # forward options using x
  x = list(
    coords = lapply(1:nrow(coordinates), toCoords, coordinates)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'greatCircles',
    x,
    width = width,
    height = height,
    package = 'greatCircles'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
greatCirclesOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, "greatCircles", width, height, package = "greatCircles")
}

#' Widget render function for use in Shiny
#'
#' @export
rendergreatCircles <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, greatCirclesOutput, env, quoted = TRUE)
}

