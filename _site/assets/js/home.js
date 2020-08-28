(function ($) {


    // NOME ALTERAR COM O SCROLL

    (function () {
        var lastScrollY = 0;
        var ticking = false;
        var scrolldist, posX, posY;

        $("#sticky-bottom").stop().hide();
        var update = function () {
            if (lastScrollY < 700 && window.matchMedia('(max-width:767px)').matches) {
                scrolldist = lastScrollY * 0.05;

                document.querySelector("#name h1").style.transform = "scale3d(calc(1 - " + scrolldist*0.02 + "),calc(1 + " + scrolldist*0.05 + "),1)";
                $("#sticky-bottom").stop().fadeOut(50);

            } else if (lastScrollY < 1000 && window.matchMedia('(min-width:768px)').matches) {
                scrolldist = lastScrollY * 0.02;

                document.querySelector("#name h1").style.transform = "scale3d(calc(1 + " + scrolldist*0.05 + "), calc(1 - " + scrolldist*0.02 + "),1)";
                $("#sticky-bottom").stop().fadeOut(50);
            } else {
                document.querySelector("#name h1").style.transform = "scale3d(1,1,1)";
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



    //TIMER

    var date = new Date(),
        month = date.getMonth();
    day = date.getDate(),
        weekDay = date.getDay(),
        hours = {
            start: new Date(date.getFullYear(), month, day),
            end: new Date(date.getFullYear(), month, day)
        };

        hours.start.setHours(7);
        hours.end.setHours(23);

    function countDown() {
        var date = new Date(),
            countHours = ('0' + (hours.end.getHours() - date.getHours())).substr(-2),
            countMinutes = ('0' + (59 - date.getMinutes())).substr(-2),
            countSeconds = ('0' + (59 - date.getSeconds())).substr(-2);

        $('.countdown .hours').text(countHours + 'h');
        $('.countdown .minutes').text(countMinutes + 'm');
        $('.countdown .seconds').html(countSeconds + 's');
    }

    $(function () {
        // If it's currently not within the hours, don't show the countdown
        if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours() && !window.location.href.match('/experiments')) {
            window.location.href = "/experiments";
        } else if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()) {
            $('.countdown').hide();
            document.documentElement.style.setProperty('--black', 'white');
            document.documentElement.style.setProperty('--white', 'black');
        } else if ($('.countdown').not(':visible')) {
            $('.countdown').show();
        }

        countDown();
        setInterval(function () {
            countDown();
        }, 1000);

    });


		jQuery('.lazy').Lazy({
			effect: "fadeIn",
			effectTime: 500
		});
		
})(jQuery);
