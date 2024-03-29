(function($, window, document, undefined) {
  "use strict";

  $.fn.chained = function(parent_selector, options) {

      return this.each(function() {

          /* Save this to child because this changes when scope changes. */
          var child   = this;
          var backup = $(child).clone();

          /* Handles maximum two parents now. */
          $(parent_selector).each(function() {
              $(this).bind("change", function() {
                  updateChildren();
              });

              /* Force IE to see something selected on first page load, */
              /* unless something is already selected */
              if (!$("option:selected", this).length) {
                  $("option", this).first().attr("selected", "selected");
              }

              /* Force updating the children. */
              updateChildren();
          });

          function updateChildren() {
              var trigger_change = true;
              var currently_selected_value = $("option:selected", child).val();

              $(child).html(backup.html());

              /* If multiple parents build classname like foo\bar. */
              var selected = "";
              $(parent_selector).each(function() {
                  var selectedClass = $("option:selected", this).val();
                  if (selectedClass) {
                      if (selected.length > 0) {
                          if (window.Zepto) {
                              /* Zepto class regexp dies with classes like foo\bar. */
                              selected += "\\\\";
                          } else {
                              selected += "\\";
                          }
                      }
                      selected += selectedClass;
                  }
              });

              /* Also check for first parent without subclassing. */
              /* TODO: This should be dynamic and check for each parent */
              /*       without subclassing. */
              var first;
              if ($.isArray(parent_selector)) {
                  first = $(parent_selector[0]).first();
              } else {
                  first = $(parent_selector).first();
              }
              var selected_first = $("option:selected", first).val();

              $("option", child).each(function() {
                  /* Remove unneeded items but save the default value. */
                  if ($(this).hasClass(selected) && $(this).val() === currently_selected_value) {
                      $(this).prop("selected", true);
                      trigger_change = false;
                  } else if (!$(this).hasClass(selected) && !$(this).hasClass(selected_first) && $(this).val() !== "") {
                      $(this).remove();
                  }
              });

              /* If we have only the default value disable select with length function */
              if ($("option", child).length === 1 && $(child).val() === "") {
                  $(child).prop("disabled", true);
              } else {
                  $(child).prop("disabled", false);
              }
              if (trigger_change) {
                  $(child).trigger("change");
              }
          }
      });
  };

  /* Alias for those who like to use more English like syntax. */
  $.fn.chainedTo = $.fn.chained;

  /* Default settings for plugin. */
  $.fn.chained.defaults = {};

})(window.jQuery || window.Zepto, window, document);


$("#sale-township").chained("#sale-division");
$("#rent-township").chained("#rent-division");
// $("#mobile-township").chained("#mobile-division");

