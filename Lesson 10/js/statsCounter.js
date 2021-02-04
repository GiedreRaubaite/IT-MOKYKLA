$(document).ready(function() {
    const statsSection = document.getElementById("stats-counter");
    let hasEntered = false;
    window.addEventListener('scroll', (e) => {
        const shouldAnimate = (window.scrollY + window.innerHeight) >= statsSection.offsetTop;
        if (shouldAnimate && !hasEntered) {
            hasEntered = true;
            $('.numbers').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            $('.percent').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: parseInt($(this).text())
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now) + "%");
                    }
                });
            });
        }
    });
});