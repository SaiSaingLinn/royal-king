// click on #priceTabContent button and get data-value and set to parent's closest input#priceRange
$('#priceTabContent button').on('click', function (e) {
  e.stopPropagation()
  var value = $(this).data('value');
  var unit = $(this).data('unit');
  var label = $(this).data('label');

  // find this parent input#priceUnit
  var inputPriceUnit = $(this).parents('.dropdown').siblings('#priceUnit')

  // find this parent input#priceRange
  var inputPriceRange = $(this).parents('.dropdown').siblings('#priceRange')
  
  // remove value from input #priceRange
  // and remove active class from button
  // remvoe value from parent .dropdown-toggle .price-toggle-label .label
  // if user click on button again
  if ($(this).hasClass('active')) {
    inputPriceRange.val('');
    inputPriceUnit.val('');
    $(this).removeClass('active');

    // get label from .price-toggle-label .initial-label
    var initialLabel = $(this).parents('.dropdown').find('.price-toggle-label .initial-label').text();
    $(this).parents('.dropdown').find('.price-toggle-label .label').text(initialLabel);
  } else {
    // set value to parent input
    inputPriceRange.val(value);
    
    // set value to parent input
    inputPriceUnit.val(unit);

    // set value to parent .dropdown-toggle .price-toggle-label .label
    $(this).parents('.dropdown').find('.price-toggle-label .label').text(label);

    // add active class to button
    $(this).parents('.tab-content-wrap').find('button').removeClass('active');
    $(this).addClass('active');
  }
});