$(document).ready(function() {

var gridSize = $("#gridInput").val();
var squareSize = 480 / gridSize;

let colour = "whited";

var appendSquare = function () {
$(".container").append($("<div></div>").addClass("square"));
};

$(".red_button").on("click", function() {
colour = "reded";
});

$(".white_button").on("click", function() {
colour = "whited";
});

$(".random_button").on("click", function() {
colour = "random";
});

//on click function
$(".reset").on("click", function() {

  $(".container").find(".square").remove();

  for (i=1; i<= gridSize * gridSize; i++) {
      appendSquare();
    }

  $(".container").find(".square").css({"height" : squareSize, "width" : squareSize});

  $(".square").on("mouseenter", function() {

      $(this).removeClass("whited reded random");
      $(this).addClass(colour); 
    }); 


});





});


