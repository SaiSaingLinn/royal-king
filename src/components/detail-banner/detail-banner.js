$('.detail-banner-slider').slick({
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '400px',
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '200px',
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
      }
    }
  ]
});

// click on #photo-nav img to change the main photo #photo-content img 
// and add active in photoNav 
// and add first photoNav active
$('#photo-nav img').on('click', function() {
  $('#photo-content img').attr('src', $(this).attr('src'));
  $('#photo-nav img').removeClass('active');
  $(this).addClass('active');
  $('#photo-nav img').first().addClass('active');
});

