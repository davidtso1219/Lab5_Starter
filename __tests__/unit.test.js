// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Test isPhoneNumber function
test('valid phone number 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number 1', () => {
  expect(isPhoneNumber('12 34 567890')).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber('123-abcdef')).toBe(false);
});


test('valid email 1', () => {
  expect(isEmail('test@hotmail.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('TEST@hotmail.com')).toBe(true);
});

test('invalid email 1', () => {
  expect(isEmail('test@hotmail')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('test@.com')).toBe(false);
});


test('good password 1', () => {
  expect(isStrongPassword('Test1234')).toBe(true);
});

test('good password 2', () => {
  expect(isStrongPassword('a1b2c3d4')).toBe(true);
});

test('bad password 1', () => {
  expect(isStrongPassword('1test')).toBe(false);
});

test('bad password 2', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});

test('valid date 1', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('2000/1/0001')).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate('1-1-2000')).toBe(false);
});


test('good hex color 1', () => {
  expect(isHexColor('#123')).toBe(true);
});

test('good hex color 2', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('bad hex color 1', () => {
  expect(isHexColor('abcdefghijkl')).toBe(false);
});

test('bad hex color 2', () => {
  expect(isHexColor('#12345678')).toBe(false);
});
