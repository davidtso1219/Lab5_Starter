// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


// isPhone Number
test('Checking (222) 333-4444', () => {
  expect(isPhoneNumber('(222) 333-4444')).toBe(true)
});

test('Checking 222-333-4444', () => {
  expect(isPhoneNumber("222-333-4444")).toBe(true)
});

test('Checking 222 333 4444', () => {
  expect(isPhoneNumber("222 333 4444")).toBe(false);
});

test('Checking 2223334444', () => {
  expect(isPhoneNumber("2223334444")).toBe(false);
});

// isEmail
test('Checking test1@gmail.com', () =>{
  expect(isEmail('test1@gmail.com')).toBe(true)
});

test('Checking peter@ucsd.edu', () =>{
  expect(isEmail('peter@ucsd.edu')).toBe(true)
});

test('Checking peterucsd.edu', () =>{
  expect(isEmail('peterucsd.edu')).toBe(false)
});

test('Checking peter@ucsdedu', () =>{
  expect(isEmail('peter@ucsdedu')).toBe(false)
});

// isStrongPassword
test('Checking "12a4u2917asdjkakjhaj17"', () => {
  expect(isStrongPassword('12a4u2917asdjkakjhaj17')).toBe(false)
});

test('Checking "Ch"', () => {
  expect(isStrongPassword('Ch')).toBe(false)
});

test('Checking "a247c65kl"', () => {
  expect(isStrongPassword('a247c65kl')).toBe(true)
});

test('Checking "Kn26djak17y7"', () => {
  expect(isStrongPassword('Kn26djak17y7')).toBe(true)
});

// isDate
test('Checking 05/06/2024', () =>{
  expect(isDate('05/06/2024')).toBe(true)
});

test('Checking 5/6/2024', () =>{
  expect(isDate('5/6/2024')).toBe(true)
});

test('Checking 562024', () =>{
  expect(isDate('562024')).toBe(false)
});

test('Checking 115/116/2024', () =>{
  expect(isDate('115/116/2024')).toBe(false)
});

// isHexColor
test('Checking ASD123', () =>{
  expect(isHexColor('ASD123')).toBe(false)
});

test('Checking #ABZ234', () =>{
  expect(isHexColor('#ABZ234')).toBe(false)
});

test('Checking #AAA', () =>{
  expect(isHexColor('#AAA')).toBe(true)
});

test('Checking #123456', () =>{
  expect(isHexColor('#123456')).toBe(true)
});