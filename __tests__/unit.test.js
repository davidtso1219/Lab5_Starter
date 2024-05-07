// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber() unit tests
test('checks if 646-467-3046 is a phone number', () => {
  expect(isPhoneNumber('646-467-3046')).toBe(true);
});

test('checks if 000-000-0000 is a phone number', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
});

test('checks if aaa-aaa-aaaa is a phone number', () => {
  expect(isPhoneNumber('aaa-aaa-aaaa')).toBe(false);
});

test('checks if 123-123 is a phone number', () => {
  expect(isPhoneNumber('123-123')).toBe(false);
});


// isEmail() unit tests
test('checks if evankauh@gmail.com is an email', () => {
  expect(isEmail('evankauh@gmail.com')).toBe(true);
});

test('checks if hello@yahoo.net is an email', () => {
  expect(isEmail('123@yahoo.net')).toBe(true);
});

test('checks if evan.kauh.gmail.com is an email', () => {
  expect(isEmail('evan.kauh.gmail.com')).toBe(false);
});

test('checks if word is an email', () => {
  expect(isEmail('word@gmailcom')).toBe(false);
});


// isStrongPassword unit tests
test('checks if a1234 is strong password', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});

test('checks if Evan_123_Kauh is strong password', () => {
  expect(isStrongPassword('Evan_123_Kauh')).toBe(true);
});

test('checks if 1234a is strong password', () => {
  expect(isStrongPassword('1234a')).toBe(false);
});

test('checks if isstrongpassword will return false for passwords over 15 characters', () => {
  expect(isStrongPassword('ThisPasswordIsWayWayWayTooLong')).toBe(false);
});


// isDate unit tests
test('checks if 12/03/2002 is a date', () => {
  expect(isDate('12/03/2002')).toBe(true);
});

test('checks if 1/2/9999 is a date', () => {
  expect(isDate('1/2/9999')).toBe(true);
});

test('checks if 12032002 is a date', () => {
  expect(isDate('12032002')).toBe(false);
});

test('checks if 12/03/123 is a date', () => {
  expect(isDate('12/03/123')).toBe(false);
});

// isHexColor unit tests
test('checks if FFF is a Hex Color', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('checks if 123a44 is a Hex Color', () => {
  expect(isHexColor('123a44')).toBe(true);
});

test('checks if 1 is a Hex Color', () => {
  expect(isHexColor('1')).toBe(false);
});

test('checks if 3333333 is a Hex Color', () => {
  expect(isHexColor('3333333')).toBe(false);
});