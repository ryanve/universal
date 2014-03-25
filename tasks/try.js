module.exports = function(grunt) {
  grunt.registerTask(require('path').basename(__filename, '.js'), function() {
    var n = 0;
    grunt.file.expand('**/*.json').every(function(file) {
      if (~file.indexOf('node_modules')) return true;
      try {
        JSON.parse(grunt.file.read(file));
      } catch (e) {
        return void grunt.log.warn('Cannot JSON.parse: ' + file);
      }
      grunt.verbose.ok('Can JSON.parse: ' + file);
      return ++n;
    }) && grunt.log.ok('All ' + n + ' .json files could parse.');
  });
};