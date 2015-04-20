




// Contents of functions.js
;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#main').smoothState({
      	prefetch: true,
      	pageCacheSize: 4,
        // Runs when a link has been activated
        onStart: {
          duration: 500, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            console.log('hello from render: ' + event.target.nodeName );
            $('.about').on('click', function(){
				alert('.about clicked!' + event.target.nodeName);
			});

            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);


$(function () {

	$('.about').on('click', function(){
		alert('.about clicked!' + event.target.nodeName);
	});

	
	// alert ('ola');


});