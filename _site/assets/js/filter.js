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
