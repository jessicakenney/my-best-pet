$(function() {
// $(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("lightbackground");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("darkbackground");
  });
  $(".clickable").click(function() {
    $("#chicken").toggle();
    $("togglechicken").toggle();
  });
});
