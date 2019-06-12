    // NOME ALTERAR COM O SCROLL

    (function () {
        var lastScrollY = 0;
        var ticking = false;
        var scrolldist, posX, posY;

        var update = function () {
            if (lastScrollY < 500) {
                scrolldist = lastScrollY * 0.05;
                document.documentElement.style.setProperty('--skew', `scaleY(calc(1 - ${scrolldist*0.03})) scaleX(calc(1 + ${scrolldist*0.02}))`);
            } else {
                document.documentElement.style.setProperty('--skew', `scaleY(0) scaleX(0)`);
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
