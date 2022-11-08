import React, { useContext } from 'react';
import { Container, DivIntern,TextInformations,ItemTitle,ItemDescription, CentralizeItens, AddtoCar } from './ProductDescriptionPage.styles';
import { ProductCart, ValueContext,ProductInfo } from '../../context/Cart';
import { Header } from '../../components';
import { Footer } from '../../components/Footer';
import { Description } from '../../components/Description';

export function ProductDescriptionPage({data}:any){
  const {product} = useContext(ValueContext);
  
  return (
    <Container>
      <Header/>
        <Description data = {product}/>
      <Footer/>
    </Container>
  );
};