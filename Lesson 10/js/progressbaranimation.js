$(document).ready(function() {
    $('.progress .progress-bar').css("width", 0);
    const progressSection = document.getElementById("skills");
    let hasEntered = false;
    window.addEventListener('scroll', (e) => {
        const shouldAnimate = (window.scrollY + window.innerHeight) >= progressSection.offsetTop;
        if (shouldAnimate && !hasEntered) {
            hasEntered = true;
            $('.progress .progress-bar').css("width", function() {
                return $(this).attr("aria-valuenow") + "%";
            })
        };
    });
});