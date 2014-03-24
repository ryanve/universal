# universal
#### universal module [`grunt-init`](https://github.com/gruntjs/grunt-init) template

## Usage

#### [Install `grunt-init` and the template](http://gruntjs.com/project-scaffolding)

```sh
npm install -g grunt-init
git clone https://github.com/ryanve/universal.git .grunt-init/universal
```

#### Setup a new project via the template

```sh
mkdir example
cd example
grunt-init universal
```

## Features

### UMD

[src](root/src) includes a [UMD boilerplate](root/src/index.js) that works in CommonJS, [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), and/or browsers.

### Grunt

Included is a [universal GruntFile](root/GruntFile.js) that works for typical setups and includes common tasks.

```sh
$ grunt jshint:all # jshint all applicable files
$ grunt jshint:sub # jshint in all sub dirs
$ grunt test # run tests
$ grunt build # generate a build in the package root named by .main in package.json
```

### Aok

[test](root/test) includes a boilerplate for writing tests [aok](https://github.com/ryanve/aok#readme)

## License
MIT