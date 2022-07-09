$(window).resize(function() {
  var width = $(window).width();
  if (width < 600){
$(".signatureContainer").remove();
  }
});
