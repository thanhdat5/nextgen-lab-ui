; (function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function ($) {
  'use strict';
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll >= 80) {
      $('.ntg-navbar').addClass('ntg-navbar-fixed');
    } else {
      $('.ntg-navbar').removeClass('ntg-navbar-fixed');
    }
  });

  if ($(window).scrollTop() >= 80) {
    $('.ntg-navbar').addClass('ntg-navbar-fixed');
  } else {
    $('.ntg-navbar').removeClass('ntg-navbar-fixed');
  }

  window.setTimeout(() => {
    $('#CPLoader').fadeOut(500);
  }, 1000);

  $('.ntg-content-img-items').slick({
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  });

  $('.ntg-our-product-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '-100px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });

  $('.ntg-gaming-content-left-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.ntg-gaming-content-right-items'
  })

  $('.ntg-gaming-content-right-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.ntg-gaming-content-left-items',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    dots: true
  })
}))