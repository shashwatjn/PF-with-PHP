$(window).on("load", function () {

    $(".loader .inner").fadeOut(200, function () {
        $(".loader").fadeOut(450);
    });

    var $container = $('.items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 2500,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["CFA LEVEL 1 CANDIDATE", "EQUITY DERIVATIVE ANALYST", "RESEARCH ANALYST"],
        typeSpeed: 70,
        loop: true,
        startDelay: 400,
        showCursor: false

    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function () {

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })

            countUpFinished = true;


        }


    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        var $container = $('.items');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 80 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    }

    function sendEmail(){
        var name = $("#name");
        var email = $("#email");
        var subject = $("#subject");    
        var message = $("#message");

        if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message));
          $.ajax({
            url: 'contact-form.php',
            method: 'POST',
            dataType: 'json',
            data:{
                name: name.val(),
                email: email.val(),
                subject: subject.val(),
                message: message.val()
            }, success: function(response){
                $('service')[0].reset(); 
                $('.service').text("Mail Sent");
            }
          });

    }
        function isNotEmpty(caller){
            if(caller.val()==""){
                caller.css('border','1px solid red');
            }
            else{
                caller.css('border','');
                return true;
            }
        }

});
