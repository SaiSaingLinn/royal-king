// click on .map-action__item(data-target="#content") and scroll to specific .city-content__item#content
$('.map-action__item').on('click', function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    
    var targetOffset = $(target).offset().top;
    $('.city-content').animate({
        scrollTop: targetOffset
    }, 500);
});