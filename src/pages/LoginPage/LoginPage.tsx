import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { Footer } from "../../components/Footer";
import GoogleIcon from '../../assets/icons/google.png';
import GithubIcon from "../../assets/icons/github-logo.png";
import { Container, DivIntern, InputLogin, TextLogin,ConfirmButton,RegistrationDiv } from "./LoginPage.syles";

export const LoginPage: React.FC = () => {

  return (
    <Container>
      <Header/>
      <DivIntern>
        <div>
          <TextLogin>Login:</TextLogin>
          <InputLogin/>
          <TextLogin>Senha:</TextLogin>
          <InputLogin type = "password"/>
          <RegistrationDiv>Não possui uma conta? <Link to ="/registration-page"><p>Cadastrar</p></Link></RegistrationDiv>
          <ConfirmButton><p>Entrar</p></ConfirmButton>
          <RegistrationDiv>
            Entrar com: 
            <Link to =""><img src={GoogleIcon} alt="Google"/></Link>
            <Link to =""><img src={GithubIcon} alt="Github"/></Link>
          </RegistrationDiv>
        </div>
      </DivIntern>
      <Footer/>
    </Container>
  );
};