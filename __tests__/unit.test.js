// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('this should be true' , ()=>{
expect(isPhoneNumber("(113) 436-7390")).toBe(true);
})
test('this should be true' , ()=>{
  expect(isPhoneNumber("(124) 356-7290")).toBe(true);
  })
test('this should be true' , ()=>{
    expect(isPhoneNumber("(1x4) 45''s6-7890")).toBe(false);
    })
test('this is wrong format',()=>{
  expect(isPhoneNumber('1233213211111111231')).toBe(false);
})
test('this is true', ()=>{
  expect(isEmail('123@GMAIL.COM')).toBe(true)
})
test('this is true', ()=>{
  expect(isEmail('321@GMAIL.COM')).toBe(true)
})
test('this is false', ()=>{
  expect(isEmail('321@GMAIL.xxxCOM')).toBe(false)
})
test('this is false', ()=>{
  expect(isEmail('321@GMAIL.COMcn')).toBe(false)
})
test('this is not strong password',()=>{
  expect(isStrongPassword('adfugauigaugdhuiabfouahn3')).toBe(false)
})
test('this is not strong password',()=>{
  expect(isStrongPassword('aaugdhuaabfouahn3')).toBe(false)
})
test('this is strong password',()=>{
  expect(isStrongPassword('#1359.SAxss==aess')).toBe(false)
})
test('this is strong password',()=>{
  expect(isStrongPassword('#322313//59..ss')).toBe(false)
})
test('this is date',()=>{
  expect(isDate('10/11/2321')).toBe(true)
})
test('this is date',()=>{
  expect(isDate('08/21/2022')).toBe(true)
})
test('this is not date',()=>{
  expect(isDate('5/11/21')).toBe(false)
})
test('this is not date',()=>{
  expect(isDate('3/12/212')).toBe(false)
})
test('this is hex color',()=>{
  expect(isHexColor('fff')).toBe(true)
})
test('this is hex color',()=>{
  expect(isHexColor('ffffff')).toBe(true)
})
test('this is not hex color',()=>{
  expect(isHexColor('fffffff')).toBe(false)
})
test('this is not hex color',()=>{
  expect(isHexColor('ffffffff')).toBe(false)
})




    
