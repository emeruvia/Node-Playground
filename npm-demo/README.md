#Section NPM
* Every Node application has a package.json file which includes metadata for the application. It contains the name, version, dependencies, etc.
* npm is used to download and install 3rd party packages from npm registry.
* All packages and dependencies are stored in `node_modules` folders.
* To install/uninstall packages globally, `-g` flag
###Useful npm commands
- npm i <packageName>   // install a package
- npm i <packageName>@<version> // install a specific version of a package
- npm i <packageName> --save-dev    // install a package as a dev dependency
- npm un <packageName>  // uninstall a package
- npm list --depth=0    // list installed packages
- npm outdated  // view outdated packages
- npm updated   // updated packages