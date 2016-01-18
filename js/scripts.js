var entry;
var lowered;
var converted;

var convertIt = function(entry) {
  lowered = entry.toLowerCase();
  converted = lowered.replace(/[^a-z0-9\s]/gi, '');
  return converted;
}
