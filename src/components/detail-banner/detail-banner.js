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
let photoNav = document.querySelectorAll('#photo-nav img');
let photoContent = document.querySelector('#photo-content img');
photoNav.forEach((item, index) => {
  item.addEventListener('click', () => {
    photoNav.forEach((item, index) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    photoContent.src = item.src;
  });
});