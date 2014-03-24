exports.description = 'Create a universal module';
exports.notes = 'Fields are used to create a package.json file.\n' + 
  '.version should adhere to semver.org\n' + 
  '.main is used to generate build filenames\n' + 
  '.repo assumes GitHub if like: username/project\n';
exports.after = 'Open package.json and update fields as needed.\n' +
  'Remove the .private field when ready to npm publish.\n' + 
  'Google package.json for info.';
exports.warnOn = '*'; // paths

exports.template = function(grunt, init, done) {
  var name;
  init.process({type: 'universal'}, [
    name = init.prompt('name'),
    init.prompt('description', ''),
    init.prompt('version', '0.0.0'),
    init.prompt('license', 'MIT'),
    init.prompt('author_name'),
    init.prompt('main', 'index.js'),
    init.prompt('repo', function(value, data, done) {
      grunt.util.spawn({
        cmd: 'git',
        args: ['config', '--get', 'github.user'],
        fallback: 'none'
      }, function(err, result) {
        done(err, result + '/' + name.default);
      });
    })
  ], function(err, data) {
    data.repo = data.repo.split('//github.com/').pop();
    data.author = data.author_name;
    data.keywords = [];
    data.homepage = data.repo ? 'https://github.com/' + data.repo : '';
    data.repository = {type: 'git'};
    data.repository.url = data.repo ? 'https://github.com/' + data.repo + '.git' : '';
    init.copyAndProcess(init.filesToCopy(data), data);
    done();
  });
};