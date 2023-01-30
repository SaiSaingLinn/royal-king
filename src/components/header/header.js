// When the user scrolls down 80px from the top of the document, resize the .navbar-brand's img size and hide the #navbar-content's .contact-info and border transparent the #navbar-content's #navbar-content-item
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 80) {
        $('header').css('position', 'fixed');
        $('header .navbar-brand img.desktop').css('width', '100px');
        $('header #navbar-content .navbar-content-wrapper').css('row-gap', '0px');
        $('header #navbar-content .contact-info').css({
            'visibility': 'hidden',
            'opacity': '0',
            'height': '0',
            'overflow': 'hidden'
        });
        $('header #navbar-content #navbar-content-item').css('border-color', 'transparent');
    } else {
        $('header .navbar-brand img.desktop').css('width', '130px');
        $('header #navbar-content .navbar-content-wrapper').css('row-gap', '30px');
        $('header #navbar-content .contact-info').css({
            'visibility': 'visible',
            'opacity': '1',
            'height': 'auto',
            'overflow': 'visible'
        });
        $('header #navbar-content #navbar-content-item').css('border-color', 'rgba(255, 255, 255, 0.1)');
    }
});