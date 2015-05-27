//= require_tree .

$(document).ready(function(){

  var headeroffset = $("header.desktop").offset();
  var slidernavoffset = $("ul.slider_nav").offset();
  var slidernavhalf = (slidernavoffset.top/2);


  

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
    $('body > header').toggleClass('mobile_active');
    $('#container').toggleClass('mobile_active');
    $('body > .news_header').toggleClass('mobile_active');
    $(this).toggleClass('close');
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

    // var screenmiddle = $(window).scrollTop() + ($(window).height()/2);
    var scrollpos = $(window).scrollTop();

    console.log("top:" + scrollpos, "nav:" + slidernavoffset.top, "navmid:" + slidernavhalf);
      
    // STICKY HEADER
    if (scrollpos >= headeroffset.top) {
      if (!$('body > header').hasClass("fixed")) {
        $('body > header').addClass("fixed");
      } 
      if (!$('.sticky_spacer').hasClass("active")) {
        $('.sticky_spacer').addClass("active");
      }    
    } else {
      $('body > header').removeClass("fixed");
      $('.sticky_spacer').removeClass("active");
    }

    // STICKY SLIDER NAV
    if (scrollpos >= slidernavhalf) {
      if (!$('ul.slider_nav').hasClass("sticky")) {
        $('ul.slider_nav').addClass("sticky");
      }    
    } else {
      $('ul.slider_nav').removeClass("sticky");
    }



  });

});