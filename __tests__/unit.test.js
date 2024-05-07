// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber should return true for a valid phone number', () => {
  expect(isPhoneNumber('858-999-7890')).toBe(true);

  expect(isPhoneNumber('385-533-0188')).toBe(true);
});

test('isPhoneNumber should return true for a valid phone number', () => {
  expect(isPhoneNumber('8589997890')).toBe(false);

  expect(isPhoneNumber('123999')).toBe(false);
});


test('isEmail should return true for a valid email address', () => {
  expect(isEmail('allenazazssd@gmail.com')).toBe(true);

  expect(isEmail('p1lai@ucsd.edu')).toBe(true);


});


test('isEmail should return false for an invalid email address', () => {
  expect(isEmail('allenazazssd')).toBe(false);

  expect(isEmail('@ucsd.edu')).toBe(false);

});


test('isStrongPassword should return true for a strong password', () => {
  // A password that meets all the criteria
  expect(isStrongPassword('Password123')).toBe(true);

  expect(isStrongPassword('Pass_123')).toBe(true);
});

test('isStrongPassword should return false for a strong password', () => {
  // A password that meets all the criteria
  expect(isStrongPassword('Secure_Password123')).toBe(false);


  expect(isStrongPassword('!!!123')).toBe(false);

});


test('isDate should return true for a valid date', () => {
  expect(isDate('1/1/2022')).toBe(true);
  expect(isDate('01/22/2025')).toBe(true);
});

test('isDate should return false for an invalid date', () => {
  // Invalid dates
  expect(isDate('2032/1/2133')).toBe(false); // Day is out of range // Month is out of range
  expect(isDate('10/22/201')).toBe(false); // Month has leading zero
});

test('isHexColor should return true for a valid hex color', () => {
  // Valid hex colors
  expect(isHexColor('#f00')).toBe(true); // Short form
  expect(isHexColor('#ff0000')).toBe(true); // Long form
});

test('isHexColor should return false for an invalid hex color', () => {
  // Invalid hex colors
  expect(isHexColor('f0044141')).toBe(false); // too long
  expect(isHexColor('#')).toBe(false); // Missing #

});