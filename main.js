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

//<!--PRODUCTS-FEATURES-PAGE -->

  $(".feature-block").hover(function(){
    $(this).find(".feature_hexagon").toggleClass("feature_hexagon-toggled");
    $(this).find(".features-tick").toggleClass("tick-toggled");
    $(this).find(".feature-block_title ").toggleClass("title-toggled");
  });

  $(".point").hover(function(){
      $(this).toggleClass("point-toggled");
  });

  $(".point").mouseout(function() {
    if($(this).hasClass('point-toggled')) {
      $(this).toggleClass("point-toggled");
    };
  });

// <!--TEAMWORK-PAGE -->
/*  $(".teamwork_members").click(function(){
   $(this).find(".member_picture-box").toggleClass("member_picture-box-toggled");
  });
  $(".teamwork_members").click(function(){
   $(this).find(".member_picture-alterbox").toggleClass("member_picture-alterbox-toggled");
  });*/

  $(".member").click(function(){
    $(this).find(".member_picture-box").toggleClass("member_picture-box-toggled");
    $(this).find(".member_picture-alterbox").toggleClass("member_picture-alterbox-toggled");
  });

    $(".member").mouseout(function() {
    if($(this).find(".member_picture-alterbox").hasClass('member_picture-alterbox-toggled')) {
      $(this).find(".member_picture-alterbox-toggled").removeClass("member_picture-alterbox-toggled");
      $(this).find(".member_picture-box").toggleClass("member_picture-box-toggled");
    };
  });
 // <!--SERVICES-PAGE -->
  $(".services_list-item").hover(function(){
    $(this).find(".services_list-picture").toggleClass("services_list-picture-toggled");
    $(this).find(".services_list-picture-red").toggleClass("services_list-picture-red-toggled");
  });

//<!--SALE-PAGE -->
  $(".reseller-item").hover(function(){
    $(this).find(".reseller_item-price").toggleClass("reseller_item-price-toggled");
    $(this).find(".reseller-button").toggleClass("reseller-button-toggled");
  });

//<!--BLOG-PAGE -->

    $(".follow-item").hover(function(){
      $(this).find(".follow_hexagon").toggleClass("follow_hexagon-toggled");
      $(this).find(".follow_hexagon-covered").toggleClass("follow_hexagon-covered-toggled");
  });

});
