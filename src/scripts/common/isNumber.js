// query all input with class .isNumber and prevent enter any character except number
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

// query all input with class .isNumber and prevent enter any character except number
$('.isNumber').on('keypress', function (e) {
  return isNumber(e);
});