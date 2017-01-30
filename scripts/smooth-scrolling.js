$(function () {
    
    $("#main-nav ul li a[href^='#']").on('click', function (e) {
        e.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 49
        }, 300, function () {
            window.location.hash = hash;
        });
    });

    $('body').append('<div id="scroll-to-top"><i class="fa fa-arrow-up"/></div>');

    $("#scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 200, function() {
            window.location.hash = "#header";
        });
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0)
            $("#scroll-to-top").fadeIn();
        else
            $('#scroll-to-top').fadeOut();
    });
    
    /* Parallax */
    $window = $(window);
    
    $('div[data-type="background"]').each(function () {
        var $scroll = $(this);

        function UpdateBackgroundPosition() {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            // center
            yPos -= 62;
            var coords = '50% ' + yPos + 'px';

            $scroll.css({ backgroundPosition: coords });
        }

        UpdateBackgroundPosition();

        $(window).scroll(function () {
            UpdateBackgroundPosition();
        });
    });




    /* Resize */

    function updateHeaderHeight() {
        var height = ($window.height() + 10) + "px";

        $("#header").css({ "min-height": height, "max-height": height });
    }

    updateHeaderHeight();

    $window.resize(updateHeaderHeight)
});
