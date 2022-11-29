const upperCase = RegExp(/^(?=.*[A-Z]).+$/);
const lowerCase = RegExp(/^(?=.*[a-z]).+$/);
const number = RegExp(/^(?=.*[0-9]).+$/);
const specialCharacter = RegExp(/(?=.*\W)/g);
const sequenceChar = RegExp(/[A-Za-z]{2}/g);
const sequenceNumber = RegExp(/\d{2}/g);

export const validateUpperLowerNumber = (password:string) => {
  if (password === "") return false;

  upperCase.test(password) && lowerCase.test(password) && number.test(password);
};

export const validateSequence = (password:string) => {
  if (password === "") return false;

  sequenceChar.test(password) || sequenceNumber.test(password);
};

export const validateSpecialCharacter = (password:string) => {
  if (password === "") return false;

  specialCharacter.test(password);
};

export const validateLenght = (password:string) =>{
  const lenght = password.length >= 8 && password.length <= 16;
  if(lenght){
    return true;
  }else{
    return false;
  }
};

export const validateEmailCheck = (email:string) => {
  const emailCheck = RegExp(/^(.+)@(.+).com$/g);

  return (
    emailCheck.test(email)
  );
};

export const validateAll = (password: string) => {
  if (password === "") return false;

  return (
    validateUpperLowerNumber(password) && 
    validateSequence(password) &&
    validateSpecialCharacter(password) &&
    validateLenght(password) &&
    validateEmailCheck(password)
  );
};