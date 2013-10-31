(function(root) {
    var common = typeof module != 'undefined' && !!module.exports;
    var aok = common ? require('../node_modules/aok') : root.aok;
    aok({ id:'example', test:true });
}(this));