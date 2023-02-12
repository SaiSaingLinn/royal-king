// intial hide #advance-search-input and 
// if click #advance-search toggle #advance-search-input
let saleAdvanceSearchInput = $('#sale-advance-search-input');
let rentAdvanceSearchInput = $('#rent-advance-search-input');
let saleAdvanceSearch = $('#sale-advance-search');
let rentAdvanceSearch = $('#rent-advance-search');

saleAdvanceSearchInput.hide();
saleAdvanceSearch.on('click', function () {
    saleAdvanceSearchInput.toggle();
    // if advanced-search-input is show add class active to #advance-search
    if (saleAdvanceSearchInput.is(':visible')) {
      saleAdvanceSearch.addClass('active');
    } else {
      saleAdvanceSearch.removeClass('active');
    }
});

rentAdvanceSearchInput.hide();
rentAdvanceSearch.on('click', function () {
    rentAdvanceSearchInput.toggle();
    // if advanced-search-input is show add class active to #advance-search
    if (rentAdvanceSearchInput.is(':visible')) {
      rentAdvanceSearch.addClass('active');
    } else {
      rentAdvanceSearch.removeClass('active');
    }
});