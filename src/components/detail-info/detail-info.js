// click on #map-icon and scroll to #map and made offset top 30px
let mapIcon = document.querySelector('#map-icon');
mapIcon.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector('#map').offsetTop - 30,
    behavior: 'smooth'
  });
});