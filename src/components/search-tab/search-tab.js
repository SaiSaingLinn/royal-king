$('.dropdown-menu-price button[data-bs-toggle="tab"]').on('click', function (e) {
  e.stopPropagation();       
  $(this).tab('show');
})

// // sale tab get button data-value and set to option
// $('#salePriceTabContent button').on('click', function (e) {
//   e.stopPropagation()
//   var value = $(this).data('value');
//   $('#price-sale option').val(value);
//   $('#price-sale option').text(value);
//   $('#sale-price-tab .dropdown-toggle .price-toggle-label .label').text(value);

//   // add active class to button
//   $('#salePriceTabContent button').removeClass('active');
//   $(this).addClass('active');
// });

// // rent tab button data-value and set to option
// $('#rentPriceTabContent button').on('click', function (e) {
//   e.stopPropagation()
//   var value = $(this).data('value');
//   $('#price-rent option').val(value);
//   $('#price-rent option').text(value);
//   $('#rent-price-tab .dropdown-toggle .price-toggle-label .label').text(value);

//   // add active class to button
//   $('#rentPriceTabContent button').removeClass('active');
//   $(this).addClass('active');
// });