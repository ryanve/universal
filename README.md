# universal
#### [`grunt-init`](https://github.com/gruntjs/grunt-init) template for making a universal JavaScript module

## Features
#### [UMD](https://github.com/umdjs/umd)
[src/](root/src) uses a [UMD boilerplate](root/src/index.js) that works in CommonJS, [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), and/or browsers. The purpose of the UMD pattern is to make code usable in as many contexts as possible. It allows code to work with various build tools.

#### [Grunt](http://gruntjs.com)
The included [universal GruntFile](root/GruntFile.js) uses [these grunt plugins](root/package.json#L15-L20) to perform [common tasks](#grunt-tasks).

<a name="aok"></a>
#### test
[test/](root/test) contains a boilerplate for writing tests with [aok](https://github.com/ryanve/aok) or another test framework.

## Usage

You'll need to have installed [git](http://git-scm.com/downloads), [node.js](http://nodejs.org/download/) (including npm), and [grunt-cli](http://gruntjs.com/getting-started) on your machine.

#### [Install `grunt-init` and the template](http://gruntjs.com/project-scaffolding)

```sh
$ npm install -g grunt-init
$ git clone https://github.com/ryanve/universal.git .grunt-init/universal
```

#### Setup a new project via the template

```sh
$ mkdir example # or clone a repo
$ cd example
$ grunt-init universal
```

#### Install [devDependencies](root/package.json#L15-L20) and then run [grunt tasks](#grunt)

```sh
$ npm install # install dependencies listed in local package.json
```

#### [grunt tasks](root/GruntFile.js#L58-L60)

Builds for distribution are created in the package root via `grunt` based on the [package.json](root/package.json#L10) [`.main`](https://www.npmjs.org/doc/json.html#main) field.

```sh
$ grunt jshint:all # jshint all applicable files
$ grunt jshint:sub # jshint in all sub dirs
$ grunt test # run tests
$ grunt build # generate a build in the package root named by .main in package.json
$ grunt # run the "default" task
```

## Resources
- [<b>jshint</b> options](http://www.jshint.com/docs/options)
- [<b>package.json</b> documentation](https://www.npmjs.org/doc/json.html)
- [<b>semver</b>.org](http://semver.org)
- example modules: [energy](https://github.com/ryanve/energy), [fm](https://github.com/ryanve/fm), [actual](https://github.com/ryanve/actual), [lap](https://github.com/ryanve/lap), [vibe](https://github.com/ryanve/vibe)
- [Ask questions or report issues](../../issues)

## License
MIT