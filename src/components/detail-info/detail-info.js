// click on #map-icon and scroll to #map and made offset top 30px
let mapIcon = document.querySelector('.detail-info-wrapper #map-icon');
if (mapIcon) {
  mapIcon.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector('.detail-info-wrapper #map').offsetTop - 130,
      behavior: 'smooth'
    });
  });
}