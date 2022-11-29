import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header,Footer } from "components/";
import { GoogleIcon, GithubIcon, CheckIcon, CloseIcon } from "assets/";
import { Container, DivIntern, InputRegistration, LabelRegistration,ConfirmButton,RegistrationDiv, View } from "./Registration.styles";
import { validateUpperLowerNumber,validateLenght, validateSequence, validateAll, validateSpecialCharacter, validateEmailCheck } from "../../context/Validation";
export const Registration: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");

  let lenght = validateLenght(password);
  let allconfirm = validateAll(password);
  let validateCaseNumber = validateUpperLowerNumber(password);
  let sequence = validateSequence(password);
  let special = validateSpecialCharacter(password);
  let mail = validateEmailCheck(email);

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
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
            <LabelRegistration>Nome:</LabelRegistration>
            <InputRegistration onChange={onNameInputChange}/>
            <LabelRegistration>Email:</LabelRegistration>
            <InputRegistration onChange={onEmailInputChange}/>
            <View>
              <img src={mail ? CheckIcon : CloseIcon} alt="" />
              <p>O email {mail ? "" : "não"} atende os padrões</p>
            </View>
            <LabelRegistration>Senha:</LabelRegistration>
            <InputRegistration type = "password" onChange={onChangePassword}/>
            <View>
              <img src={special ? CheckIcon : CloseIcon} alt="" />
              <p>Ao menos um caracter especial.</p>
            </View>
            <View>
              <img src={lenght ? CheckIcon : CloseIcon} alt="" />
              <p>No mínimo 8 caracteres e no máximo 16.</p>
            </View>
            <View>
              <img src={validateCaseNumber ? CheckIcon : CloseIcon} alt="" />
              <p>Conter letras maiúsculas, minúsculas e números.</p>
            </View>
            <View>
              <img src={sequence ? CloseIcon : CheckIcon} alt="" />
              <p>Não pode ter letras ou números em sequência (ex.: da, 27, aa)</p>
            </View>
            <LabelRegistration>Confirmar senha:</LabelRegistration>
            <InputRegistration type = "password" onChange={onVerifyPassword}/>
            <ConfirmButton disabled={allconfirm ? false: true}><p>Registrar</p></ConfirmButton>
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