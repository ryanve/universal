# universal
#### JavaScript universal module boilerplate

## Usage

- Clone or [download](../../archive/master.zip) this repo and copy files to a new repo or folder
- Edit [src/](src), [test/](test), [package.json](package.json), etc. as needed
- Run `npm install` to install [devDependencies](package.json)

## Features

### UMD

[src/](src/index.js) includes a UMD boilerplate that works in CommonJS, [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), and/or browsers

### Grunt

Included is a [universal GruntFile](GruntFile.js) that works for typical setups and includes common tasks.

```sh
$ grunt jshint:all # jshint all applicable files
$ grunt jshint:sub # jshint in all sub dirs
$ grunt test # run tests
$ grunt build # generate a build in the package root named by .main in package.json
```

### Aok

[test/](test) includes a boilerplate for writing tests [aok](https://github.com/ryanve/aok#readme)

## License

[MIT](package.json#L6-L7)