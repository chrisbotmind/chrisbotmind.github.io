(function($){
  "use strict";
  
  $(document).ready(function() {
    var top_offset = $('header').height() - 1;
    $('#nav-onepage').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 700,
      scrollOffset: top_offset,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
        //I get fired when the animation is starting
      },
      end: function() {
        //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
      }
    });
  });

})(jQuery);
