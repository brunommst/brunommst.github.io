//  FILTER BUTTON

(function ($) {
    if (window.matchMedia('(max-width:768px)').matches) {
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
                    $(".project").css({
                        pointerEvents: 'none'
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
            $(".project").css({
                pointerEvents: ''
            });
            open = 0;
        });
    }

    $("#everything").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".project").fadeIn(240);
    });
    $("#product").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".filter-product").fadeIn(240);
        $(".project").not(".filter-product").fadeOut(240);
    });
    $("#websites").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".filter-websites").fadeIn(240);
        $(".project").not(".filter-websites").fadeOut(240);
    });
    $("#general").click(function () {
        $(this).addClass("filter-selected").siblings().removeClass("filter-selected");
        $(".filter-general").fadeIn(240);
        $(".project").not(".filter-general").fadeOut(240);
    });
    
})(jQuery);
