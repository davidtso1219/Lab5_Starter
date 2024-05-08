// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Test isPhoneNumber function]
test('Valid phone number should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number without area code should return true', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('Invalid phone number with letters should return false', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});

// Test isEmail function
test('Valid email should return true', () => {
  expect(isEmail('test@ucsd.edu')).toBe(true);
});

test('Valid email with numbers should return true', () => {
  expect(isEmail('test123@ucsd.edu')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(isEmail('test@ucsd')).toBe(false);
});

test('Invalid email without domain should return false', () => {
  expect(isEmail('test@')).toBe(false);
});

// Test isStrongPassword function
test('Valid password should return true', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('Valid password with underscore should return true', () => {
  expect(isStrongPassword('Abcd_1234')).toBe(true);
});

test('Invalid password should return false', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('Invalid password with special characters should return false', () => {
  expect(isStrongPassword('@#Abcd1234')).toBe(false);
});

// Test isDate function
test('Valid date should return true', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('Valid date with single digit month should return true', () => {
  expect(isDate('5/7/2024')).toBe(true);
});

test('Invalid date should return false', () => {
  expect(isDate('12/25/24')).toBe(false);
});

test('Invalid date with letters should return false', () => {
  expect(isDate('ab/12/2024')).toBe(false);
});

// Test isHexColor function
test('Valid hex color should return true', () => {
  expect(isHexColor('#FF0000')).toBe(true);
});

test('Valid hex color with lowercase letters should return true', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});

test('Invalid hex color should return false', () => {
  expect(isHexColor('ZZZZZZ')).toBe(false);
});

test('Invalid hex color with not 3 or 6 digits should return false', () => {
  expect(isHexColor('FF00')).toBe(false);
});