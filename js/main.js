$(function() {
    $('.start-hidden').each(function() {
        var dx = 70 * (Math.random() - 0.5);
        var dy = 70 * (Math.random() - 0.5);
        var dz = 70 * (Math.random() - 0.5);
        var du = 70 * (Math.random() - 0.5);
        var dv = 70 * (Math.random() - 0.5);
        var dw = 70 * (Math.random() - 0.5);
        $(this).animate({opacity: 1}, {
            step: function (now, fx) {
                var x = dx * (1 - now);
                var y = dy * (1 - now);
                var z = dz * (1 - now);
                var u = du * (1 - now);
                var v = dv * (1 - now);
                var w = dw * (1 - now);
                $(this).css({
                    transform:
                    'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) ' +
                    'rotateX(' + u + 'deg) rotateY(' + v + 'deg) rotateY(' + w + 'deg)',
                });
            },
            duration: 1000,
            easing: 'easeOutCubic',
            queue: false,
            complete: function () {},
        }, 'easeOutCubic');
    });
});
