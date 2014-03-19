//github.com/ryanve/universal#grunt
module.exports = function(grunt) {  
  var _ = grunt.util._;
  var fs = require('fs');
  var exists = _.compose(fs.existsSync.bind(fs), _.identity);
  var pkg = grunt.file.readJSON('package.json');
  var path = require('path');
  var main = pkg.main && path.basename(pkg.main) || 'index.js';
  var srcs = [_.find(['src/index.js', 'src/' + main, 'src/' + pkg.name], exists)];

  function has(task) {
    return !!grunt.task._tasks[task.split(':')[0]];
  }

  grunt.initConfig({
    pkg: pkg,
    jshint: {
      all: ['./'], // deep
      dir: ['*.js'], // shallow
      sub: ['*/'], // sub dirs
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
        banner: function(file) {
          var resolved = path.resolve(file);
          return grunt.file.read(exists(resolved) ? resolved : file);
        }('src/banner.js')
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

  exists('tasks') && grunt.loadTasks('tasks');
  _.keys(pkg.devDependencies).some(function(name) {
    this.test(name) && grunt.loadNpmTasks(name);
  }, /^grunt-|aok/);

  grunt.registerTask('test', ['jshint:sub', 'jshint:grunt', 'aok'].filter(has));
  grunt.registerTask('build', ['test', 'concat:build', 'jshint:build', 'uglify'].filter(has));
  grunt.registerTask('default', [has('concat') ? 'build' : 'jshint:all'].filter(has));
};