$(document).ready(function() {

var gridSize = $("#gridInput").val();
var squareSize = 480 / gridSize;

let mode = "red";

var appendSquare = function () {
$(".container").append($("<div></div>").addClass("square"));
};

//on click function
$(".mode").on("click", function() {

$(".container").find(".square").remove();

for (i=1; i<= gridSize * gridSize; i++) {
appendSquare();
}

$(".container").find(".square").css({"height" : squareSize, "width" : squareSize});


$(".blue_button").on("click", function () {
mode = "blue";
});

$(".red_button").on("click", function () {
mode = "red";
});
$(".square").on("mouseenter", function() {
  $(this).addClass("whited"); 
}); 

//on click function


//switch function

});





});


