var entry;
var lowered;
var unSymbol;
var deNumber;
var converted;

var convertIt = function(entry) {
  lowered = entry.toLowerCase();
  unSymbol = lowered.replace(/[^a-z0-9\s]/g, '');
  deNumber = unSymbol.replace(/\d+/g, '');
  converted = deNumber.replace(/\s/g, '');
  return converted;
}

$(document).ready(function() {
  $("form#messageForm").submit(function(event) {
    var encrypted = convertIt($("input#entry").val());
    alert(encrypted);
  });
});
