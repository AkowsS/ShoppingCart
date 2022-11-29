import React from 'react';
import { Header,Footer,Products } from "components/";
import { Container, DivIntern } from './PrincipalPage.styles'

export const PrincipalPage: React.FC = () => {

  return (
    <Container>
      <Header/>

      <DivIntern>
        <Products/>
      </DivIntern>

      <Footer/>
    </Container>
  );
};