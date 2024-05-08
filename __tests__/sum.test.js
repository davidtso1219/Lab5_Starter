// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(sum(1 + 2)).toBe(3);
});
import { sum } from '../code-to-unit-test/sum';
// Test adding zero
test('adds 0 + 5 to equal 5', () => {
  expect(sum(0, 5)).toBe(5);
});