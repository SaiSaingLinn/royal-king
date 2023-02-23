$('.dropdown-menu-tab button[data-bs-toggle="tab"]').on('click', function (e) {
  e.stopPropagation();       
  $(this).tab('show');
});

// remove mobile action wrapper on lg screen
if (window.innerWidth < 992) {
  $('.search-tab-wrapper-lg').remove();
}