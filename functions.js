
$(document).ready(function(){

	$('.animated').find('p').addClass('paras');

	$('body').on('click', '.about', function(){
		alert('.about clicked! From ready ' + event.target.nodeName);
	});

	$('body').find('.home p').addClass('home-p');
	$('body').find('.about p').addClass('about-p');

});



// Contents of functions.js
;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#main').smoothState({
      	prefetch: true,
      	pageCacheSize: 4,
      	development: true,
      	
        // Runs when a link has been activated
        onStart: {
          duration: 500, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // console.log('hello from render: ' + event.target.nodeName );
            // $('.about').on('click', function(){
				// alert('.about clicked!' + event.target.nodeName);
			// });

            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        },


        onEnd : {
                duration: 400, // Duration of the animations, if any.
                render: function (url, $container, $content) {
                    $body.css('cursor', 'auto');
                    $body.find('a').css('cursor', 'auto');
                    $container.html($content);
                    // $(document).ready();
                    // $(window).trigger('load');
                    console.log('onEnd!');
                    $.readyFn.execute();
                    // $body.find('.home p').addClass('home-p');
                    // $body.find('.about p').addClass('about-p');

     //                $body.on('click', '.about', function(){
					// 	alert('.about render clicked! ' + event.target.nodeName);
					// });
                }
            },

        callback : function(url, $container, $content) {

        	// this the thingy
        	$(function(){
        		$.readyFn.execute();
        	});

        	// $.readyFn.execute();


				// $(function() {
				// 	$('body').on('click', '.about', function(){
				// 		alert('.about clicked!' + event.target.nodeName);
				// 	});
				// });
			}

      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);
