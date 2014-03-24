!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make();
  else if (typeof define == 'function' && define.amd) define(make);
  else if (!name) make();
  else root[name] = make();
}(this, '', function() {

});