$('.news-slider').slick({
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '100px',
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
        centerPadding: '0px',
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
});