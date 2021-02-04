$(document).ready(function() {

    ToggleMobileNavigation();
    SetFormCustomMessages();
    InitScrollspyListeners();
    SetupIsotope();

    $("#preloader").delay(350).fadeOut('slow');
    $("#navbar-works-large .list-inline-item").on('click', function() {
        $(".list-inline-item").each(function() {
            $(this).removeClass("current").addClass("text-secondary");
        });
        $(this).toggleClass("current").removeClass("text-secondary");
    });
    $("#works li").on("click", function() {
        const customType = $(this).data('filter');
        $("#works-block").isotope({
            filter: customType
        });
    });
    $("#navigation li").on('click', function() {
        if ($(document).width() < 768) {
            $("#left-block").removeClass("d-inline").addClass("d-none");
        };
    });

    function SetFormCustomMessages() {
        $("#submit-button").on("click", function() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;
            if (name == "") {
                UpdateMessage("emptyname");
                return false
            }
            if (email == "") {
                UpdateMessage("emptymail");
                return false
            } else {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(email)) {
                    UpdateMessage("mailformatinvalid");
                    return false
                }
            }
            if (subject == "") {
                UpdateMessage("emptysubject");
                return false
            }
            if (message == "") {
                UpdateMessage("emptymessage");
                return false
            }
            UpdateMessage("sending");

            function UpdateMessage(whichCase) {
                const FormMessage = (CustomMessage) => ({
                    "emptyname": "Name cannot be empty.",
                    "emptymail": "Email cannot be empty.",
                    "mailformatinvalid": "Email format invalid!!",
                    "emptysubject": "Subject cannot be empty!!",
                    "emptymessage": "Message cannot be empty!!",
                    "sending": "Sending...."
                })[CustomMessage]
                var htmlElement = `<span class="text-danger font-weight-bold"> ${FormMessage(whichCase)} </span>`;
                document.querySelector('.status').innerHTML = htmlElement;
            };
        });
    };

    function SetupIsotope() {
        $("#works-block").isotope({
            itemSelector: '.works',
            layoutMode: 'fitRows'
        });
    };

    function ToggleMobileNavigation() {
        $('#navigation-button').on('click', function() {
            $("#left-block").toggleClass("d-inline");
        });
        $('#close-button').on('click', function() {
            $("#left-block").removeClass("d-inline").addClass("d-none");
        });
    }

    function InitScrollspyListeners() {
        $(window).on('activate.bs.scrollspy', function() {
            $(".nav-link").each(function() {
                $(this).hasClass("active") ? $(this).children("span").addClass("red-background") : $(this).children("span").removeClass("red-background");
            });
        });
    };
});