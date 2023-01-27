// click on #typeTabContent button and get data-value and set to parent's closest input#type
$('#typeTabContent button').on('click', function (e) {
  e.stopPropagation()
  var value = $(this).data('value');

  // find this input type
  var type = $(this).parents('.dropdown').siblings('#type');
  // set value to input 
  type.val(value);

  // set value to parent .dropdown-toggle .type-toggle-label .label
  $(this).parents('.dropdown').find('.type-toggle-label .label').text(value);
  
  // add active class to button
  $(this).parents('.tab-content-wrap').find('button').removeClass('active');
  $(this).addClass('active');
});