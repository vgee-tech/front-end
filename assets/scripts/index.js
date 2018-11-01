
/*第一屏轮播*/
layui.use('element', function () {
    var element = layui.element;
});
layui.use('carousel', function () {
    var carousel = layui.carousel;
    carousel.render({
        elem: '#header-content',
        width: '100%',
        height: '500px',
        arrow: 'none',
        interval: 6000,
        anim: 'fade',
        indicator: 'none'
    });
});

/*导航栏下拉变白*/
$(function() {
    $(window).scroll(function () {
        $(window).scrollTop() > 200 ? $("#menu").addClass("scroll") : $("#menu").removeClass("scroll");
        $(window).scrollTop() > 200 ? $("#header-logo").addClass("black") : $("#header-logo").removeClass("black");
        $(window).scrollTop() > 200 ? $(".a").addClass("nav") : $(".a").removeClass("nav");
    });
});

