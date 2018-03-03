'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replaces blacklisted words with asterisks', function () {
  return expect((0, _2.default)('ja sam antonio erdeljac', ['erdeljac'])).toBe('ja sam antonio ****');
});

test('replaces multiple instances of blacklisted words', function () {
  return expect((0, _2.default)('ja sam erdeljac antonio erdeljac', ['erdeljac'])).toBe('ja sam **** antonio ****');
});