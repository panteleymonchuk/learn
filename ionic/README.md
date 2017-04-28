# Guide to ionic

## List of commands:
* `ionic state restore` quickly load in plugins and platforms
* `ionic state save` save current platforms and plugins to package.json
* `ionic state clear` remove everything
* `ionic state reset` remove everything and return only plugins/platforms from package.json
* `ionic start NixlerApp --no-overwriting --v2` start app with name NixlerApp. Created area for start app.
* `ionic serve` start our app in local server

## Restore project
1. Install basic plugins
- [install NodeJS.](https://nodejs.org/en/)
- `npm install -g gulp`
- `npm install -g ionic`
- `npm install -g cordova`
- `npm install` install all packages from package.json