
$(window).on("load", function(){
    $("#preloader").delay(350).fadeOut('slow');
});

$(document).ready(function() {
const section = document.querySelector('#counting');
let hasEntered = false;
window.addEventListener('scroll', (e) => {
    const shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;
    if (shouldAnimate && !hasEntered) {
        hasEntered = true;
        $('.numbers').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});
$('#navigationButton').on('click', function () {
    $("#leftBlock").toggleClass("d-inline");
});
$('#closeButton').on('click', function () {
    $("#leftBlock").removeClass("d-inline").addClass("d-none");
});
$(".list-inline-item").on('click', function () {
    $(".list-inline-item").each(function () {
        $(this).removeClass("current");
        $(this).addClass("text-secondary");
    });
    $(this).toggleClass("current");
    $(this).removeClass("text-secondary");
})
$(window).on('activate.bs.scrollspy', function () {
    $(".nav-link").each(function () {
        if ($(this).hasClass("active")) {
            $(this).children("span").css("background", "#ff5959");
        }
        else {
            $(this).children("span").css("background", "#4a63e7");
        }
    });
});
});

