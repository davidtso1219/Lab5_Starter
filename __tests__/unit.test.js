// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// phone Number Tests

test('isPhoneNumberCorrectInput1', ()=>{
  expect(isPhoneNumber("858-768-2124")).toBe(true);
})

test('isPhoneNumberCorrectInput2', ()=>{
  expect(isPhoneNumber("967-668-2324")).toBe(true);
})

test('isPhoneNumberInCorrectInput1', ()=>{
  expect(isPhoneNumber("9676682324")).toBe(false);
})

test('isPhoneNumberInCorrectInput2', ()=>{
  expect(isPhoneNumber("374245455400126")).toBe(false);
})

// test isEmail function

test('isEmailValidInput1', () =>{
  expect(isEmail("isEmail@email.com")).toBe(true);
})

test('isEmailValidInput2', () =>{
  expect(isEmail("noThankYou@yeet.io")).toBe(true);
})

test('isEmailInValidInput1', () =>{
  expect(isEmail("noThankYouyeet.io")).toBe(false);
})

test('isEmailInValidInput2', () =>{
  expect(isEmail("")).toBe(false);
})

// test isStrongPassword 

test('isStrongPasswordValidInput1', ()=>{
  expect(isStrongPassword('aStrongPassword')).toBe(true);
})

test('isStrongPasswordValidInput2', ()=>{
  expect(isStrongPassword('securePassword_')).toBe(true);
})

test('isStrongPasswordInValidInput1', ()=>{
  expect(isStrongPassword('securePassword_LongerThan15')).toBe(false);
})

test('isStrongPasswordInValidInput2', ()=>{
  expect(isStrongPassword('cat')).toBe(false);
})

// test isDate function

test('isDateValidInput1', ()=>{
  expect(isDate('10/12/2024')).toBe(true);
})

test('isDateValidInput2', ()=>{
  expect(isDate('6/9/2024')).toBe(true);
})

test('isDateInvalidInput1', ()=>{
  expect(isDate('123/01/2001')).toBe(false);
})

test('isDateInvalidInput2', ()=>{
  expect(isDate('09/08/21')).toBe(false);
})


// test isHexColor

test('isHexColorValidInput1', ()=>{
  expect(isHexColor('#fff')).toBe(true);
})

test('isHexColorValidInput2', ()=>{
  expect(isHexColor('#4128d2')).toBe(true);
})

test('isHexColorInValidInput1', ()=>{
  expect(isHexColor('##4128d2')).toBe(false);
})

test('isHexColorInValidInput2', ()=>{
  expect(isHexColor('#fffffff')).toBe(false);
})

