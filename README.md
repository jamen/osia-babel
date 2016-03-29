# osia-babel
> Osia plugin for Babel

An [Osia][osia] plugin for using [Babel][babel] to transpile ES6 to ES5:
```javascript
const osia = require('osia');
const babel = require('osia-babel');

osia.task('build:javascript' () =>
  osia.open('src/**/*.js')
    .then(babel(options))
    .then(osia.save('lib'))
);
```

## Installation
```shell
$ npm install --save-dev osia-babel
```

## API

### `babel(options)`
The plugin to use Babel in Osia.
 - `options` (`Object`): Any of [Babel's options][babel-options]

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
  [osia]: https://github.com/jamen/osia
  [babel]: http://babeljs.io/
  [babel-options]: http://babeljs.io/docs/usage/options/
