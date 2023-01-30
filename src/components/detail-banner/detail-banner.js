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

// click on #photo-nav img to change the main photo #photo-content img and add active in photoNav and add first photoNav active
let photoNav = document.querySelectorAll('#photo-nav img');
let photoContent = document.querySelector('#photo-content img');
if (photoNav) {
  photoNav.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      photoContent.src = item.src;
      photoNav.forEach(function (item) {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
  photoNav[0].classList.add('active');
}