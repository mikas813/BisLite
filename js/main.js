$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinity: true,
        playSpeed: 500,
    });
  $('.works__inner').slick({
      slidesToShow: 4,
      slideToScroll: 3,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/left-slide.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/right-slide.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 911,
          settings: {
            slidesToShow: 3,  
          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 455,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  });


  $('.header__menu-btn').on('click', function(){
  $('.header__menu > ul').slideToggle();
  });
  
    $('.header__drop-down.drop-down').on('click', function(){
      $(this).children('.drop-down__list').toggleClass('active');//by clicking add a 'class'
      $(this).children('.drop-down__link').toggleClass('active');//by clicking add a 'class'
      
      });  

}); 