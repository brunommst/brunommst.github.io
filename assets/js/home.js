//TIMER 

(function ($) {
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
        hours.end.setHours(23);
        // If it's Saturday
    } else if (weekDay >= 6) {
        // Start at 8am, end at 8pm
        hours.start.setHours(8);
        hours.end.setHours(21);
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

    $(function () {
        // If it's currently not within the hours, don't show the countdown
        if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours() && !window.location.href.match('/experiments')) {
            window.location.href = "/experiments";
        } else if (date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()) {
            $('.countdown').hide();
            document.documentElement.style.setProperty('--black', 'white');
            document.documentElement.style.setProperty('--white', 'black');
            console.log('teste');
        } else if ($('.countdown').not(':visible')) {
            $('.countdown').show();
            console.log('teste');
        }

        setInterval(function () {
            countDown();
        }, 1000);

    });

    
    
    
    //    FILTER BUTTON

    if (window.matchMedia('(max-width:500px)').matches) {
        var open = 0;
        if (open == 0) {
            $(".filter").click(function (e) {
                if (!$(".filter-close").is(e.target)) {
                    $(this).find("ul").stop().slideDown(100, 'swing');
                    $(this).animate({
                        width: '290px',
                        height: '230px',
                        marginRight: '0'
                    }, 100).css({
                        borderRight: '1px solid black'
                    });
                    $(".filter-open").hide();
                    $(".filter-close").show();
                    e.stopPropagation();
                    open = 1;
                }
            });
        }

        $("body, .filter-close").click(function () {
            $(".filter-open").show();
            $(".filter-close").hide();
            $(".filter").find("ul").stop().slideUp(100, 'swing');
            $(".filter").css({
                width: '',
                height: '',
                marginRight: '',
                borderRight: ''
            }, 100);
            open = 0;
        });
    }

    $("#everything").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".project").fadeIn();
    });
    $("#product").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".filter-product").fadeIn();
        $(".project").not(".filter-product").fadeOut();
    });
    $("#websites").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".filter-websites").fadeIn();
        $(".project").not(".filter-websites").fadeOut();
    });
    $("#general").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".filter-general").fadeIn();
        $(".project").not(".filter-general").fadeOut();
    });
})(jQuery);



// NOME ALTERAR COM O SCROLL

(function () {
    var lastScrollY = 0;
    var ticking = false;
    var scrolldist, posX, posY;

    $("#sticky-bottom").stop().hide();
    var update = function () {
        if (lastScrollY < 500) {
            scrolldist = lastScrollY * 0.05;
            document.documentElement.style.setProperty('--skew', `scaleY(calc(1 - ${scrolldist*0.05})) scaleX(calc(1 + ${scrolldist*0.02}))`);
            $("#sticky-bottom").stop().fadeOut(50);
        } else {
            document.documentElement.style.setProperty('--skew', `scaleY(0) scaleX(0)`);
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





// NAVEGACAO EM MOBILE

//    if (window.innerWidth < 480) {
//        $("#jumpto").click(function () {
//            if ($(this).hasClass('on')) {
//                $(this).toggleClass('off', 'on');
//                $("#nav").find("a").show(250);
//                $("#nome").stop().css({
//                    "z-index": "-1"
//                }).animate({
//                    opacity: "0.1"
//                });
//            };
//            if ($(this).hasClass('off')) {
//                close();
//            };
//
//            function close() {
//                $("#nav").find("a").hide(250);
//                $("#nome").stop().css({
//                    "z-index": "initial"
//                }).animate({
//                    opacity: "1"
//                });
//            }
//
//        });
//        setTimeout(function () {
//            $("#nav").find("a").hide(250);
//            $("#nome").css({
//                "z-index": "initial"
//            }).animate({
//                opacity: "1"
//            });
//        }, 2000);
//    };


// BOTAO PARA IR PARA O TOPO
function goTop() {
    $("html, body").stop().animate({
        scrollTop: 0
    }, 400, 'swing');
}
