// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

/* test('description', () => {
  expect(function(parameters)).toBe(result);
}); */

// matches valid phone numbers
test('(123) 456-7890 should be a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true)
});
test('123-4567 should be a valid phone number', () => {
  expect(isPhoneNumber('123-4567')).toBe(true)
});
test('1234567890 should be a invalid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(true)
});
test('1234567 should be a invalid phone number', () => {
  expect(isPhoneNumber('1234567')).toBe(true)
});

// matches valid emails
test('alex@gmail.com should be a valid email', () => {
  expect(isEmail('alex@gmail.com')).toBe(true)
});
test('alex@yahoo.com should be a valid email', () => {
  expect(isEmail('alex@gmail.com')).toBe(true)
});
test('alex.com should be a invalid email', () => {
  expect(isEmail('alex.com')).toBe(true)
});
test('@gmail.com should be a invalid email', () => {
  expect(isEmail('@gmail.com')).toBe(true)
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('Password_1 should be a valid password', () => {
  expect(isStrongPassword('Password_1')).toBe(true)
});
test('pass1234 should be a valid password', () => {
  expect(isStrongPassword('pass1234')).toBe(true)
});
test('1234 should be an invalid password', () => {
  expect(isStrongPassword('1234')).toBe(true)
});
test('#### should be a invalid password', () => {
  expect(isStrongPassword('####')).toBe(true)
});


// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('11/05/2004 should be a valid date', () => {
  expect(isDate('11/05/2004')).toBe(true)
});
test('1/1/2025 should be a valid date', () => {
  expect(isDate('1/1/2025')).toBe(true)
});
test('11-05-2004 should be an invalid date', () => {
  expect(isDate('11-05-2004')).toBe(true)
});
test('1/1/25 should be a invalid date', () => {
  expect(isDate('1/1/25')).toBe(true)
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('#fff should be a valid hex code', () => {
  expect(isHexColor('#fff')).toBe(true)
});
test('#ffffff should be a valid hex code', () => {
  expect(isHexColor('#ffffff')).toBe(true)
});
test('#fffff should be an invalid hex code', () => {
  expect(isHexColor('#fffff')).toBe(true)
});
test('ffff should be a invalid hex code', () => {
  expect(isHexColor('ffff')).toBe(true)
});