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

    // If it's Monday - Friday
    if (weekDay >= 1 && weekDay <= 5) {
        // Start at 7am, end at 8pm
        hours.start.setHours(7);
        hours.end.setHours(15);
        // If it's Saturday
    } else if (weekDay >= 6) {
        // Start at 8am, end at 8pm
        hours.start.setHours(9);
        hours.end.setHours(20);
    }

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
    }

    $(function () {
        if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()) {
            // THIS MEANS THAT WE OUTSIDE OF INTERVAL
document.documentElement.style.setProperty('--black', 'white');
            document.documentElement.style.setProperty('--white', 'black');
        } else {
            // THIS MEANS THAT WE INSIDE OF INTERVAL
            document.documentElement.style.setProperty('--black', 'white');
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
            if (lastScrollY < 500) {
                scrolldist = lastScrollY * .2;
                document.documentElement.style.setProperty('--skew', `rotate(${-scrolldist*1}deg) skew(${scrolldist*2}deg)`);
            } else {
                document.documentElement.style.setProperty('--skew', `rotate(0deg)`);
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