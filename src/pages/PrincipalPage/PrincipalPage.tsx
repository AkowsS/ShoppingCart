import { Button, Typography } from '@mui/material';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Products } from '../../components/Products';
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