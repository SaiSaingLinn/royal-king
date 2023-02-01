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

// loop through each #photo-nav img and add active class base on #photo-content img src
$('#photo-nav img').each(function () {
  if ($(this).attr('src') == $('#photo-content img').attr('src')) {
    $(this).addClass('active');
  }
  // click on #photo-nav img to change the photo #photo-content img 
  $(this).on('click', function () {
    $('#photo-content img').attr('src', $(this).attr('src'));
    $('#photo-nav img').removeClass('active');
    $(this).addClass('active');
  });
});

// if close bootstrap #videoTour modal also close embed youtube video from modal body
$('#videoTour').on('hidden.bs.modal', function (e) {
  $('#videoTour .modal-body iframe').attr("src", $("#videoTour .modal-body iframe").attr("src"));
});



