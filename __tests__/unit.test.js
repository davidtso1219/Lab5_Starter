// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//testing the Phone Number
test('Number (123)456-7890', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});
test('Number 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Number 4567890', () => {
  expect(isPhoneNumber('4567890')).toBe(false);
});
test('Number (123)456-789', () => {
  expect(isPhoneNumber('(123)456-789')).toBe(false);
});


//Test the email
test('Email: Bob@gmail.com', () => {
  expect(isEmail('Bob@gmail.com')).toBe(true);
});
test('Email: Hello@yahoo.com', () => {
  expect(isEmail('Hello@yahoo.com')).toBe(true);
});
test('Email: (abc)456-7890', () => {
  expect(isEmail('(abc)456-7890')).toBe(false);
});
test('Email: @gmail.com', () => {
  expect(isEmail('@gmai.com')).toBe(false);
});


//Testing for Password
test('Password: A12345', () => {
  expect(isStrongPassword('A12345')).toBe(true);
});
test('Password: B342789weqyui', () => {
  expect(isStrongPassword('B342789weqyui')).toBe(true);
});
test('Password: 8asdfg', () => {
  expect(isStrongPassword('8asdfg')).toBe(false);
});
test('Password: A12', () => {
  expect(isStrongPassword('A12')).toBe(false);
});

//Test the date
test('Date: 1/2/2004', () => {
  expect(isDate('1/2/2004')).toBe(true);
});
test('Date: 10/21/2004', () => {
  expect(isDate('10/21/2004')).toBe(true);
});
test('Date:Ab/23/2004', () => {
  expect(isDate('Ab/23/2004')).toBe(false);
});
test('Date: 23/23/23', () => {
  expect(isDate(' 23/23/23')).toBe(false);
});

//Test HexColors
test('Color: #6cc2c5', () => {
  expect(isHexColor('#6cc2c5')).toBe(true);
});
test('Color: #ef6e8c', () => {
  expect(isHexColor('#ef6e8c')).toBe(true);
});
test('Color: e', () => {
  expect(isHexColor('e')).toBe(false);
});
test('Color: #ef6e8', () => {
  expect(isHexColor('#ef6e8')).toBe(false);
});