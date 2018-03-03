import { sensitiveWords } from '.';

test('replaces blacklisted words with asterisks', () => (
  expect(sensitiveWords('ja sam antonio erdeljac', ['erdeljac']))
    .toBe('ja sam antonio ****')
));

test('replaces multiple instances of blacklisted words', () => (
  expect(sensitiveWords('ja sam erdeljac antonio erdeljac', ['erdeljac']))
    .toBe('ja sam **** antonio ****')
));