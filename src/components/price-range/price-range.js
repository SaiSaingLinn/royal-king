// click on #priceTabContent button and get data-value and set to parent's closest option
$('#priceTabContent button').on('click', function (e) {
  e.stopPropagation()
  var value = $(this).data('value');

  // find this parent option
  var option = $(this).parents('.dropdown').siblings('#price-option-wrapper').find('option');
  // set value to parent option
  option.val(value);
  option.text(value);

  // set value to parent .dropdown-toggle .price-toggle-label .label
  $(this).parents('.dropdown').find('.price-toggle-label .label').text(value);
  
  // add active class to button
  $(this).parents('.tab-content-wrap').find('button').removeClass('active');
  $(this).addClass('active');
});