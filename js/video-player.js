$(function(){

  var clicks = 1,
      distance = 50,
      speed = 600;

  // function animateTray() {
  //   $('.slide').animate({'right': distance * clicks +'%'}, speed);
  // }

  $('.next').click(function(){
    //clicks += 1;
    var $cloneSlide = $('.slide:first').clone();
    $('.slide:first').remove();
    $('.slide:last').after($cloneSlide);
    //animateTray();
  });


   $('.prev').click(function(){
    //clicks -= 1;
    var $cloneSlide = $('.slide:last').clone();
    $('.slide:last').remove();
    $('.slide:first').before($cloneSlide);
    //animateTray();
  });

});


// $(document).ready(function() {

//   //move the last list item before the first item. The purpose of this is if the user clicks previous he will be able to see the last item.
//   $('.slide:first').before($('.slide:last'));

//   //when user clicks the image for sliding right
//   $('.next').click(function(){

//     //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
//     var item_width = $('.slide').outerWidth();

//     //calculate the new left indent of the unordered list
//     var left_indent = parseInt($('.tray').css('left')) - item_width;

//     //make the sliding effect using jquery's anumate function '
//     $('.tray').animate({'left' : left_indent},{queue:false, duration:500},function(){

//         //get the first list item and put it after the last list item (that's how the infinite effects is made) '
//         $('.slide:last').after($('.slide:first'));

//         //and get the left indent to the default -210px
//         $('.tray').css({'left' : '-25%'});
//     });
//   });

//   //when user clicks the image for sliding left
//   $('.prev').click(function(){

//     var item_width = $('.slide').outerWidth();

//     /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
//     var left_indent = parseInt($('.tray').css('left')) + item_width;

//     $('.tray').animate({'left' : left_indent},{queue:false, duration:500},function(){

//       /* when sliding to left we are moving the last item before the first item */
//       $('.slide:first').before($('.slide:last'));

//       /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
//       $('.tray').css({'left' : '-210px'});
//     });

//   });

// });
