$(document).ready(function(){       
  $('.slider__box').slick({
    prevArrow: '<img src="img/Arrow-left.png" alt="arrow-left" class="slider__arrow slider__arrow-left">',
    nextArrow: '<img src="img/Arrow-right.png" alt="arrow-right" class="slider__arrow slider__arrow-right">',
   })

  $('.header__menu-burger').click(function(){
    $('.header__menu-burger').toggleClass('open-menu');
    $('.header_menu').toggleClass('open-menu');
  });
});

