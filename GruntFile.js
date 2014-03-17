//github.com/ryanve/universal#grunt
//gruntjs.com/configuring-tasks#globbing-patterns
module.exports = function(grunt) {
  var _ = grunt.util._;
  var fs = require('fs');
  var exists = _.compose(fs.existsSync.bind(fs), _.identity);
  var pkg = grunt.file.readJSON('package.json');
  var path = require('path');
  var main = pkg.main && path.basename(pkg.main) || 'index.js';
  var srcs = [_.find(['src/index.js', 'src/' + main, 'src/' + pkg.name], exists)];

  grunt.initConfig({
    pkg: pkg,
    jshint: {
      dir: ['*.js'], // shallow
      sub: ['*/'], // sub dirs
      all: ['./'], // deep
      src: ['src/'],
      test: ['test/'],
      grunt: [path.basename(__filename)],
      build: [main],
      options: _.extend({
        ignores: ['**/**/node_modules/', '**/**/vendor/', '**/**.min.js'] // anywhere
      }, pkg.jshintConfig || exists('.jshintrc') && grunt.file.readJSON('.jshintrc') || {})
    },
    concat: {
      options: {
        banner: exists('src/banner.js') ? grunt.file.read('src/banner.js') : ''
      },
      build: {
        files: _.object([main], [srcs])
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        preserveComments: 'some'
      },
      build: {
        files: _.object([main.replace(/\.js$/i, '.min.js')], [main])
      }
    },
    aok: {
      test: ['./test'] 
    }
  });

  // Load any local tasks and then load npm ones
  exists('tasks') && grunt.loadTasks('tasks');
  _.keys(pkg.devDependencies).some(function(name) {
    this.test(name) && grunt.loadNpmTasks(name);
  }, /^grunt-|aok/);

  grunt.registerTask('test', ['jshint:sub'].concat(pkg.devDependencies.aok ? 'aok' : []));
  grunt.registerTask('build', ['jshint:grunt', 'test', 'concat:build', 'jshint:build', 'uglify']);
  grunt.registerTask('default', ['build']);
};