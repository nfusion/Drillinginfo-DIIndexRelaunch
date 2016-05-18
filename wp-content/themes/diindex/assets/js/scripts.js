jQuery(document).foundation();
/*
These functions make sure WordPress
and Foundation play nice together.
*/

jQuery(document).ready(function() {

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();

	 // Makes sure last grid item floats left
	jQuery('.archive-grid .columns').last().addClass( 'end' );

	// Adds Flex Video to YouTube and Vimeo Embeds
  jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
    if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
      jQuery(this).wrap("<div class='widescreen flex-video'/>");
    } else {
      jQuery(this).wrap("<div class='flex-video'/>");
    }
  });

});

(function($){
  'use strict';
  $('#phoneNumbers').on('change', function(){
    var $t = $(this),
        tel = $t.val(),
        display = $t.find('option:selected').attr('data-display'),
        display_div = $('#phoneDisplay');

    //console.log($t,tel,display);

    var html = '<a href=' + tel + '>' + display + '</a>';

    display_div.html(html);
  });
})(jQuery);
