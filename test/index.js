(function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('aok') : root.aok;
  var api = common ? require('../src') : root['put export name here'];
  aok('export exists', !!api);
}(this));