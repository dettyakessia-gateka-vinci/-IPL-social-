import { Main } from "../src/passwordChecker.js";


describe('Password Checker', () => {
  const main=new Main();
  
  it('should return true when M@2345678 is given ', () => {
   
    const result = main.isvalidatePassword('M@2345678');
  
    expect(result).toBe(true); 
});

it('should return true when M@234567 is given ', () => {

  const result = main.isvalidatePassword('M@234567');

  expect(result).toBe(true); 
});

});
