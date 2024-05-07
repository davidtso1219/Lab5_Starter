// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Unit Tests for isPhoneNumber:

//return true:
test('tests if (123)456-7890 is valid number', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('test if 456-789-1011 is a valid number', () => {
  expect(isPhoneNumber('456-789-1011')).toBe(true);
});

//return false:
test('test if 453-1 is a valid number', () => {
  expect(isPhoneNumber('453-1')).toBe(false);
});

test('test if 0 is a valid number', () => {
  expect(isPhoneNumber('0')).toBe(false);
});


//Unit Tests for isEmail:

//return true:
test('test if example@example.com is valid email', () => {
  expect(isEmail('example@example.com')).toBe(true);
});

test('test if company@employee.org is valid email', () => {
  expect(isEmail('company@employee.org')).toBe(true);
});

//return false:
test('test if company@.com is valid email', () => {
  expect(isEmail('company@.com')).toBe(false);
});

test('test if company is valid email', () => {
  expect(isEmail('company')).toBe(false);
});


//Unit Tests for isStrongPassword:

//return true:
test('test if johndoe1456 is a strong password', () => {
  expect(isStrongPassword('johndoe1456')).toBe(true);
});

test('test if sc0hoal1fa1 is a strong password', () => {
  expect(isStrongPassword('sc0hoal1fa1')).toBe(true);
});

//return false:
test('test if hey is a strong password', () => {
  expect(isStrongPassword('hey')).toBe(false);
});

test('test if 1234567891012131 is a strong password', () => {
  expect(isStrongPassword('1234567891012131')).toBe(false);
});


//Unit Tests for isDate:

//return true:
test('test if 12/10/2023 is a valid date', () => {
  expect(isDate('12/10/2023')).toBe(true);
});

test('test if 1/1/2023 is a valid date', () => {
  expect(isDate('1/1/2023')).toBe(true);
});

//return false:
test('test if 1/1/24 is a valid date', () => {
  expect(isDate('1/1/24')).toBe(false);
});

test('test if 13/105/24 is a valid date', () => {
  expect(isDate('13/105/24')).toBe(false);
});


//Unit Tests for isHexColor:

//return true:
test('test if #FFFFFF is a valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('test if #FFF is a valid hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

//return false:
test('test if #ghijklmnop is a valid hex color', () => {
  expect(isHexColor('#ghijklmnop')).toBe(false);
});

test('test if #0 is a valid hex color', () => {
  expect(isHexColor('#0')).toBe(false);
});



