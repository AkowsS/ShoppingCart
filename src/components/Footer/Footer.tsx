import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import { Container, DivExtern } from './Footer.styles';

export const Footer: React.FC = () => {

  return (
    <Container>
      <DivExtern>
        <img src={Logo} alt="shopLogo"/>
      </DivExtern>
    </Container>
  );
};