// click on .map-action__item(data-target="#content") and scroll to specific .city-content__item#content
let mapItem = document.querySelectorAll('.map-action__item');
let cityItem = document.querySelectorAll('.city-content__item');
let cityContentWindow = document.querySelector('.city-content');
mapItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    cityItem.forEach((item, index) => {
      item.classList.remove('active');
    });
    cityItem[index].classList.add('active');

    // scroll to active cityItem
    cityContentWindow.scrollTo({
      top: cityItem[index].offsetTop,
      behavior: 'smooth'
    });
  });
});