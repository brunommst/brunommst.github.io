(function ($) {

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
    
    function itsStilDayTime() {
        $("main > section, footer").not("#timer").hide();
        $("main").addClass('main-vertical-center');
        $("#timer h4").html('Come back later tonight!');
    }

    $(function () {
        if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()) {
            // THIS MEANS THAT WE OUTSIDE OF INTERVAL
            document.documentElement.style.setProperty('--white', 'black');
        } else {
            // THIS MEANS THAT WE INSIDE OF INTERVAL
            document.documentElement.style.setProperty('--white', 'black');
            itsStilDayTime();
        }
        
        countDown();
        setInterval(function () {
            countDown();
        }, 1000);

    });



    // NOME ALTERAR COM O SCROLL

    (function () {
        var lastScrollY = 0;
        var ticking = false;
        var scrolldist, posX, posY;

        $("#sticky-bottom").stop().hide();
        var update = function () {
                scrolldist = lastScrollY * .2;
                document.documentElement.style.setProperty('--skew', `rotate(${-scrolldist*1}deg) skew(${scrolldist*2}deg)`);
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