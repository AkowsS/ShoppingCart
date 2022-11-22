import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { Footer } from "../../components/Footer";
import GoogleIcon from '../../assets/icons/google.png';
import GithubIcon from "../../assets/icons/github-logo.png";
import CheckIcon from "../../assets/icons/icon-check.png";
import CloseIcon from "../../assets/icons/icon-close.png"
import { Container, DivIntern, InputLogin, TextLogin,ConfirmButton,RegistrationDiv, View } from "./Registration.styles";

export const Registration: React.FC = () => {
  const [validateInput, setValidadeInput] = useState({
    case:false,
    lenght:false,
    sequence:false,
    specialCharacter:false,
  });
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");

  const secureText = (password:string) => {
    const lenght = password.length >= 6 && password.length <= 16;
    const upperCase = RegExp(/^(?=.*[A-Z]).+$/);
    const lowerCase = RegExp(/^(?=.*[a-z]).+$/);
    const number = RegExp(/^(?=.*[0-9]).+$/);
    const specialCharacter = RegExp(/(?=.*\W)/g);
    const sequenceChar = RegExp(/[A-Za-z]{2}/g);
    const sequenceNumber = RegExp(/\d{2}/g);

    setValidadeInput({
      case: upperCase.test(password) && lowerCase.test(password) && number.test(password),
      lenght,
      sequence: sequenceChar.test(password) || sequenceNumber.test(password),
      specialCharacter:specialCharacter.test(password),
    });
  };

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    secureText(evt.target.value);
  };
  const onVerifyPassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(evt.target.value);
    if(passwordCheck !== password){
      return false;
    };
  };
  const onNameInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };
  const onEmailInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  return (
    <Container>
      <Header/>
      <DivIntern>
        <div>
            <TextLogin>Nome:</TextLogin>
            <InputLogin onChange={onNameInputChange}/>
            <TextLogin>Email:</TextLogin>
            <InputLogin onChange={onEmailInputChange}/>
            <TextLogin>Senha:</TextLogin>
            <InputLogin type = "password" onChange={onChangePassword}/>
            <View>
              <img src={validateInput.specialCharacter ? CheckIcon : CloseIcon} alt="" />
              <p>Ao menos um caracter especial.</p>
            </View>
            <View>
              <img src={validateInput.lenght ? CheckIcon : CloseIcon} alt="" />
              <p>No mínimo 8 caracteres e no máximo 16.</p>
            </View>
            <View>
              <img src={validateInput.case ? CheckIcon : CloseIcon} alt="" />
              <p>Conter letras maiúsculas, minúsculas e números.</p>
            </View>
            <View>
              <img src={validateInput.sequence ? CloseIcon : CheckIcon} alt="" />
              <p>Não pode ter letras ou números em sequência (ex.: da, 27, aa)</p>
            </View>
            <TextLogin>Confirmar senha:</TextLogin>
            <InputLogin type = "password" onChange={onVerifyPassword}/>
            <ConfirmButton disabled={(password == passwordCheck && password != "")? false: true}><p>Registrar</p></ConfirmButton>
          <RegistrationDiv>
            Entrar com: 
            <Link to =""><img src={GoogleIcon} alt="Google"/></Link>
            <Link to =""><img src={GithubIcon} alt="Github"/></Link>
          </RegistrationDiv>
          <RegistrationDiv>Ja possui uma conta? <Link to ="/login"><p>Faça Login</p></Link></RegistrationDiv>
        </div>
      </DivIntern>
      <Footer/>
    </Container>
  );
};