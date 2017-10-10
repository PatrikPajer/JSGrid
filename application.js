$(document).ready(function() {

$(".mode").on("click", function() {

var gridSize = 9;
var squareSize = 480 / gridSize;

for (i=1; i<= gridSize * gridSize; i++) {
$(".container").append($("<div></div>").addClass("square"));
$(".container").find(".square").css({"height" : squareSize, "width" : squareSize});
}

console.log("OK");

$(".square").on("mouseenter", function() {
  $(this).css("background-color", "white");
});


});
});


