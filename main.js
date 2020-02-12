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


    // $('.strength-item').click(function(){
    //   $(this).find(".inner-hexagon-tick").toggleClass(".inner-hexagon-tick-toggled" );
    // });

    // $('.strength-item').click(function(){
    //   $(this).find(".inner-hexagon-ipad").toggleClass(".inner-hexagon-ipad-toggled" );
    // });

    // $('.strength-item').click(function(){
    //   $(this).find(".inner-hexagon-fire").toggleClass(".inner-hexagon-fire-toggled" );
    // });

    // $('.strength-item').click(function(){
    //   $(this).find(".inner-hexagon-heart").toggleClass(".inner-hexagon-heart-toggled" );
    // });




});
