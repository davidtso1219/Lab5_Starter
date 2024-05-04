// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TESTING

// isPhoneNumber
// TRUE 1
test('Phone number without parentheses', () => {
  expect(isPhoneNumber("760-453-3424")).toBe(true);
});
// TRUE 2
test('Phone number with parentheses', () => {
  expect(isPhoneNumber("(760)-453-3424")).toBe(true);
});
// FALSE 1
test('Phone number without any hyphens', () => {
  expect(isPhoneNumber("7604533424")).toBe(false);
});
// FALSE 2
test('Phone number not long enough', () => {
  expect(isPhoneNumber("76098")).toBe(false);
});

// isEmail
// TRUE 1
test('Normal email with .com', () => {
  expect(isEmail("kaiwoes@gmail.com")).toBe(true);
});
// TRUE 2
test('Normal email with .edu', () => {
  expect(isEmail("kwoes@ucsd.edu")).toBe(true);
});
// FALSE 1
test('Normal email with no @', () => {
  expect(isEmail("kwoesucsd.edu")).toBe(false);
});
// FALSE 2
test('Normal email with long domain', () => {
  expect(isEmail("kwoes@ucsd.education")).toBe(false);
});

// isStrongPassword
// TRUE 1
test('Short but valid password', () => {
  expect(isStrongPassword("door")).toBe(true);
});
// TRUE 2
test('Long but valid password', () => {
  expect(isStrongPassword("IEnjoyZebras")).toBe(true);
});
// FALSE 1
test('Too short password', () => {
  expect(isStrongPassword("hi")).toBe(false);
});
// FALSE 2
test('Too long password', () => {
  expect(isStrongPassword("supercalifragilisticexpialodocious")).toBe(false);
});

// isDate
// TRUE 1
test('Valid date with XX', () => {
  expect(isDate("05/04/2024")).toBe(true);
});
// TRUE 2
test('Valid date with X', () => {
  expect(isDate("5/4/2024")).toBe(true);
});
// FALSE 1
test('Year not 4 characters', () => {
  expect(isDate("05/04/202")).toBe(false); 
});
// FALSE 2
test('Letters in date', () => {
  expect(isDate("ab/cd/efgh")).toBe(false);
});
// isHexColor
// TRUE 1
test('3 value valid hex', () => {
  expect(isHexColor("#AB2")).toBe(true);
});
// TRUE 2
test('6 value valid hex', () => {
  expect(isHexColor("#ABCD12")).toBe(true);
});
// FALSE 1
test('Not 3 or 6 values', () => {
  expect(isHexColor("#ABCDEFABC")).toBe(false);
});
// FALSE 2
test('Invalid characters', () => {
  expect(isHexColor("#ABC12$")).toBe(false);
});
