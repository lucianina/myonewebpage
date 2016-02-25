/**
 * Created by luciana on 22/02/16.
 */
$(document).ready(function(){

    $(".bg").interactive_bg();

    $('#fullpage').fullpage({

        anchors: ['onepage', 'twopage', 'threepage','fourpage'],
        menu: '#menu',
        'navigation': true,
        'navigationPosition': 'left',
        'navigationTooltips': ['Home', 'This is me', 'Hobby', 'Contact'],
        loopTop: true,
        loopBottom: true
    });
    var nav = document.getElementById('nav');
    var navlinks = nav.getElementsByTagName('a');

    function toggleNav() {
        (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
    }

    document.getElementById('nav-icon').addEventListener('click', function(e) {
        e.preventDefault();
        toggleNav();
    });

    for(var i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener('click', function() {
            toggleNav();
        });
    }
    $('.imgWrap').hover(function() {
        // $(this).css('width', '36%');
        $(this).addClass('current');
        //$(this).siblings().css('width', '16%');
        $(this).siblings().addClass('notCurrent');
    }, function() {
        //$('.imgWrap').css('width', '20%');
        $('.imgWrap').siblings().removeClass('notCurrent');
        $('.imgWrap').removeClass('current');
    });
});/*end document ready*/

$(window).resize(function() {
    $(".wrapper > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
    })
})

