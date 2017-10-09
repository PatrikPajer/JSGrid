$(document).ready(function() {

$(".container").on("click", function() {

for (i=1; i<=15; i++) {
$(this).append($("<div></div>").addClass("square"));
}
});

});
