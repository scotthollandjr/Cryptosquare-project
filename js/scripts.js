var entry;
var lowered;
var converted;


var convertIt = function(entry) {
  lowered = entry.toLowerCase();
  converted = (lowered.replace(/[^a-z]/ig, ''));
  return converted;
}

// converted.length %% (this many columns)

$(document).ready(function() {
  $("form#messageForm").submit(function(event) {
    var encrypted = convertIt($("input#entry").val());
    alert(encrypted);
  });
});
