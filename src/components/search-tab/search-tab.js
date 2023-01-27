$('.dropdown-menu-tab button[data-bs-toggle="tab"]').on('click', function (e) {
  e.stopPropagation();       
  $(this).tab('show');
});