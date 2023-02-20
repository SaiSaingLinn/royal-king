// // intial hide #advance-search-input and 
// // if click #advance-search toggle #advance-search-input
// let saleAdvanceSearchInput = $('#sale-advance-search-input');
// let rentAdvanceSearchInput = $('#rent-advance-search-input');
// let saleAdvanceSearch = $('#sale-advance-search');
// let rentAdvanceSearch = $('#rent-advance-search');

// saleAdvanceSearchInput.hide();
// saleAdvanceSearch.on('click', function () {
//     saleAdvanceSearchInput.toggle();
//     // if advanced-search-input is show add class active to #advance-search
//     if (saleAdvanceSearchInput.is(':visible')) {
//       saleAdvanceSearch.addClass('active');
//     } else {
//       saleAdvanceSearch.removeClass('active');
//     }
// });

// rentAdvanceSearchInput.hide();
// rentAdvanceSearch.on('click', function () {
//     rentAdvanceSearchInput.toggle();
//     // if advanced-search-input is show add class active to #advance-search
//     if (rentAdvanceSearchInput.is(':visible')) {
//       rentAdvanceSearch.addClass('active');
//     } else {
//       rentAdvanceSearch.removeClass('active');
//     }
// });

// initial hide advance-search-input and if click advance-search
let advanceSearchInput = $('.advance-search-input');
let advanceSearch = $('.advance-search');

advanceSearchInput.hide();
advanceSearch.on('click', function () {
  // toggle parent's closest advance-search-input
  $(this).parent().siblings('.advance-search-input').toggle();
  // if advanced-search-input is show add class active to advance-search
  if ($(this).parent().siblings('.advance-search-input').is(':visible')) {
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
});