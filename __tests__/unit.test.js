// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber', () => {
  expect(isPhoneNumber('321-456-7890')).toBe(true);
});
test('isPhoneNumber', () => {
  expect(isPhoneNumber('12356sad7890aaa')).toBe(false);
});
test('isPhoneNumber', () => {
  expect(isPhoneNumber('12ddd34567890')).toBe(false);
});

test('isEmail', () => {
  expect(isEmail('example@gmail.com')).toBe(true);
});
test('isEmail', () => {
  expect(isEmail('example@ucsd.edu')).toBe(true);
});
test('isEmail', () => {
  expect(isEmail('example@......sssss')).toBe(false);
});
test('isEmail', () => {
  expect(isEmail('example!!!ucsd.edu......')).toBe(false);
});


test('isStrongPassword', () => {
  expect(isStrongPassword('a_11')).toBe(true);
});
test('isStrongPassword', () => {
  expect(isStrongPassword('c_123')).toBe(true);
});
test('isStrongPassword', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});
test('isStrongPassword', () => {
  expect(isStrongPassword('87654321')).toBe(false);
});

test('isDate', () => {
  expect(isDate('01/01/2021')).toBe(true);
});
test('isDate', () => {
  expect(isDate('01/01/2022')).toBe(true);
});
test('isDate', () => {
  expect(isDate('2020/21/01')).toBe(false);
});
test('isDate', () => {
  expect(isDate('2020/11/01')).toBe(false);
});

test('isHexColor', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});
test('isHexColor', () => {
  expect(isHexColor('#ABC123')).toBe(true);
});
test('isHexColor', () => {
  expect(isHexColor('11111')).toBe(false);
});
test('isHexColor', () => {
  expect(isHexColor('#XXX')).toBe(false);
});
