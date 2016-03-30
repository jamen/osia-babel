'use strict';

const babel = require('babel-core');
const plugin = require('osia-plugin');

module.exports = function osiaBabel(options) {
  options = options || {};
  return plugin(file => {
    const dist = babel.transform(file.contents, options);
    if (dist.code) file.contents = new Buffer(dist.code);
    return file;
  });
};
