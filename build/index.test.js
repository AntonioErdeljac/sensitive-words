'use strict';

var _ = require('.');

test('replaces blacklisted words with asterisks', function () {
  return expect((0, _.sensitiveWords)('ja sam antonio erdeljac', ['erdeljac'])).toBe('ja sam antonio ****');
});

test('replaces multiple instances of blacklisted words', function () {
  return expect((0, _.sensitiveWords)('ja sam erdeljac antonio erdeljac', ['erdeljac'])).toBe('ja sam **** antonio ****');
});