!function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('aok') : root.aok;
  var api = common ? require('../src') : root[''];
  aok.log(api);
  aok('example test', true);
}(this);