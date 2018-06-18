$(function() {
    var OVERALL_DELAY = 500;
    var FLICKER_DELAY = 10;
    var FLICKER_ITERATIONS = 5;

    $.fn.extend({
       qcss: function(css) {
          return $(this).queue(function(next) {
             $(this).css(css);
             next();
          });
       }
    });

    $('.start-hidden').each(function() {
        var $e = $(this).delay(OVERALL_DELAY * Math.random());
        for (var i = 0; i < FLICKER_ITERATIONS; i++) {
            $e.qcss({opacity: 1})
                .delay(FLICKER_DELAY)
                .qcss({opacity: 0})
                .delay(FLICKER_DELAY);
        }
        $e.qcss({opacity: 1});
    });
});
