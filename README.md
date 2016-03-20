# osia-babel
> Osia plugin for Babel

## Installation
```shell
$ npm install --save-dev osia-babel
```

## `babel(options = {})`
```javascript
const osia = require('osia');
const babel = require('osia-babel');

osia.task('build:javascript' () =>
  osia.open('src/**/*.js')
    .then(babel(options))
    .then(osia.save('lib'))
);
```
 - `options` (Object): Any of [Babel's options][babel-options]

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
  [babel-options]: http://babeljs.io/docs/usage/options/
