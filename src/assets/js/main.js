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
}))