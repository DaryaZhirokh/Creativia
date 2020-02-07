$(document).ready(function(){

  var leftArrow = $("#leftArrow");
  var rightArrow = $("#rightArrow");
  var headBackground = $("#headBackground");

  leftArrow.on('click', function() {
    headBackground.css({"background-image": "url(images/redlady_3.jpg)"})

  });

   rightArrow.on('click', function() {
    headBackground.css({"background-image": "url(images/redlady.jpg)"})
    return false;
  });

});


