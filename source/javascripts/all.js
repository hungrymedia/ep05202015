//= require_tree .

$(document).ready(function(){

  var headeroffset = $("header.desktop").offset();

  // SMOOTH SCROLL
  $(function() { 
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // TOGGLE MOBILE NAV ON HAMBURGER CLICK
  $('.hamburger').click(function(e) { 
    e.preventDefault();
    $('.mobile_nav').toggleClass('mobile_active');
    $('#container').toggleClass('mobile_active');
    // FORCE REDRAW IN MOBILE SAFARI
    // if (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
    //   $('.mobile_nav').hide();
    //   $('.mobile_nav').get(0).offsetHeight;
    //   $('.mobile_nav').show();
    //   $('#container').hide();
    //   $('#container').get(0).offsetHeight;
    //   $('#container').show();
    // }
  });

  // TOGGLES SUBNAV ON CLICK
  $('header.desktop nav ul li').click(function(e) {
    if ($(this).has('ul').length > 0) {
      e.preventDefault();
      $(this).toggleClass('active');
    }
  });

  // DISABLE MAP SCROLL
  $('.map').click(function () {
    $('.map iframe').css("pointer-events", "auto");
  });

  $(window).scroll(function() {
      
    // STICKY HEADER
    var scrollpos = $(window).scrollTop();

    if (scrollpos >= headeroffset.top) {
      if (!$('header').hasClass("fixed")) {
        $('header').addClass("fixed");
      }   
    } else {
      $('header').removeClass("fixed");
    }

  });

});