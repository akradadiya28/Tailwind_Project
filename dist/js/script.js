$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("header").addClass("header-fix");
    }
    else {
        $("header").removeClass("header-fix");
    }
})