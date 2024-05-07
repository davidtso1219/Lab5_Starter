// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


//isPhoneNumber

// TRUE 
test('without parentheses', () => {
  expect(isPhoneNumber("760-818-5522")).toBe(true);
});
// TRUE 
test('Phone number with parentheses', () => {
  expect(isPhoneNumber("(760)-818-5522")).toBe(true);
});
// FALSE 
test('without any dashes', () => {
  expect(isPhoneNumber("7608185522")).toBe(false);
});
// FALSE 
test('invalid input', () => {
  expect(isPhoneNumber("545")).toBe(false);
});

// isEmail
// TRUE
test('regular email', () => {
  expect(isEmail("apn001@ucsd.edu")).toBe(true);
});
// TRUE 
test('regular email 2', () => {
  expect(isEmail("andrewphanguyen@gmail.com")).toBe(true);
});
// FALSE 
test(' bad result', () => {
  expect(isEmail("apn001@andrew")).toBe(false);
});
// FALSE 
test('no @', () => {
  expect(isEmail("andrewpahnguyengmail.com")).toBe(false);
});

// isStrongPassword
// TRUE
test('regular input', () => {
  expect(isStrongPassword("loser")).toBe(true);
});
// TRUE 
test('longer input', () => {
  expect(isStrongPassword("loser12345")).toBe(true);
});
// FALSE 
test('password 1 word', () => {
  expect(isStrongPassword("A")).toBe(false);
});
// FALSE 
test('password too many words', () => {
  expect(isStrongPassword("jsdfhgsodihf;dosihfdsoihsd'ohdsfohdsf'hsdfsd'foph'o")).toBe(false);
});


// isDate
// TRUE 
test('regular input', () => {
  expect(isDate("5/6/2024")).toBe(true);
});
// TRUE 
test('regular input with 0', () => {
  expect(isDate("05/04/2024")).toBe(true);
});
// FALSE 
test('wrong input', () => {
  expect(isDate("sadsdasads")).toBe(false); 
});
// FALSE 
test('inputs too long', () => {
  expect(isDate("232323/2323/2024")).toBe(false);
});

// isHexColor
// TRUE 
test('regular input', () => {
  expect(isHexColor("#0bb101")).toBe(true);
});
// TRUE 
test('regular input 2', () => {
  expect(isHexColor("#4d54b7")).toBe(true);
});
// FALSE 
test('invalid input', () => {
  expect(isHexColor("#dsfdsfdfsdsffds")).toBe(false);
});
// FALSE 
test('invlaid input 2', () => {
  expect(isHexColor("#;'''][.?")).toBe(false);
});