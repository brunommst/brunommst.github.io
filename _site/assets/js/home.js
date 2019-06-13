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


    //    FILTER BUTTON

    $(document).ready(function () {
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

    });

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
