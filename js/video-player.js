$(function(){

  var clicks = 1,
      initialDistance = 25,
      distance = 50,
      speed = 600;

  function animateTray(dist) {
    $('.tray').animate({'right': dist * clicks+'%'}, speed);
  }

  animateTray(initialDistance);

  $('.next').click(function(){

    clicks += 1;

    var $cloneSlide = $('.slide:first').clone();
    $('.slide:first').remove();
    $('.slide:last').after($cloneSlide);

    animateTray(distance);
  });


   $('.prev').click(function(){

    clicks -= 1;

    var $cloneSlide = $('.slide:last').clone();
    $('.slide:last').remove();
    $('.slide:first').before($cloneSlide);
    
    animateTray(distance);
  });

});