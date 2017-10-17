let gridSize = 24;
let squareSize = 480 / gridSize

const setSquareSize = function () {
$(".container").find(".square").css({"height" : squareSize, "width" : squareSize});
};

const appendSquare = function () {
$(".container").append($("<div></div>").addClass("square"));
};

let makeGrid = function () {
for (i=1; i<= gridSize * gridSize; i++) {
appendSquare();
}
};

const removeGrid = function () {
$(".container").find(".square").remove();
};

makeGrid();

$(document).ready(function () { 

$(".mode").on("click", function () {

removeGrid();
gridSize = $("#gridInput").val();
makeGrid();

$(".square").on("mouseenter", function() {
  $(this).addClass("whited"); 
});

});





});