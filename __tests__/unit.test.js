// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test isPhoneNumber function
test('858-437-8569 is a valid phone number', () => {
  expect(isPhoneNumber('858-437-8569')).toBe(true);
});

test('619-439-8537 is a valid phone number', () => {
  expect(isPhoneNumber('619-439-8537')).toBe(true);
});

test('isPhoneNumber function', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('isPhoneNumber function', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

// Test isEmail function

test('test isEmail function', () => {
  expect(isEmail('mohabibi@ucsd.edu')).toBe(true);
});

test('test isEmail function', () => {
  expect(isEmail('habibimomina@gmail.com')).toBe(true);
});

test('test isEmail function', () => {
  expect(isEmail('mucsd')).toBe(false);
});

test('test isEmail function', () => {
  expect(isEmail('m.com')).toBe(false);
});

// Test isStrongPassword function

test('test isStrongPassword function', () => {
  expect(isStrongPassword('121dvdk')).toBe(false);
});    

test('test isStrongPassword function', () => {  
  expect(isStrongPassword('12sdsf')).toBe(false);
});

test('test isStrongPassword function', () => {
  expect(isStrongPassword('mohabibi123_')).toBe(true);
});

test('test isStrongPassword function', () => {
  expect(isStrongPassword('mohabibi123_')).toBe(true);
});

// Test isDate function
// isDate
test('01/01/2024 is a valid date', () => {
  expect(isDate('01/01/2024')).toBe(true);
});
test('2/3/1001 is a valid date', () => {
  expect(isDate('2/3/1001')).toBe(true);
});
test('1/1/1 is not a valid date', () => {
  expect(isDate('1/1/1')).toBe(false);
});
test('202/202/2020 is not a valid date', () => {
  expect(isDate('202/202/2020')).toBe(false);
});

// isHexColor
test('#000 is a valid hex color', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('#FFFFFF is a valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('#ZZZ is not a valid hex color', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});
test('#1111 is not a valid hex color', () => {
  expect(isHexColor('#1111')).toBe(false);
});