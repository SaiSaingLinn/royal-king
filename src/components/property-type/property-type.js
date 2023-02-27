// click on #typeTabContent button and get data-value and set to parent's closest input#type
$('#typeTabContent button').on('click', function (e) {
  e.stopPropagation()
  var value = $(this).data('value');
  var label = $(this).data('label');
  // find this input type
  var type = $(this).parents('.dropdown').siblings('#type');
  
  // remove value from input #type
  // and remove active class from button
  // remvoe value from parent .dropdown-toggle .type-toggle-label .label
  // if user click on button again
  if ($(this).hasClass('active')) {
    type.val('');
    $(this).removeClass('active');
    $(this).parents('.dropdown').find('.type-toggle-label .label').text('Property Type');
  } else {
    // set value to input 
    type.val(value);

    // set value to parent .dropdown-toggle .type-toggle-label .label
    $(this).parents('.dropdown').find('.type-toggle-label .label').text(label);
    
    // add active class to button
    $(this).parents('.tab-content-wrap').find('button').removeClass('active');
    $(this).addClass('active');
  }
});

if (window.innerWidth < 992) {
  $('#property-type-wrapper .type-lg').remove();
} else {
  $('#property-type-wrapper-sm .type-sm').remove();
}
