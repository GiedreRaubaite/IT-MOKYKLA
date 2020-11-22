$(document).ready(function () {
    Counting();
    MobileNavigationClickEvents();
    FormCustomMessages();
    Scrollspy();
    Isotope();
    $("#preloader").delay(350).fadeOut('slow');
    $("#navbarWorksLarge .list-inline-item").on('click', function () {
       $(".list-inline-item").each(function () {
            $(this).removeClass("current");
            $(this).addClass("text-secondary");
        });
        $(this).toggleClass("current");
        $(this).removeClass("text-secondary");
    });
    $("#works li").on("click", function () {
        const customType = $(this).data('filter');
        $("#works-block").isotope({
            filter: customType
        });
    });
    $("#loadMoreButton").on("click", function () {
        let text = $(this).text();
        $("#loadMore").toggleClass("d-none");
        $(this).text(text == " Load More " ? " Show Less " : " Load More ");
        $(".current").trigger("click");
    })
    $("#navigation li").on('click', function () {
        if ($(document).width() < 768) {
            $("#leftBlock").removeClass("d-inline").addClass("d-none");
        }
        else {
            return;
        }
    });

    function FormCustomMessages(){
    $("#submitButton").on("click", function () {
        var name = document.getElementById('name').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = '<span class="text-danger font-weight-bold">Name cannot be empty!! </span>';
            return false;
        }
        var email = document.getElementById('email').value;
        if (email == "") {
            document.querySelector('.status').innerHTML = '<span class="text-danger font-weight-bold">E-mail cannot be empty!! </span>';
            return false;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                document.querySelector('.status').innerHTML = '<span class="text-danger font-weight-bold">Email format invalid!! </span>';
                return false;
            }
        }
        var subject = document.getElementById('subject').value;
        if (subject == "") {
            document.querySelector('.status').innerHTML = '<span class="text-danger font-weight-bold">Subject cannot be empty!! </span>';
            return false;
        }
        var message = document.getElementById('message').value;
        if (message == "") {
            document.querySelector('.status').innerHTML = '<span class="text-danger font-weight-bold">Message cannot be empty!! </span>';
            return false;
        }
        document.querySelector('.status').innerHTML = '<span class="text-success font-weight-bold">Sending.... </span>';
    });
};   
    function Isotope(){
    $("#works-block").isotope({
        itemSelector: '.works',
        layoutMode: 'fitRows'
    });
};
    function MobileNavigationClickEvents() {
        $('#navigationButton').on('click', function () {
        $("#leftBlock").toggleClass("d-inline");
        });
        $('#closeButton').on('click', function () {
            $("#leftBlock").removeClass("d-inline").addClass("d-none");
        });
    }
    function Scrollspy(){
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
    };
});
