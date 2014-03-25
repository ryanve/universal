# universal
#### JavaScript module [`grunt-init`](https://github.com/gruntjs/grunt-init) template

## Usage

#### [Install `grunt-init` and the template](http://gruntjs.com/project-scaffolding)

```sh
$ npm install -g grunt-init
$ git clone https://github.com/ryanve/universal.git .grunt-init/universal
```

#### Setup a new project via the template

```sh
$ mkdir example
$ cd example
$ grunt-init universal
```

#### Install [devDependencies](root/package.json#L15-L20) and then run [grunt tasks](#grunt)

```sh
$ npm install
$ grunt
```

## Features

### [UMD](https://github.com/umdjs/umd)

[src](root/src) includes a [UMD boilerplate](root/src/index.js) that works in CommonJS, [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), and/or browsers. The purpose of the UMD pattern is to make code usable in as many contexts as possible. It allows code to work with various build tools.

### Grunt

Included is a [universal GruntFile](root/GruntFile.js) that uses [these grunt plugins](root/package.json#L15-L20) to perform [common tasks](root/GruntFile.js#L58-L60).

#### Example grunt commands

```sh
$ grunt jshint:all # jshint all applicable files
$ grunt jshint:sub # jshint in all sub dirs
$ grunt test # run tests
$ grunt build # generate a build in the package root named by .main in package.json
```

### Aok

[test](root/test) includes a boilerplate for writing tests with [aok](https://github.com/ryanve/aok#readme)

## Resources
- [<b>jshint</b> options](http://www.jshint.com/docs/options/)
- [<b>package.json</b> documentation](https://www.npmjs.org/doc/json.html)
- [<b>semver</b>.org](http://semver.org/)
- example modules: [energy](https://github.com/ryanve/energy), [fm](https://github.com/ryanve/fm), [actual](https://github.com/ryanve/actual), [lap](https://github.com/ryanve/lap), [vibe](https://github.com/ryanve/vibe)
- [Ask questions or report issues](../../issues)

## License
MIT