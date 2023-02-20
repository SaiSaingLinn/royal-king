// initial hide #mobile-card-lists
// initial show #mobile-map-search
// toggle between on click #map-btn and #list-btn 
// if #map-btn is clicked remove other active add active in it and hide #mobile-card-lists and show #mobile-map-search
// if #list-btn is clicked remove other active add active in it, hide #mobile-map-search and show #mobile-card-lists

// initial hide #mobile-card-lists
$('#mobile-card-lists').hide();

// initial add active in #map-btn
$('#map-btn').addClass('active');

$('#map-btn').on('click', function () {
  $(this).addClass('active');
  $('#list-btn').removeClass('active');
  $('#mobile-card-lists').hide();
  $('#mobile-map-search').show();
});

$('#list-btn').on('click', function () {
  $(this).addClass('active');
  $('#map-btn').removeClass('active');
  $('#mobile-map-search').hide();
  $('#mobile-card-lists').show();
});

// // if click on #map-search marker open #popupCard modal
// function openPopupCard() {
//   $('#popupCard').modal('show');
// }