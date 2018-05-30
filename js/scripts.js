$(document).ready(function() {
  $("button").click(function() {
    $(this).parent().parent().children("div").toggleClass("show_div");
  });
});
