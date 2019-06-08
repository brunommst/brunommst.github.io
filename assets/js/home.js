    // NOME ALTERAR COM O SCROLL
    window.onload = function () {
        window.onscroll = function () {
            var scrolldist, posX, posY;
            scrolldist = window.scrollY * 0.1;
            if (window.scrollY < 600) {
                document.documentElement.style.setProperty('--skew', `scaleY(calc(1 - ${scrolldist*0.03})) scaleX(calc(1 + ${scrolldist*0.02}))`);
            } else {
                document.documentElement.style.setProperty('--skew', `scaleY(0) scaleX(0)`);
            };
        }
    }

    // BOTOES DA NAV ANIMAREM A PAGINA
    $(document).ready(function () {
        $("#nav").find("a").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 200);
        });
    });

    // NAVEGACAO EM MOBILE

    if (window.innerWidth < 480) {
        $("#jumpto").click(function () {
            if ($(this).hasClass('on')) {
                $(this).toggleClass('off', 'on');
                $("#nav").find("a").show(250);
                $("#nome").stop().css({
                    "z-index": "-1"
                }).animate({
                    opacity: "0.1"
                });
            };
            if ($(this).hasClass('off')) {
                close();
            };

            function close() {
                $("#nav").find("a").hide(250);
                $("#nome").stop().css({
                    "z-index": "initial"
                }).animate({
                    opacity: "1"
                });
            }

        });
        setTimeout(function () {
            $("#nav").find("a").hide(250);
            $("#nome").css({
                "z-index": "initial"
            }).animate({
                opacity: "1"
            });
        }, 2000);
    };


    // BOTAO PARA IR PARA O TOPO
    function goTop() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400, 'swing');
    }
