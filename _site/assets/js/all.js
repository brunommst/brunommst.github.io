(function ($) {
    
    $('.lazy').Lazy({
        appendScroll: $('main'),
        effect: "fadeIn",
        effectTime: 500
    });
    
    // BOTAO PARA IR PARA O TOPO
    function goTop() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400, 'swing');
    }
    
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