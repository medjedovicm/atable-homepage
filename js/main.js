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

    $('#menuToggle').click(function() {
        $('.header').toggleClass('open');
    });

    $('.read-more').click(function() {
        fullpage_api.moveSectionDown();
    });
});