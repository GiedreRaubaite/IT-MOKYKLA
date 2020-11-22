$(document).ready(function () {
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
});