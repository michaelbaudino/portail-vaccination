/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *
 * Author: Mohiuddin Parekh
 *  http://www.mohi.me
 *  @mohiuddinparekh
 *
 * Adapted by: Michael Baudino
 *  http://www.alpine-lab.com
 *  @michaelbaudino
 *
 */
$(document).ready(function(){
  // Cache the Window object
  $window = $(window);

  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {
      // Scroll the background at var speed
      var yPos = (($window.scrollTop() * 100 / $bgobj.height()) / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '100% ' + (100 - yPos) + '%';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); // window scroll Ends
  });
});


/**
 * Smooth scrolling from CSS-tricks
 *
 * Source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000);
        return false;
      }
    }
  });
});
