$(document).ready(function() {

var appendSquare = function () {
$(".container").append($("<div></div>").addClass("square"));
};

$(".mode").on("click", function() {

var gridSize = $("#gridInput").val();
var squareSize = 480 / gridSize;

$(".container").find(".square").remove();

for (i=1; i<= gridSize * gridSize; i++) {
appendSquare();
}

$(".container").find(".square").css({"height" : squareSize, "width" : squareSize});

console.log("OK");

$(".square").on("mouseenter", function() {
  $(this).addClass("whited"); 
});


});
});


