!function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('aok') : root.aok;
  var api = common ? require('../src') : root['<%= pkg.name %>'];
  aok('export exists', !!api);
}(this);