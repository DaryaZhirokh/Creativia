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

   $('.info-item').click(function(){
      $(this).find(".radius").toggleClass( "radius-toggle" );
      $(this).find(".info-title").toggleClass( "info-title-toggled" );
      $(this).find(".info-text").toggleClass( "info-text-toggled" );
    });

  $('.strength-item').click(function(){
      $(this).find(".hexagon").toggleClass("hexagon-toggled" );
      let innerHexagon = $(this).find(".inner-hexagon");
      if(innerHexagon.hasClass("heart")) {
        innerHexagon.toggleClass("heart-toggled")
      }
      else if (innerHexagon.hasClass("tick")) {
        innerHexagon.toggleClass("tick-toggled")
      }
       else if (innerHexagon.hasClass("ipad")) {
        innerHexagon.toggleClass("ipad-toggled")
      }
      else if (innerHexagon.hasClass("fire")) {
        innerHexagon.toggleClass("fire-toggled")
      }
      else console.log('Noop')
    });

   $('.portfolio-picture').click(function(){
      $(this).find(".twin-yellow").toggleClass( "yellow-toggled" );
      $(this).find(".twin-blue").toggleClass( "blue-toggled" );
      $(this).find(".twin-pink").toggleClass( "pink-toggled" );
      $(this).find(".twin-white").toggleClass( "white-toggled" );
      $(this).find(".twin-green").toggleClass( "green-toggled" );
      $(this).find(".twin-gray").toggleClass( "gray-toggled" );
      $(this).find(".twin-azure").toggleClass( "azure-toggled" );
      $(this).find(".twin-orange").toggleClass( "orange-toggled" );
   });


});
