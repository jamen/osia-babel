import test from 'ava';
import babel from '..';
import File from 'vinyl';

const compiled = `"use strict";

var _osia = require("osia");

var _osia2 = _interopRequireDefault(_osia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }`;

test('transform', t => {
  t.plan(1);

  const original = new File({
    path: '/foo/bar/baz.js',
    contents: new Buffer('import osia from "osia";'),
  });

  t.plan(1);
  return babel({ presets: ['es2015'] })([original]).then(files => {
    t.same(files[0], new File({
      path: '/foo/bar/baz.js',
      contents: new Buffer(compiled),
    }));
  });
});
