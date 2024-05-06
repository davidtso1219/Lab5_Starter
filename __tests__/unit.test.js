// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('This returns true for valid phoneRegex format', () => {
  expect(isPhoneNumber('415-123-1111')).toBe(true);
});

test('This returns true for valid phoneRegex format', () => {
  expect(isPhoneNumber('(415) 123-1111')).toBe(true);
});

test('This returns false for invalid phoneRegex format', () => {
  expect(isPhoneNumber('4151231111')).toBe(false);
});

test('This returns false for invalid phoneRegex format', () => {
  expect(isPhoneNumber('415-23-11')).toBe(false);
});


// isEmail
test('This returns true for valid emailRegex foramt', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('This return true for valid emailRegex foramt', () => {
  expect(isEmail('other_user@example.com')).toBe(true);
});

test('This return false for invalid emailRegex foramt', () => {
  expect(isEmail('example.com')).toBe(false);
});

test('This return false for invalid emailRegex foramts', () => {
  expect(isEmail('user@.com')).toBe(false);
});


// isStrongPassword
test('This returns true for valid pwRwgex format', () => {
  expect(isStrongPassword('w12345')).toBe(true);
});

test('This returns true for valid pwRwgex format', () => {
  expect(isStrongPassword('w1234_5ab')).toBe(true);
});

test('This returns false for invalid pwRwgex format', () => {
  expect(isStrongPassword('w12')).toBe(false);
});

test('This return false for invalid pwRwgex format', () => {
  expect(isStrongPassword('12324')).toBe(false);
});


// isDate
test('This returns true for valid dateRegex format', () => {
  expect(isDate('05/04/2024')).toBe(true);
});

test('This returns true for valid dateRegex format', () => {
  expect(isDate('5/4/2024')).toBe(true);
});

test('This returns false for invalid dateRegex format', () => {
  expect(isDate('05/04/202')).toBe(false);
});

test('This returns false for invalid dateRegex format', () => {
  expect(isDate('05042024')).toBe(false);
});


// isHexColor
test('This returns true for valid colorRegex foramt', () => {
  expect(isHexColor('#abc123')).toBe(true);
});

test('This returns true for valid colorRegex foramt', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('This returns false for invalid colorRegex format', () => {
  expect(isHexColor('#a')).toBe(false);
});

test('This returns false for invalid colorRegex format', () => {
  expect(isHexColor('#1234fdsdgwhs')).toBe(false);
});

