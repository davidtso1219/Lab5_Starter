// unit.test.js

//import test from 'node:test';
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


//isPhoneNumber Tests:
test('Is 5 a number?', () => {
  expect(isPhoneNumber(/5/)).toBe(false);
});

test('Is 0000000000000000 a number?', () => {
  expect(isPhoneNumber(/222222222222222/)).toBe(false);
});

test('Is 571-233-5259 a number?', () => {
  expect(isPhoneNumber(/571-233-5259/)).toBe(true);
});

test('Is 866-246-6453 a number?', () => {
  expect(isPhoneNumber(/866-246-6453/)).toBe(true);
});



//isEmail Tests: 
test('Is a@a an email?', () => {
  expect(isEmail(/a@a.c/)).toBe(false);
});

test('Is a@abcdedf an email?', () => {
  expect(isEmail(/a@abcdedf.thomas/)).toBe(false);
});

test('Is s2sriram@ucsd.edu a number?', () => {
  expect(isEmail(/sJss_xs9D@.Zu/)).toBe(true);
});

test('Is john@gmail.com a number?', () => {
  expect(isEmail(/john@gmail.com/)).toBe(true);
});
