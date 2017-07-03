$(document).ready(function () {

    /* ------------------ Button Scroll ------------------ */

    $('.js-btn-scroll-meals').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-btn-section-meals').offset().top
        }, 1000);
    });

    $('.js-btn-scroll-features').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-btn-section-features').offset().top
        }, 1000);
    });


    /* ------------------ Links Scroll ------------------ */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    /* ------------------ Animations on Scroll ------------------ */
    /* HEADER */
    $('.js-section-header').waypoint(function(direction) {
        $('.js-section-header').addClass('animated fadeIn');
        $('.hero-text-box').addClass('animated fadeIn');
        $('.main-nav').addClass('animated fadeIn');
    }, 5000);

    /* ABOUT */
    $('.js-section-about').waypoint(function(direction) {
        $('.plant').addClass('animated fadeIn');
        $('.plant2').addClass('animated fadeIn');
        $('.floater .row h2').addClass('animated flipInXTitle');
        $('.floating-div').addClass('animated bounceInUp');
    },{
        offset: '10%'
    });

    $('.js-section-about').waypoint(function(direction) {
        $('.mobile-nav span').hide();
        closeNav();
    });

    /* FEATURES */
    $('.js-section-features').waypoint(function(direction) {
        $('.features-container').addClass('animated slideInDown');
        $('.rolling-pin').addClass('animated rotateInDownRight');
        $('.chef-container').addClass('animated fadeIn');
        $('.js-section-features .row h2').addClass('animated fadeInLeft');
        $('.powder').addClass('animated fadeInHalf');
    },{
        offset: '25%'
    });

    /* HOW IT WORKS */
    $('.js-section-steps').waypoint(function(direction) {
        $('.app-screen').addClass('animated fadeInLeft');
        $('.btn-app').addClass('animated rubberBand');
        $('.js-section-steps .row h2').addClass('animated bounce');
    },{
        offset: '25%'
    });

    /* PLANS */
    $('.js-section-plans').waypoint(function(direction) {
        $('.js-section-plans .row h2').addClass('animated bounce');
        $('.plan-box').addClass('animated fadeInUp');
        $('.plans-btn').addClass('animated flash');
    },{
        offset: '0%'
    });

    /* LOCATIONS */
    $('.js-section-locations').waypoint(function(direction) {
        $('.airplane').addClass('animated fadeInLeftBig');
        $('.section-cities .row h2').addClass('animated fadeInRight');
    },{
        offset: '65%'
    });

    /* TESTIMONIALS */
    $('.js-section-testimonials').waypoint(function(direction) {
        $('.customer-box').addClass('animated fadeIn');
        $('.js-section-testimonials .row h2').addClass('animated bounce');
    },{
        offset: '20%'
    });

    /* MEALS */
    $('.js-section-meals').waypoint(function(direction) {
        $('.collage--spotlight').addClass('animated fadeInUp');
    },{
        offset: '15%'
    });

    /* CONTACT */
    $('.js-section-contact').waypoint(function(direction) {
        $('form h3').addClass('animated tada');
    },{
        offset: '80%'
    });

    $('.js-section-contact').waypoint(function(direction) {
        $('.js-section-contact .row h2').addClass('animated fadeInUp');
        $('.js-section-contact .row h3:nth-child(2)').addClass('animated fadeInUp');
    },{
        offset: '20%'
    });

    /* FOOTER */
    $('.js-section-contact').waypoint(function(direction) {
        $('.footer-logo').addClass('animated bounce');
    },{
        offset: '10%'
    });
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.querySelector('.mobile-nav span').style.display = 'none';
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.querySelector('.mobile-nav span').style.display = 'block';
}
