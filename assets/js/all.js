(function ($) {
    
    (function () {
        var lastScrollY = 0;
        var ticking = false;

        $("#sticky-bottom").stop().hide();
        var update = function () {
            if (lastScrollY < 500) {
                $("#sticky-bottom").stop().fadeOut(50);
            } else {
                $("#sticky-bottom").stop().fadeIn(50);
            }
            ticking = false;
        };
        var requestTick = function () {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };
        var onScroll = function () {
            lastScrollY = window.scrollY;
            requestTick();
        };
        $(window).on('scroll', onScroll);
    })();
    
})(jQuery);