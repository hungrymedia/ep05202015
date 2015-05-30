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
      if(!$(this).hasClass('active')){
        e.preventDefault();
      }
      $(this).toggleClass('active');
    }
  });

  // DISABLE MAP SCROLL
  $('.map').click(function () {
    $('.map iframe').css("pointer-events", "auto");
  });

  $(window).scroll(function() {

    var screenheight = $(window).height();
    var scrollpos = $(window).scrollTop();
    var screenmiddle = $(window).scrollTop() + ($(window).height()/2);
    var slidernavoffset = $("ul.slider_nav").offset();
    var slidernavhalf = (slidernavoffset.top/2);
    var footeroffset = $("#container > footer").offset();
      
    // STICKY HEADER
    console.log("scroll:" + scrollpos, "item:" + headeroffset.top);
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

    // HIDE SLIDER NAV AT FOOTER
    if (screenmiddle >= footeroffset.top) {
      if (!$('ul.slider_nav').hasClass("hide")) {
        $('ul.slider_nav').addClass("hide");
      }    
    } else {
      $('ul.slider_nav').removeClass("hide");
    }

    // ADD REMOVE ACTIVE CLASSES ON SLIDER NAV
    var slider1offset = $(".slide1").offset();
    var slider2offset = $(".slide2").offset();
    var slider3offset = $(".slide3").offset();
    var slider4offset = $(".slide4").offset();
    var slider5offset = $(".slide5").offset();
    var slider6offset = $(".slide6").offset();
    var slider7offset = $(".slide7").offset();
    var slider8offset = $(".slide8").offset();
    
    if (screenmiddle >= slider1offset.top && screenmiddle < (slider1offset.top + screenheight)) { // SLIDE 1
      if (!$('.nav1').hasClass("active")) {
        $('.nav1').addClass("active");
      }    
    } else {
      $('.nav1').removeClass("active");
    }

    if (screenmiddle >= slider2offset.top && screenmiddle < (slider2offset.top + screenheight)) { // SLIDE 2
      if (!$('.nav2').hasClass("active")) {
        $('.nav2').addClass("active");
      }    
    } else {
      $('.nav2').removeClass("active");
    }

    if (screenmiddle >= slider3offset.top && screenmiddle < (slider3offset.top + screenheight)) { // SLIDE 3
      if (!$('.nav3').hasClass("active")) {
        $('.nav3').addClass("active");
      }    
    } else {
      $('.nav3').removeClass("active");
    }

    if (screenmiddle >= slider4offset.top && screenmiddle < (slider4offset.top + screenheight)) { // SLIDE 4
      if (!$('.nav4').hasClass("active")) {
        $('.nav4').addClass("active");
      }    
    } else {
      $('.nav4').removeClass("active");
    }

    if (screenmiddle >= slider5offset.top && screenmiddle < (slider5offset.top + screenheight)) { // SLIDE 5
      if (!$('.nav5').hasClass("active")) {
        $('.nav5').addClass("active");
      }    
    } else {
      $('.nav5').removeClass("active");
    }

    if (screenmiddle >= slider6offset.top && screenmiddle < (slider6offset.top + screenheight)) { // SLIDE 6
      if (!$('.nav6').hasClass("active")) {
        $('.nav6').addClass("active");
      }    
    } else {
      $('.nav6').removeClass("active");
    }

    if (screenmiddle >= slider7offset.top && screenmiddle < (slider7offset.top + screenheight)) { // SLIDE 7
      if (!$('.nav7').hasClass("active")) {
        $('.nav7').addClass("active");
      }    
    } else {
      $('.nav7').removeClass("active");
    }

    if (screenmiddle >= slider8offset.top && screenmiddle < (slider8offset.top + screenheight)) { // SLIDE 8
      if (!$('.nav8').hasClass("active")) {
        $('.nav8').addClass("active");
      }    
    } else {
      $('.nav8').removeClass("active");
    }

    if (screenmiddle >= slider9offset.top && screenmiddle < (slider9offset.top + screenheight)) { // SLIDE 9
      if (!$('.nav9').hasClass("active")) {
        $('.nav9').addClass("active");
      }    
    } else {
      $('.nav9').removeClass("active");
    }

    if (screenmiddle >= slider10offset.top && screenmiddle < (slider10offset.top + screenheight)) { // SLIDE 10
      if (!$('.nav10').hasClass("active")) {
        $('.nav10').addClass("active");
      }    
    } else {
      $('.nav10').removeClass("active");
    }



  });

});