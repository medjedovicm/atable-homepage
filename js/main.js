// $(document).ready(function() {
// 	$('#pagepiling').pagepiling({
//         easing: 'linear'
//     });
// });

$(document).ready(function() {

    let innerWidth = window.innerWidth;

    if (innerWidth > 1000) {
        new fullpage('#fullpage', {
            //options here
            navigation: true,
            navigationPosition: 'right',
            verticalCentered: true,
        });
    } else {
        $('#topSection').addClass('top-section');
    }

    $('.loading-screen').fadeOut();
    $('body').removeClass('overflow-hidden');

    $('#menuToggle').click(function() {
        $('.header').toggleClass('open');
    });

    $('.read-more').click(function() {
        fullpage_api.moveSectionDown();
    });

    $('#coworkingDetails').click(function() {
        $('#coworkingDetails img').toggleClass('arrow-rotate-bottom');
        
        $('#coworkingBox').toggleClass('opened');
    });

    $('#predictionDetails').click(function() {
        $('#predictionDetails img').toggleClass('arrow-rotate-bottom');
        
        $('#predictionBox').toggleClass('opened');
    });

    $('#chatDetails').click(function() {
        $('#chatDetails img').toggleClass('arrow-rotate-bottom');
        
        $('#chatBox').toggleClass('opened');
    });
});