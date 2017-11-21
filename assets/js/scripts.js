jQuery(function($) {'use strict';

  $('ul.nav li.dropdown').hover(function() {
      if (!$('.navbar-toggle').is(':visible')) {
          $(this).toggleClass('open', true);
      }
    }, function() {
      if (!$('.navbar-toggle').is(':visible')) {
          $(this).toggleClass('open', false);
      }
    });
    $('ul.nav li.dropdown a').click(function(){
      if (!$('.navbar-toggle').is(':visible') && $(this).attr('href') != '#') {
          $(this).toggleClass('open', false);
          window.location = $(this).attr('href')
      }
  });
}); //jQuery

//preloader
jQuery(window).on('load',function(){
    jQuery('.page-loader-wrapper').fadeOut();
    jQuery('.loader').delay(450).fadeOut('slow');
    jQuery('body').delay(450);
});
