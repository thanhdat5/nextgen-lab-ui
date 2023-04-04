$(function () {
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
      AOS.init();
    }, 1000);
  $('.ntg-content-img-items').slick({
    infinite: false,
  });

  })
