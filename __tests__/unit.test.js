// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('checks if "fda" is a strong password', () => {
  expect(isStrongPassword("fda")).toBe(false);
});

test('checks if "fdafdafdafdafad123" is a strong password', () => {
  expect(isStrongPassword("fdafdafdafdafad123")).toBe(false);
});

test('checks if "strongpassword" is a strong password', () => {
  expect(isStrongPassword("strongpassword")).toBe(true);
});

test('checks if "superstrong123" is a strong password', () => {
  expect(isStrongPassword("superstrong123")).toBe(true);
});

test('checks if "11/11/123" is a date', () => {
  expect(isDate("11/11/123")).toBe(false);
});

test('checks if "1/11/123" is a date', () => {
  expect(isDate("1/11/123")).toBe(false);
});

test('checks if "11/11/2004" is a date', () => {
  expect(isDate("11/11/2004")).toBe(true);
});

test('checks if "11/11/2005" is a date', () => {
  expect(isDate("11/11/2005")).toBe(true);
});

test('checks if "fda" is an email', () => {
  expect(isEmail("fda")).toBe(false);
});

test('checks if "fda123" is an email', () => {
  expect(isEmail("fda123")).toBe(false);
});

test('checks if "fda@gmail.com" is an email', () => {
  expect(isEmail("fda@gmail.com")).toBe(true);
});

test('checks if "fda123@gmail.com" is an email', () => {
  expect(isEmail("fda123@gmail.com")).toBe(true);
});

test('checks if "fda" is a phone number', () => {
  expect(isPhoneNumber("fda")).toBe(false);
});

test('checks if "1243231234" is a phone number', () => {
  expect(isPhoneNumber("1243231234")).toBe(false);
});

test('checks if "(661) 432-1234" is a phone number', () => {
  expect(isPhoneNumber("(661) 432-1234")).toBe(true);
});

test('checks if "661-432-1234" is a phone number', () => {
  expect(isPhoneNumber("661-432-1234")).toBe(true);
});

test('checks if "13" is a hex color', () => {
  expect(isHexColor("13")).toBe(false);
});

test('checks if "1fds3" is a hex color', () => {
  expect(isHexColor("1fds3")).toBe(false);
});

test('checks if "#112233" is a hex color', () => {
  expect(isHexColor("#112233")).toBe(true);
});

test('checks if "#123" is a hex color', () => {
  expect(isHexColor("#123")).toBe(true);
});